// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { run, ethers, upgrades } from 'hardhat';
import { abi, bytecode } from '../artifacts/contracts/OmniTokenV3.sol/OmniTokenV3.json';
import "@nomiclabs/hardhat-ethers";

const snooze = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

    // console.log("Accounts:", accounts.map((a) => a.address));

  	// const OmniToken = new ethers.ContractFactory(abi, bytecode, accounts[0]);
	const omnitoken = await ethers.getContractAt("OmniTokenV3", '0xaBc6790673a60b8A7f588450f59D2d256b1aeF7F', accounts[0]);
	// const Erc20Token = await ethers.getContractFactory("ERC20Token");
	// const omnitoken = OmniToken.attach('0x2623127C7dA4fd95FbB872018dae6b246C0D3eD0');
	// const erc20Token = await upgrades.deployProxy(Erc20Token);

	// await omnitoken.deployed();
	// await erc20Token.deployed();
	// verify the Address
	const dryrun = false;
	console.log("Omni Token deployed to:", omnitoken.address);
	// console.log("ERC20 Token deployed to:", erc20Token.address);
	// Verify the balance of the Owner
	console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
	console.log("Address of the Owner: ", (await omnitoken.owner()).toString());
	console.log("Address of the Accont 0: ", (await accounts[0].getAddress()).toString());
	console.log("Address of the Accont 1: ", (await accounts[1].getAddress()).toString());
	console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be 638 million!!! in wei");
	// Script test
	if (dryrun) {
		const resp1 = await omnitoken.addAllocations(['0xA2aC6DC09EED385F0013e158F4472AaDCd3753d8'], ['69453270000000000000000'], 0);
		await resp1.wait();
		await snooze(2000);
		const resp = await omnitoken.addBlacklist('0xA2aC6DC09EED385F0013e158F4472AaDCd3753d8')
		await resp.wait();
		await snooze(2000);
		console.log("Verify add Blacklisted (must be true)", (await omnitoken.isBlacklisted('0xA2aC6DC09EED385F0013e158F4472AaDCd3753d8')).toString());
		console.log("Dry run, no transaction will be sent");
	} else {
		console.log("Verify add Blacklisted (must be true)", (await omnitoken.isBlacklisted('0xA2aC6DC09EED385F0013e158F4472AaDCd3753d8')).toString());
		const resp2 = await omnitoken.dropBlacklist('0xA2aC6DC09EED385F0013e158F4472AaDCd3753d8')
		await resp2.wait();
		console.log("Hacked Address dropped from Blacklist");
		const resp1 = await omnitoken.addAllocations(['0xA2aC6DC09EED385F0013e158F4472AaDCd3753d8'], ['1'], 9);
		await resp1.wait();
		console.log("Verify drop Blacklisted (must be false)", (await omnitoken.isBlacklisted('0xA2aC6DC09EED385F0013e158F4472AaDCd3753d8')).toString());
		const balance = (await omnitoken.balanceOf(await accounts[1].getAddress())).toString();
		console.log("Balance of the Hacked Account before burn: ", balance);
		const resp3 = await omnitoken.connect(accounts[1]).burn(balance)
		await resp3.wait();
		console.log("Balance of the Hacked Account after burn: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString());
		const resp4 = await omnitoken.mint(balance)
		await resp4.wait();
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
