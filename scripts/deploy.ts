// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { run, ethers, upgrades } from 'hardhat';
import  { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { Console } from 'console';

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

  const OmniToken = await ethers.getContractFactory("OmniTokenV1");
	const omnitoken = await upgrades.deployProxy(OmniToken, ["Hello, OMN Token Ver 1"])
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  await omnitoken.deployed();
	// verify the Address
  console.log("Omni Token deployed to:", omnitoken.address);
	// Verify the balance of the Owner
	console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be one billon!!!");
	console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be one billon!!!");
	// Try to mint one additional Token
	console.log("============= Try to Mint Any Additional Token (Expect Revert) =================");
	try {
		await omnitoken.mint(1);
	} catch (error) {
		console.log("Type Error: ", JSON.stringify(error.name));
		console.log("Code Error: ", JSON.stringify(error.code));
		console.log("Transaction Hash: ", JSON.stringify(error.transactionHash));
		console.log(error.message);
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
