// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { run, ethers, upgrades } from 'hardhat';
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
	const omnitoken = await upgrades.deployProxy(OmniToken, ["Hello, Hardhat!"])
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  await omnitoken.deployed();

  console.log("Greeter deployed to:", omnitoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
