import { run, ethers, upgrades } from 'hardhat';
import { Signer } from "ethers";
import  { expect, assert } from "chai";

describe("ERC20 Full Test", async () => {

	let accounts: Signer[]

	beforeEach(async () => {
		accounts = await ethers.getSigners();
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
		console.log("Omni Token deployed to:", omnitoken.address);
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

	//   ** Function owner(), transferOwnership(), renounceOwnership() */
	//   ** 2. Test OwnerShip Functions of Smart Contract : How it is working - Test Case */
	//   ** t1. Getting Current Owner */
	//   ** t2. Setting Transfer OwnerShip */
	//   ** t3. Setting Renounce OwnerShip */
	//   ** t4. Verify Smart Contract Don't Have any Owner */

	it("2. Should be Setting and Getting the OwnerShip of the Smart Contract", async () => {
		const OmniToken = await ethers.getContractFactory("OmniTokenV1");
		const omnitoken = await upgrades.deployProxy(OmniToken, ["Hello, OMN Token Ver 1"]);

		await omnitoken.deployed();
		// verify the Address
		console.log("Omni Token deployed to:", omnitoken.address);
		// Verify the balance of the Owner
		console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
		expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.be.equal('638888889000000000000000000');
		console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be 638 million!!! in wei");
		expect(((await omnitoken.totalSupply()).toString())).to.be.equal('638888889000000000000000000');

		describe('Verify All Main Method involve in OwnerShip', async () => {
			it('2.1.- Getting the Owner of the Contract:', async () => {
				console.log("Owner of th Smart Contract:", (await omnitoken.owner()).toString());
				expect(await omnitoken.owner()).to.equal(await accounts[0].getAddress());
			});
			it('2.2.- Transfer OwnerShip from Accounts[0] to Accounts[1]', async () => {
				await omnitoken.transferOwnership(await accounts[1].getAddress());
				console.log("New OwnerShip of th Smart Contract:", (await omnitoken.owner()).toString());
			});
			it('2.3.- Renounce OwnerShip of the Smart Contract', async () => {
				await omnitoken.connect(accounts[1]).renounceOwnership();
				console.log("Renounce Ownership of the Smart Contract:", (await omnitoken.owner()).toString());
				expect(await omnitoken.owner()).to.equal('0x0000000000000000000000000000000000000000');
			});
		});
	});

	//   ** Function / Methods Balanceof, Transfer, TransferFrom, Approve, IncreaseAllowance, DecreaseAllowance */
	//   ** 3. Test Basic Method of Smart Contract : How it is working - Test Case */
	//   ** t1. Getting Total Supply Value and verify is the same  Max Total Supply*/
	//   ** t2. Getting Balance ofANY Accounts Value and verify is the same EXPECT VALUE */
	//   ** t3. Testing Workflow Transfer*/
	//   ** t4. Testing Workflow TransferFrom*/
	//   ** t5. Testing Workflow Increase and Decrease Allowance */


	it("3. Should the right value for Balance Of, Transfer, Transfer From, and Approve, etc", async () => {
		const OmniToken = await ethers.getContractFactory("OmniTokenV1");
		const omnitoken = await upgrades.deployProxy(OmniToken, ["Hello, OMN Token Ver 1"]);

		await omnitoken.deployed();
		// verify the Address
		console.log("Omni Token deployed to:", omnitoken.address);
		// Verify the balance of the Owner
		console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
		expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.be.equal('638888889000000000000000000');
		console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be 638 million!!! in wei");
		expect(((await omnitoken.totalSupply()).toString())).to.be.equal('638888889000000000000000000');

		describe('Verify Balance Of / Transfer', async () => {
			it("3.1.- Execute a Transfer, and Verify the changes in Owner Account, and Receipt Account", async () => {
				await omnitoken.transfer(await accounts[1].getAddress(), '8888889000000000000000000');
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 630000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('630000000000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 8888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('8888889000000000000000000');
			});
			it("3.2.- Try Transfer a Value more than available in the Accounts, and Receive Revert", async () => {
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 8888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('8888889000000000000000000');
				console.log("We Expect Revert the Transaction:");
				expect((omnitoken.connect(accounts[1]).transfer(await accounts[0].getAddress(), '38888889000000000000000000'))).to.be.revertedWith("ERC20: transfer amount exceeds balance");
			});
			it("3.3.- Send again the owner the Tokens", async () => {
				await omnitoken.connect(accounts[1]).transfer(await accounts[0].getAddress(), '8888889000000000000000000');
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 638888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('638888889000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 0");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('0');
			});
		});

		describe('Verify Balance Of / IncreaseAllowance / TransferFrom', async () => {
			it("3.4.- Execute a Approve / TransferFrom workflow and Verify the changes in Owner Account, and Receipt Account", async () => {
				await omnitoken.increaseAllowance(await accounts[1].getAddress(), '8888889000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[1]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString()).to.be.equal('8888889000000000000000000');
				await omnitoken.connect(accounts[1]).transferFrom(await accounts[0].getAddress(), await accounts[1].getAddress(), '8888889000000000000000000');
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 630000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('630000000000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 8888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('8888889000000000000000000');
			});
			// it("3.5.- Try Transfer a Value more than available in the Accounts, and Receive Revert", async () => {
			// 	console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 8888889000000000000000000");
			// 	expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('8888889000000000000000000');
			// 	console.log("We Expect Revert the Transaction:");
			// 	expect((omnitoken.connect(accounts[1]).transfer(await accounts[0].getAddress(), '38888889000000000000000000'))).to.be.revertedWith("ERC20: transfer amount exceeds balance");
			// });
			// it("3.6.- Send again the owner the Tokens", async () => {
			// 	await omnitoken.connect(accounts[1]).transfer(await accounts[0].getAddress(), '8888889000000000000000000');
			// 	console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 638888889000000000000000000");
			// 	expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('638888889000000000000000000');
			// 	console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 0");
			// 	expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('0');
			// });
		});
	});



});
