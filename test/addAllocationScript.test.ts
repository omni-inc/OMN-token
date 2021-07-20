import { ethers, upgrades } from 'hardhat';
import { BigNumber, Signer } from "ethers";
import  { expect, assert } from "chai";
import { getPermitDigest, getDomainSeparator, sign } from '../utils/signatures';
import { skipBlocks } from '../utils/helpers';
import moment from 'moment';
import { existsSync, readFileSync, writeFileSync } from 'fs'
import winston, { format } from 'winston'
import csv from 'csvtojson'
import { OmniTokenContract } from '../allocation/omnitokenv2'
import 'dotenv/config';

describe("ERC20 Full Test except Vesting", async () => {

	let accounts: Signer[]

	beforeEach(async () => {
		accounts = await ethers.getSigners();
		console.log("Get TimeStamp:", Math.floor((await ethers.provider.getBlock("latest")).timestamp));
	});

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

	//   ** Function Total Supply, Balance of, Name, Symbol, Decimals */
	//   ** 1. Test Initial Value of Smart Contract : How it is working - Test Case */
	//   ** t1. Getting Total Supply Value and verify is the same  Max Total Supply*/
	//   ** t2. Getting Balance of Owner Accounts Value and verify is the same  Max Total Supply */
	//   ** t3. Getting Name Value*/
	//   ** t4. Getting Symbol Value*/
	//   ** t5. Getting Decimals Value*/


	// it("1. Should return the Total Supply, Balance of the Owner, Name, Symbol and Decimals", async () => {
	// 	const OmniToken = await ethers.getContractFactory("OmniTokenV2");
	// 	const omnitoken = await upgrades.deployProxy(OmniToken);

	// 	await omnitoken.deployed();
	// 	// verify the Address
	// 	console.log("OMNI Token deployed to:", omnitoken.address);
	// 	// Verify the balance of the Owner
	// 	console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
	// 	expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.be.equal('638888889000000000000000000');
	// 	console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be 638 million!!! in wei");
	// 	expect(((await omnitoken.totalSupply()).toString())).to.be.equal('638888889000000000000000000');
	// 	describe(' Basic Value', async () => {
	// 		it("1.1.- Verify the Name of the Token", async () => {
	// 			console.log("Name of The Token: ", (await omnitoken.name()).toString(), "=====> must be FAKE App");
	// 			expect(((await omnitoken.name()).toString())).to.be.equal('Fake Token');
	// 		});
	// 		it("1.2.- Verify the Tiker of the Token", async () => {
	// 			console.log("Name of The Token: ", (await omnitoken.symbol()).toString(), "====> must be FAKE");
	// 			expect(((await omnitoken.symbol()).toString())).to.be.equal('FAKE');
	// 		});
	// 		it("1.3.- Verify the Decimals of the Token", async () => {
	// 			console.log("Name of The Token: ", (await omnitoken.decimals()), "=====> must be 18");
	// 			expect((await omnitoken.decimals())).to.be.equal(18);
	// 		});
	// 	});
	// });

	//   ** Function owner(), transferOwnership(), renounceOwnership() */
	//   ** 2. Test OwnerShip Functions of Smart Contract : How it is working - Test Case */
	//   ** t1. Getting Current Owner */
	//   ** t2. Setting Transfer OwnerShip */
	//   ** t3. Setting Renounce OwnerShip */
	//   ** t4. Verify Smart Contract Don't Have any Owner */

	it("2. Script Tool for Add Allocation via Script tool", async function () {
		this.timeout(40000);
		const omnitoken = new ethers.Contract('0xAe4A50E56c3c1a09059A8775BbFE98ec66bE6f1e', OmniTokenContract.raw.abi, accounts[0]);
		// const OmniTokenV2 = await ethers.getContractFactory("OmniTokenV2");
		// const omnitoken = await upgrades.deployProxy(OmniTokenV2);
		// verify the Address
		console.log("OMNI Token deployed to:", omnitoken.address);

		if (!existsSync('config.json')) throw new Error(`config.json does not exists`)
		const config = JSON.parse(readFileSync('config.json').toString())
		config.token = omnitoken.address

		const batch_size = Number(config.batch)
		const account = accounts[0];
		logger.info(`Using ${await account.getAddress()}`)

		const token = omnitoken;
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

			const gas = await token.estimateGas.addAllocations(addresses, amounts, allocation);
			console.info(`EstimateGas TX: ${gas}`);
			const recipient = await token.addAllocations(addresses, amounts, allocation, {gasLimit: gas, gasPrice: await getGasPrice(config.gasPrice) });
			const tx = await recipient.wait();

			nonce++;

			console.info(`Generated TX: ${tx.transactionHash}`);
		}

	});
});
