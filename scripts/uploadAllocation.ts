// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import {run, ethers, upgrades} from 'hardhat';
import { BigNumber } from "ethers";
import "@nomiclabs/hardhat-ethers";
import { existsSync, readFileSync, writeFileSync } from 'fs'
import winston, { format } from 'winston'
import csv from 'csvtojson'

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
	await run("compile");

	const accounts = await ethers.getSigners();

	const logger = winston.createLogger({
		level: 'debug',
		format: format.combine(
		  format.colorize(),
		  format.timestamp(),
		  format.align(),
		  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
		),
		transports: [new winston.transports.Console()],
	});

	async function getGasPrice(gasPriceGwei?: string) {
		const gasPrice:BigNumber = gasPriceGwei ? BigNumber.from(gasPriceGwei).mul(1e9) : BigNumber.from((await ethers.provider.getGasPrice()).toString());
		return gasPrice.toString()
	};

	async function sleep(timeout:number) {
		return new Promise(resolve => setTimeout(resolve, timeout * 1000));
	}

	// Define Owner Address
	const owner = accounts[0];
	// Create Instance of the contract

	if (!existsSync('config.json')) throw new Error(`config.json does not exists`)
	const config = JSON.parse(readFileSync('config.json').toString());
	console.log("OMNI Coin config.token Address:", config.token);
	const OmniToken = await ethers.getContractAt("OmniTokenV3", config.token, owner);
	// check if the contract is instanced
	console.log("OMNI Coin Address:", OmniToken.address);

	const batch_size = Number(config.batch)
	const account = accounts[0];
	logger.info(`Using ${await account.getAddress()}`)

	const token = OmniToken;
	let nonce = await ethers.provider.getTransactionCount(token.address);
	logger.info(`Got nonce: ${nonce}`);
	const json = await csv().fromFile(config.airdrop_file, {});
	logger.info(`Got ${json.length} records`);

	const uniqueAddresses = [...new Set(json.map(x => x.address))];
	if (uniqueAddresses.length !== json.length) {
		logger.error(`Found address duplicates! ${uniqueAddresses.length} != ${json.length}`);
		for (const address of uniqueAddresses) {
		const addrs = json.filter(x => x.address === address);
		if (addrs.length > 1) {
			logger.error(`Address: ${address}: ${addrs.length}`);
		}
		}
		process.exit(1);
	}

	let invalids = false;

	for (let i = 0; i < json.length; i++) {
		const item = json[i];
		const valid = ethers.utils.isAddress(item.address);
		if (!valid) {
		invalids = true;
		logger.error(`Address ${item.address} is not valid! ${item.amount}`);
		}
	}
	if (invalids) {
		process.exit(1);
	}

	const totalSum = json
		.map(x => BigInt(x.amount))
		.reduce((a, b) => a + b, BigInt(0));
	const balance = await token.balanceOf(await account.getAddress());

	logger.info(balance);
	logger.info(totalSum);
	if (BigInt(balance) < totalSum) {
		throw new Error(`Address ${await account.getAddress()} does not have enough tokens. Requested: ${totalSum}, balance: ${balance}`);
	}
	logger.info(`Verification complete!`);

	const txs = [];
	for (let i = 0, n = json.length; i < n; i += batch_size) {
		console.info(`Batch ${(i / batch_size) + 1} of ${(Math.ceil(n / batch_size))}`);
		const batch = json.slice(i, i + batch_size);
		console.info(`Using nonce: ${nonce}`);

		const addresses = batch.map(x => x.address);
		const amounts = batch.map(x => x.amount);
		console.info(`Addresses: ${addresses}`)
		console.info(`Amounts: ${amounts}`);
		const allocation:number = config.allocation;
		if (config.dryrun) {
			console.info(`Allocation: ${allocation}`);
		} else {
			const gas = await token.estimateGas.addAllocations(addresses, amounts, allocation);
			console.info(`EstimateGas TX: ${gas}`);
			const recipient = await token.addAllocations(addresses, amounts, allocation, {gasLimit: gas, gasPrice: await getGasPrice(config.gasPrice) });
			const tx = await recipient.wait();
			nonce++;
			console.info(`Generated TX: ${tx.transactionHash}`);
		}
	}

}

  // We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
