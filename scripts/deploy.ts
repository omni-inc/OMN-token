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
	await run("compile");

	const accounts = await ethers.getSigners();

  // console.log("Accounts:", accounts.map((a) => a.address));

  	const OmniToken = await ethers.getContractFactory("OmniTokenV4");
	// const Erc20Token = await ethers.getContractFactory("ERC20Token");
	const omnitoken = await upgrades.deployProxy(OmniToken);
	// const erc20Token = await upgrades.deployProxy(Erc20Token);

	await omnitoken.deployed();
	// await erc20Token.deployed();
	// verify the Address
	console.log("Omni Token deployed to:", omnitoken.address);
	// console.log("ERC20 Token deployed to:", erc20Token.address);
	// Verify the balance of the Owner
	console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
	console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be 638 million!!! in wei");
	// Try to mint one additional Token
	console.log("============= Try to Mint Any Additional Token (Expect Revert) =================");
	try {
		const estimatetx = await omnitoken.mint(1, {gasLimit: 1500000});
		console.log("Gas Estimate: ", estimatetx, (await estimatetx.gasPrice).toString(), (await estimatetx.gasLimit).toString(), estimatetx.status);
		if (estimatetx.gasLimit == null ) {
			estimatetx.gasLimit = await ethers.provider.estimateGas(estimatetx);
		};
		const receipt = await estimatetx.wait();
		console.log("Receipt Error: ", receipt);
		console.log("ChainId: ", (await estimatetx.chainId).toString());
	} catch (error:any) {
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
