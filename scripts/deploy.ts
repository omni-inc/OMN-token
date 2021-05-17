// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { run, ethers, upgrades } from 'hardhat';
import  { expect } from "chai";
import "@nomiclabs/hardhat-ethers";

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

  console.log("Accounts:", accounts.map((a) => a.address));

  const OmniToken = await ethers.getContractFactory("OmniTokenV1");
	const omnitoken = await upgrades.deployProxy(OmniToken, ["Hello, Hardhat! Ver 1"])
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  await omnitoken.deployed();
	// verify the Address
  console.log("Omni Token deployed to:", omnitoken.address);
	// Mint the Token with 1 Billion Token 1.000.000.000x10e18 (_mint function work in wei)
	await omnitoken.mint('1000000000000000000000000000');
	// Verify the balance of the Owner
	console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString());
	console.log("Total Supply: ", (await omnitoken.totalSupply()).toString())


	// Upgrade the Smart Contract and disable mint function
	const OmniTokenV2 = await ethers.getContractFactory("OmniTokenV2");
	const omnitokenv2 = await upgrades.upgradeProxy(omnitoken.address, OmniTokenV2);

	await omnitokenv2.deployed();
	// verify the Address V2
	console.log("Omni Token V2 deployed to:", omnitokenv2.address);
	// Try to Mint token
	// await omnitokenv2.mint('1000000000000000000000000'); // to.throw("TypeError: omnitokenv2.mint is not a function");
	// Verify the balance of the Owner
	console.log("Balance of the Owner v2: ", (await omnitokenv2.balanceOf(await accounts[0].getAddress())).toString());
	console.log("Total Supply v2: ", (await omnitokenv2.totalSupply()).toString());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
