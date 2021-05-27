import { run, ethers, upgrades } from 'hardhat';
import { BigNumber, providers, Signer } from "ethers";
import  { expect, assert } from "chai";

describe("ERC20 Only Vesting Test", async () => {

	let accounts: Signer[]

	beforeEach(async () => {
		accounts = await ethers.getSigners();
		console.log("Accounts for Vesting:", accounts);
		console.log("Get TimeStamp:", Math.floor((await ethers.provider.getBlock("latest")).timestamp));
	});

	//   ** Function Total Supply, Balance of, Name, Symbol, Decimals */
	//   ** 1. Test Initial Value of Smart Contract : How it is working - Test Case */
	//   ** t1. Getting Total Supply Value and verify is the same  Max Total Supply*/
	//   ** t2. Getting Balance of Owner Accounts Value and verify is the same  Max Total Supply */
	//   ** t3. Getting Name Value*/
	//   ** t4. Getting Symbol Value*/
	//   ** t5. Getting Decimals Value*/


	it("1. Should return the Total Supply, Balance of the Owner, Name, Symbol and Decimals", async () => {
		const OmniToken = await ethers.getContractFactory("OmniTokenV1");
		const omnitoken = await upgrades.deployProxy(OmniToken, ["Hello, OMN Token Ver 1"]);

		await omnitoken.deployed();
		// verify the Address
		console.log("OMNI Token deployed to:", omnitoken.address);
		// Verify the balance of the Owner
		console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
		expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.be.equal('638888889000000000000000000');
		console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be 638 million!!! in wei");
		expect(((await omnitoken.totalSupply()).toString())).to.be.equal('638888889000000000000000000');
		describe(' Basic Value', async () => {
			it("1.1.- Verify the Name of the Token", async () => {
				console.log("Name of The Token: ", (await omnitoken.name()).toString(), "=====> must be OMNI App");
				expect(((await omnitoken.name()).toString())).to.be.equal('OMNI App');
			});
			it("1.2.- Verify the Tiker of the Token", async () => {
				console.log("Name of The Token: ", (await omnitoken.symbol()).toString(), "====> must be OMN");
				expect(((await omnitoken.symbol()).toString())).to.be.equal('OMN');
			});
			it("1.3.- Verify the Decimals of the Token", async () => {
				console.log("Name of The Token: ", (await omnitoken.decimals()), "=====> must be 18");
				expect((await omnitoken.decimals())).to.be.equal(18);
			});
		});
	});

	//   ** Function Total Supply, Balance of, Name, Symbol, Decimals */
	//   ** 2. Test Add Allocation in the ERC20 Omni Smart Contract : How it is working - Test Case */
	//   ** t1. Add Allocation and Verify Frozen Wallets, include, Unlocked and Locked Tokens into the Wallets*/
	//   ** t2. Getting Balance of Owner Accounts Value and verify is the same  Max Total Supply */
	//   ** t3. Getting Name Value*/
	//   ** t4. Getting Symbol Value*/
	//   ** t5. Getting Decimals Value*/

	it("2.- Add Allocation, and Verify into the Frozen Wallets Unlocked and Locked Tokens into the Wallets", async () => {
		// Define the Array for address and vesting process
		const addresses1:string[] = [
			await accounts[2].getAddress(),
			await accounts[3].getAddress(),
			await accounts[4].getAddress(),
			await accounts[5].getAddress()];
		const addresses2:string[] = [
 			await accounts[6].getAddress(),
			await accounts[7].getAddress(),
			await accounts[8].getAddress(),
			await accounts[9].getAddress()];
		const addresses3:string[] = [
			await accounts[10].getAddress(),
			await accounts[11].getAddress(),
			await accounts[12].getAddress(),
			await accounts[13].getAddress()];
		const addresses4:string[] = [
			await accounts[14].getAddress(),
			await accounts[15].getAddress(),
			await accounts[16].getAddress(),
			await accounts[17].getAddress()];
		const amount1:BigNumber[] = [
			ethers.utils.parseEther('1.0'),
			ethers.utils.parseEther('1.0'),
		]
	})
});
