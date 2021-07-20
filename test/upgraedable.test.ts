import { ethers, network, upgrades } from 'hardhat';
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import moment from 'moment';

describe("ERC20 Test Script Tool Upload Vesting Allocation", async function () {

	this.timeout(100000);

	let accounts: Signer[]

	beforeEach(async () => {
		accounts = await ethers.getSigners();
		// owner address
		const owner = accounts[0];
		// verify the owner
		console.log("Owner Address:", await owner.getAddress());
		// console.log("Accounts:", accounts.map((a) => a.getAddress()));
		console.log("Get TimeStamp:", Math.floor((await ethers.provider.getBlock("latest")).timestamp));
	});

	it("Verify to Create a Instance of OMNI Token V2", async () => {
		// Deploy first Version of the Token
		const OmniTokenV1 = await ethers.getContractFactory("OmniTokenV1");
		const omnitokenV1 = await upgrades.deployProxy(OmniTokenV1);
		// Get the Token Address V1
		await omnitokenV1.deployed();
		console.log("OmniTokenV1 Address: ", omnitokenV1.address);
		// owner address
		const owner = accounts[0];
		// verify the owner
		console.log("Owner Address:", await owner.getAddress());
		// // Simulate Upgrading to V2
		const OmniTokenV2 = await ethers.getContractFactory("OmniTokenV2");
		const omnitokenV2 = await upgrades.upgradeProxy(omnitokenV1.address, OmniTokenV2);

		// Deploy the contract
		await omnitokenV2.deployed();
		// verify the Address
		console.log("OmniTokenV2 Address: ", omnitokenV2.address);
		// verify the contract is deployed
		const OmniToken = await ethers.getContractAt("OmniTokenV2", omnitokenV1.address, owner);
		// verify the contract is deployed
		console.log("OMNI TokenV2 Address Contract with Upgrade Proxy Method:", omnitokenV2.address);
		console.log("OMNI TokenV2 Address Contract with getContractAt Method:", OmniToken.address);
		// Verify the name of the Token
		console.log("Name of The Token: ", (await OmniToken.name()).toString(), "=====> must be FAKE Token");
		expect(((await OmniToken.name()).toString())).to.be.equal('Fake Token');
		// Verify the symbol of the Token
		console.log("Name of The Symbol Token: ", (await OmniToken.symbol()).toString(), "====> must be FAKE");
		expect(((await OmniToken.symbol()).toString())).to.be.equal('FAKE');
		// Verify the decimals of the Token
		console.log("Name of The Decimals Token: ", (await OmniToken.decimals()), "=====> must be 18");
		expect((await OmniToken.decimals())).to.be.equal(18);
		// Verify the balance of the Owner
		console.log("Balance of the Owner: ", (await OmniToken.balanceOf(await accounts[0].getAddress())).toString(), "must be 638 million!!! in wei");
		console.log("Total Supply: ", (await OmniToken.totalSupply()).toString(), "must be 638 million!!! in wei");

	});

});
