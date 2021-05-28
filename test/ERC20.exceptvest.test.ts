import { run, ethers, upgrades } from 'hardhat';
import { providers, Signer } from "ethers";
import  { expect, assert } from "chai";

describe("ERC20 Full Test except Vesting", async () => {

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
		console.log("OMNI Token deployed to:", omnitoken.address);
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
		console.log("OMNI Token deployed to:", omnitoken.address);
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
				await expect((omnitoken.connect(accounts[1]).transfer(await accounts[0].getAddress(), '38888889000000000000000000'))).to.be.revertedWith("ERC20: transfer amount exceeds balance");
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
			it("3.4.- Execute a IncreaseAllowance / TransferFrom workflow and Verify the changes in Owner Account, and Receipt Account", async () => {
				await omnitoken.increaseAllowance(await accounts[1].getAddress(), '8888889000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[1]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString()).to.be.equal('8888889000000000000000000');
				await omnitoken.connect(accounts[1]).transferFrom(await accounts[0].getAddress(), await accounts[1].getAddress(), '8888889000000000000000000');
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 630000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('630000000000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 8888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('8888889000000000000000000');
			});
			it("3.5.- Execute a IncreaseAllowance / TransferFrom more than Approval and Receive Revert ", async () => {
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 8888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('8888889000000000000000000');
				await omnitoken.increaseAllowance(await accounts[1].getAddress(), '8888889000000000000000000');
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString()).to.be.equal('8888889000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[1]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString());
				console.log("We Expect Revert the Transaction:");
				await expect(omnitoken.connect(accounts[1]).transferFrom(await accounts[0].getAddress(), await accounts[1].getAddress(), '18888889000000000000000000')).to.be.revertedWith("ERC20: transfer amount exceeds allowance");
			});
			it("3.6.- Execute a DecreaseAllowance / TransferFrom more than Approval and Receive Revert", async () => {
				console.log("Balance Before of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 8888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('8888889000000000000000000');
				await omnitoken.decreaseAllowance(await accounts[1].getAddress(), '8000000000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[1]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[1].getAddress())).toString()).to.be.equal('888889000000000000000000');
				await omnitoken.connect(accounts[1]).transferFrom(await accounts[0].getAddress(), await accounts[1].getAddress(), '888889000000000000000000');
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 629111111000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('629111111000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 9777778000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('9777778000000000000000000');
			});
			it("3.7.- Execute a IncreaseAllowance / TransferFrom and send to the Owner all Token by Steps", async () => {
				console.log("Balance Before of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 629111111000000000000000000");
				console.log("Balance Before of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 9777778000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('629111111000000000000000000');
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('9777778000000000000000000');
				await omnitoken.connect(accounts[1]).increaseAllowance(await accounts[0].getAddress(), '9000000000000000000000000');
				console.log("Verify Allowance Accounts[1] to Accounts[0]:", (await omnitoken.allowance(await accounts[1].getAddress(), await accounts[0].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[1].getAddress(), await accounts[0].getAddress())).toString()).to.be.equal('9000000000000000000000000');
				console.log("We Expect Revert the Transaction: Try to send total balance of Receipt (Accounts[1])");
				await expect(omnitoken.transferFrom(await accounts[1].getAddress(), await accounts[0].getAddress(), '9777778000000000000000000')).to.be.revertedWith("ERC20: transfer amount exceeds allowance");
				await omnitoken.transferFrom(await accounts[1].getAddress(), await accounts[0].getAddress(), '9000000000000000000000000');
				console.log("Verify Allowance After first Tx Accounts[1] to Accounts[0]:", (await omnitoken.allowance(await accounts[1].getAddress(), await accounts[0].getAddress())).toString());
				await omnitoken.connect(accounts[1]).increaseAllowance(await accounts[0].getAddress(), '777778000000000000000000');
				console.log("Verify Allowance Before second Tx Accounts[1] to Accounts[0]:", (await omnitoken.allowance(await accounts[1].getAddress(), await accounts[0].getAddress())).toString());
				await omnitoken.transferFrom(await accounts[1].getAddress(), await accounts[0].getAddress(), '777778000000000000000000');
				console.log("Verify Allowance After second Tx Accounts[1] to Accounts[0]:", (await omnitoken.allowance(await accounts[1].getAddress(), await accounts[0].getAddress())).toString());
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 638888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('638888889000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[1].getAddress())).toString(), "=====> must be 0");
				expect(((await omnitoken.balanceOf(await accounts[1].getAddress())).toString())).to.be.equal('0');
			});
		});
	});

	//   ** Function / Methods Blacklistable Wallet */
	//   ** 4. Test Black List Method's of Smart Contract : How it is working - Test Case */
	//   ** t1. Setting Multiples Wallet in the Blacklist */
	//   ** t2. Getting List of All blacklisted Wallet*/
	//   ** t3. Testing with blacklisted Wallet IncreaseAllowance, DecreaseAllowance, Transfer, TransferMany, Mint and Burn */
	//   ** t4. Testing drop blacklisted Wallet, and Testing again the methods*/


	it("4. Should the right value for add, drop or revert when i try to execute a transfer", async () => {
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

		describe("Add Wallet to the blacklist and getting the list, and drop someone, and update the list", async () => {
			it("4.1.- Add several list of Accounts in the Blacklist: ", async () => {
				console.log("Verify only the Owner can add wallet to the Blacklist: ");
				await expect(omnitoken.connect(accounts[1]).addBlacklist(await accounts[0].getAddress())).to.be.revertedWith("Ownable: caller is not the owner");
				console.log("Add all odd accounts from 4 to 16 address:");
				for (let i=4; i <= 16; i+=2) {
					await expect(omnitoken.addBlacklist(await accounts[i].getAddress())).to.emit(omnitoken, 'inBlacklisted').withArgs(await accounts[i].getAddress());
					console.log("Account ", i, "Blacklisted ", await accounts[i].getAddress());
				}
				const address:string[] = await omnitoken.getBlacklist()
				console.log("List of Address Blacklisted: ");
				for (let i=0; i < address.length ; i++) {
					console.log("Address Blacklisted : ", address[i], "Status :", await omnitoken.isBlacklisted(address[i]));
				}
			});

			it("4.2.- Drop some address from Blacklist, adn verify the changes", async () => {
				console.log("Drop accounts from positions 4, 8, 12 and 16 address:");
				for (let i=4; i <= 16; i+=4) {
					await expect(omnitoken.dropBlacklist(await accounts[i].getAddress())).to.emit(omnitoken, 'outBlacklisted').withArgs(await accounts[i].getAddress());
					console.log("Account ", i, "Blacklisted ", await accounts[i].getAddress());
				}
				const address:string[] = await omnitoken.getBlacklist()
				console.log("List of Address Blacklisted: ");
				for (let i=0; i < address.length ; i++) {
					console.log("Address Blacklisted : ", address[i], "Status :", await omnitoken.isBlacklisted(address[i]));
				}
			});
			it("4.3.- IncreaseAllowance / Transfer / TransferFrom only the unBlacklisted Wallet", async () => {
				// Accounts[4]
				await omnitoken.increaseAllowance(await accounts[4].getAddress(), '8888889000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[4]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[4].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[4].getAddress())).toString()).to.be.equal('8888889000000000000000000');
				await omnitoken.connect(accounts[4]).transferFrom(await accounts[0].getAddress(), await accounts[4].getAddress(), '8888889000000000000000000');
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 630000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('630000000000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[4].getAddress())).toString(), "=====> must be 8888889000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[4].getAddress())).toString())).to.be.equal('8888889000000000000000000');
				// Accounts[8]
				await omnitoken.increaseAllowance(await accounts[8].getAddress(), '30000000000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[8]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[8].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[8].getAddress())).toString()).to.be.equal('30000000000000000000000000');
				await omnitoken.connect(accounts[8]).transferFrom(await accounts[0].getAddress(), await accounts[8].getAddress(), '30000000000000000000000000');
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 600000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('600000000000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[8].getAddress())).toString(), "=====> must be 30000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[8].getAddress())).toString())).to.be.equal('30000000000000000000000000');
			});

			it("4.4.- IncreaseAllowance / Transfer / TransferFrom only the Blacklisted Wallet", async () => {
				// Accounts[6]
				await omnitoken.increaseAllowance(await accounts[6].getAddress(), '8888889000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[6]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[6].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[6].getAddress())).toString()).to.be.equal('8888889000000000000000000');
				console.log("We Expect Revert the Transaction: Try to send total balance of Receipt (Accounts[6])");
				await expect(omnitoken.connect(accounts[6]).transferFrom(await accounts[0].getAddress(), await accounts[6].getAddress(), '8888889000000000000000000')).to.be.revertedWith("ERC20 OMN: recipient account is blacklisted");
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 600000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('600000000000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[6].getAddress())).toString(), "=====> must be 0");
				expect(((await omnitoken.balanceOf(await accounts[6].getAddress())).toString())).to.be.equal('0');
				// Accounts[10]
				await omnitoken.increaseAllowance(await accounts[10].getAddress(), '30000000000000000000000000');
				console.log("Verify Allowance Accounts[0] to Accounts[10]:", (await omnitoken.allowance(await accounts[0].getAddress(), await accounts[10].getAddress())).toString());
				expect((await omnitoken.allowance(await accounts[0].getAddress(), await accounts[10].getAddress())).toString()).to.be.equal('30000000000000000000000000');
				console.log("We Expect Revert the Transaction: Try to send total balance of Receipt (Accounts[10])");
				await expect(omnitoken.connect(accounts[10]).transferFrom(await accounts[0].getAddress(), await accounts[10].getAddress(), '30000000000000000000000000')).to.be.revertedWith("ERC20 OMN: recipient account is blacklisted");
				console.log("Balance After of Account Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "=====> must be 600000000000000000000000000");
				expect(((await omnitoken.balanceOf(await accounts[0].getAddress())).toString())).to.be.equal('600000000000000000000000000');
				console.log("Balance After of Receipt: ", (await omnitoken.balanceOf(await accounts[10].getAddress())).toString(), "=====> must be 0");
				expect(((await omnitoken.balanceOf(await accounts[10].getAddress())).toString())).to.be.equal('0');
			});
		});
	});

	//   ** Function / Methods Circulating Supply */
	//   ** 5. Test Circulating Supply Method's of Smart Contract : How it is working - Test Case */
	//   ** t1. Include Multiples Wallet in the OMNI Wallets Array */
	//   ** t2. Getting List of All OMNI Wallets Array */
	//   ** t3. Exclude Multiples Wallets in the OMNI Wallets Array */
	//   ** t4. Verify in all cases the right value of the Circulating Supply */


	it("5. Should the right value of the Circulating Supply for add, drop any wallets in the Array for OMNI Wallets", async () => {
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
		await expect(omnitoken.transfer((await accounts[19].getAddress()).toString(),'888889000000000000000000')).to.emit(omnitoken, 'Transfer').withArgs(await accounts[0].getAddress(), await accounts[19].getAddress(), '888889000000000000000000');

		describe("Add Wallet to the blacklist and getting the list, and drop someone, and update the list", async () => {
			it("5.1.- Sending Token to Different Wallets and Verify the Circulating Supply with zero OMNI Wallets", async () => {
				console.log("Verify the Circulating Supply with Start:", (await omnitoken.circulatingSupply()).toString());
				expect((await omnitoken.circulatingSupply()).toString()).to.equal('888889000000000000000000');
				console.log("Verify Owner Address Balance with Start: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString());
				expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.equal('638000000000000000000000000');
				console.log("Execute multiples Transfer for all odd Account from 4 to 18")
				for (let i=4; i <= 18; i+=2) {
					await expect(omnitoken.transfer(await accounts[i].getAddress(),'1000000000000000000000000')).to.emit(omnitoken, 'Transfer').withArgs(await accounts[0].getAddress(), await accounts[i].getAddress(), '1000000000000000000000000');
					console.log("Account ", i, "Receipt Address for Verify Circulating: ", await accounts[i].getAddress());
				}
				console.log("Circulating Supply After Sending Tokens to Several Accounts: ", (await omnitoken.circulatingSupply()).toString());
				expect((await omnitoken.circulatingSupply()).toString()).to.equal('8888889000000000000000000');
				console.log("Verify Owner Address Balance After: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString());
				expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.equal('630000000000000000000000000');
			})

			it("5.2.- Add several list of Accounts in the OMNI Wallets Array: ", async () => {
				console.log("Verify only the Owner can add wallet to the OMNI Wallets Array: ");
				await expect(omnitoken.connect(accounts[1]).addOmniWallet(await accounts[0].getAddress())).to.be.revertedWith("ERC20: is not the Owner");
				console.log("Add OMNI Wallets array, Accounts 4, 8, 12 and 16:");
				for (let i=4; i <= 16; i+=4) {
					await expect(omnitoken.addOmniWallet(await accounts[i].getAddress())).to.emit(omnitoken, 'inOmniWallet').withArgs(await accounts[i].getAddress());
					console.log("Account ", i, "OMNI Wallets Address", await accounts[i].getAddress());
				}
				const address:string[] = await omnitoken.getOmniWallets()
				console.log("List of Address OMNI Wallets: ");
				for (let i=0; i < address.length ; i++) {
					console.log("Address OMNI Wallets: ", address[i], "Status :", await omnitoken.isOmniWallet(address[i]));
				}
			});

			it("5.3.- Verify the Circulating Supply After add Money the OMNI Wallets  ", async () => {
				console.log("Transfer Token for Several Wallet and Very:");
				console.log("Circulating Supply After Sending Several Accounts: ", (await omnitoken.circulatingSupply()).toString());
				expect((await omnitoken.circulatingSupply()).toString()).to.equal('4888889000000000000000000');
				console.log("Verify Owner Address Balance After: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString());
				expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.equal('630000000000000000000000000');
			});

			it("5.4.- Drop some address from OMNI Wallets, and verify the changes", async () => {
				console.log("Drop accounts from positions 4, 8, 12 and 16 address:");
				for (let i=4; i <= 16; i+=4) {
					await expect(omnitoken.dropOmniWallet(await accounts[i].getAddress())).to.emit(omnitoken, 'outOmniWallet').withArgs(await accounts[i].getAddress());
					console.log("Account ", i, "OMNI Wallets Address ", await accounts[i].getAddress());
				}
				const address:string[] = await omnitoken.getOmniWallets()
				console.log("List of Address OMNI Wallets: ");
				for (let i=0; i < address.length ; i++) {
					console.log("Address OMNI Wallets: ", address[i], "Status :",  await omnitoken.isOmniWallet(address[i]));
				}
			});

			it("5.5.- Verify the Circulating Supply After Drop all OMNI Wallets  ", async () => {
				console.log("Circulating Supply After drop All OMNI Wallets: ", (await omnitoken.circulatingSupply()).toString());
				expect((await omnitoken.circulatingSupply()).toString()).to.equal('8888889000000000000000000');
				console.log("Verify Owner Address Balance After: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString());
				expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.equal('630000000000000000000000000');
			});

			it("5.6.- Sending token another Count not included in OMNI Wallets: ", async () => {
				await expect(omnitoken.connect(accounts[1]).addOmniWallet(await accounts[0].getAddress())).to.be.revertedWith("ERC20: is not the Owner");
				console.log("Transfer Token to Accounts 2, 6, 10, 14 and 18:");
				for (let i=2; i <= 18; i+=4) {
					await expect(omnitoken.transfer(await accounts[i].getAddress(),'1000000000000000000000000')).to.emit(omnitoken, 'Transfer').withArgs(await accounts[0].getAddress(), await accounts[i].getAddress(), '1000000000000000000000000');
					console.log("Account ", i, "Receipt Address for Verify Circulating: ", await accounts[i].getAddress());
					console.log("Balance Receipt Address for Verify Circulating: ", (await omnitoken.balanceOf(await accounts[i].getAddress())).toString());
				}
				console.log("Circulating Supply After drop All OMNI Wallets: ", (await omnitoken.circulatingSupply()).toString());
				expect((await omnitoken.circulatingSupply()).toString()).to.equal('13888889000000000000000000');
				console.log("Verify Owner Address Balance After: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString());
				expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.equal('625000000000000000000000000');
			});

			it("5.7.- Verify the Circulating Supply if include the accounts 2, 6, 10, 14 and 18 in the OMNI Wallets Array: ", async () => {
				await expect(omnitoken.connect(accounts[1]).addOmniWallet(await accounts[0].getAddress())).to.be.revertedWith("ERC20: is not the Owner");
				console.log("Add OMNI Wallets array the Accounts 2, 6, 10, 14 and 18:");
				for (let i=2; i <= 18; i+=4) {
					await expect(omnitoken.addOmniWallet(await accounts[i].getAddress())).to.emit(omnitoken, 'inOmniWallet').withArgs(await accounts[i].getAddress());
					console.log("Account ", i, "OMNI Wallets Address", await accounts[i].getAddress());
				}
				console.log("Circulating Supply After drop All OMNI Wallets: ", (await omnitoken.circulatingSupply()).toString());
				expect((await omnitoken.circulatingSupply()).toString()).to.equal('4888889000000000000000000');
				console.log("Verify Owner Address Balance After: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString());
				expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.equal('625000000000000000000000000');
			});

		});
	});

	//   ** Function / Methods Claim Token and Native Coins */
	//   ** 6. Test Claim Method's of Smart Contract : How it is working - Test Case */
	//   ** t1. Sending Native Coin and Claim with the Methods */
	//   ** t2. Sending Token ERC20 and Clain with the Methods */

	it("6. Should the right value of the Claim wallets in the Array for OMNI Wallets", async () => {
		const OmniToken = await ethers.getContractFactory("OmniTokenV1");
		const Erc20Token = await ethers.getContractFactory("ERC20Token");
		const omnitoken = await upgrades.deployProxy(OmniToken, ["Hello, OMN Token Ver 1"]);
		const erc20Token = await upgrades.deployProxy(Erc20Token);

		await omnitoken.deployed();
		await erc20Token.deployed();
		// verify the Address
		console.log("OMNI Token deployed to:", omnitoken.address);
		console.log("ERC20 Token deployed to:", erc20Token.address);
		// Verify the balance of the Owner
		console.log("Balance of the Owner: ", (await omnitoken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
		expect((await omnitoken.balanceOf(await accounts[0].getAddress())).toString()).to.be.equal('638888889000000000000000000');
		console.log("Total Supply: ", (await omnitoken.totalSupply()).toString(), "must be 638 million!!! in wei");
		expect(((await omnitoken.totalSupply()).toString())).to.be.equal('638888889000000000000000000');
		describe("Sending Native Token and ERC20 Token and after Claim with the Methods", async () => {
			it("6.1.-  Sending Native Token and After Claim with the Method", async () => {
				console.log("Verify the Balance before send ETH: ", (await ethers.provider.getBalance(omnitoken.address)).toString());
				const value = ethers.utils.parseEther('1000.0');
				const value2 = ethers.utils.parseEther('1000.0');
				await accounts[3].sendTransaction({to: await accounts[0].getAddress(), value: value});
				console.log("Verify Balance of ETH Accounts[0] before claim : ", (await ethers.provider.getBalance(await accounts[0].getAddress())).toString());
				await accounts[0].sendTransaction({to: omnitoken.address, value: value2});
				//await expect(accounts[0].sendTransaction({to: omnitoken.address, value: 10})).to.be.revertedWith("ERC20 OMN: Sending Ether for Error, revert!!!");
				console.log("Verify the Balance After send ETH: ", (await ethers.provider.getBalance(omnitoken.address)).toString());
				const address = await accounts[15].getAddress();
				console.log("Verify Balance of ETH Accounts[15] before claim: ", (await ethers.provider.getBalance(address)).toString());
				await omnitoken.claimValues('0x0000000000000000000000000000000000000000', address);
				console.log("Verify Balance of ETH Accounts[15] After claim: ", (await ethers.provider.getBalance(address)).toString());
				console.log("Verify Balance of ETH Accounts[0] After claim : ", (await ethers.provider.getBalance(await accounts[0].getAddress())).toString());

			});

			it("6.2- Sending ERC20 token and After Claim with Method", async () => {
				await erc20Token.mintToWallet(omnitoken.address,'9000000000000000000');
				console.log("Balance ERC20 Token of Smart Contract OMNI before Claim: ", (await erc20Token.balanceOf(omnitoken.address)).toString());
				const address = await accounts[15].getAddress();
				console.log("Balance ERC20 Token of Accounts[15] before Claim: ", (await erc20Token.balanceOf(address)).toString());
				await omnitoken.claimValues(erc20Token.address, address);
				console.log("Balance ERC20 Token of Accounts[15] After Claim: ", (await erc20Token.balanceOf(address)).toString());
				console.log("Balance ERC20 Token of Smart Contract OMNI After Claim: ", (await erc20Token.balanceOf(omnitoken.address)).toString());
			})
		});
	});

});
