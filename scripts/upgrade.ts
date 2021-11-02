// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import {run, ethers, upgrades} from 'hardhat';
import "@nomiclabs/hardhat-ethers";

const main = async () => {

	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	// await hre.run('compile');

	// We get the contract to deploy
	// We get the contract to deploy
	await run("compile");

	const accounts = await ethers.getSigners();

	const OmniTokenV1 = await ethers.getContractFactory("OmniTokenV1");
	const OmniTokenV2 = await ethers.getContractFactory("OmniTokenV2");
	const OmniTokenV3 = await ethers.getContractFactory("OmniTokenV3");
	const OmniTokenV4 = await ethers.getContractFactory("OmniTokenV4");
	// const Erc20Token = await ethers.getContractFactory("ERC20Token");
	// const omnitokenV1 = await upgrades.deployProxy(OmniTokenV1);
	// console.log("First Address: ", omnitokenV1.address);
	const omnitokenV4 = await upgrades.upgradeProxy('0xaBc6790673a60b8A7f588450f59D2d256b1aeF7F', OmniTokenV4);
	console.log("Confirm Address: ", omnitokenV4.address);
}


  // We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
