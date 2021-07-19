import { OmniTokenV1 } from './../typechain/OmniTokenV1.d';
import { ethers, network, upgrades } from 'hardhat';
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import moment from 'moment';

describe("ERC20 Only Vesting Test", async () => {

	let accounts: Signer[]

	beforeEach(async () => {
		accounts = await ethers.getSigners();
		// console.log("Accounts:", accounts.map((a) => a.getAddress()));
		console.log("Get TimeStamp:", Math.floor((await ethers.provider.getBlock("latest")).timestamp));
	});

	it("Verify to Create a Instance of OMNI Token V2", async () => {
		// Deploy first Version of the Token
		const OmniTokenV1 = await ethers.getContractFactory("OmniTokenV1");
		const Erc20Token = await ethers.getContractFactory("ERC20Token");
		const omnitokenV1 = await upgrades.deployProxy(OmniTokenV1);
		const erc20Token = await upgrades.deployProxy(Erc20Token);
		// Get the Token Address V1
		await omnitokenV1.deployed();
		await erc20Token.deployed();

		console.log("OmniTokenV1 Address: ", omnitokenV1.address);
		// Simulate Upgrading to V2
		const OmniTokenV2 = await ethers.getContractFactory("OmniTokenV2");
		const omnitokenV2 = await upgrades.upgradeProxy(omnitokenV1.address, OmniTokenV2);
		console.log("OmniTokenV2 Address: ", omnitokenV2.address);

		// owner address
		const owner = accounts[0];
		// Deploy the contract
		await omnitokenV2.deployed();
		// verify the Address
		console.log("OmniTokenV2 Address: ", omnitokenV2.address);
		// verify the contract is deployed
		const OmniToken = await ethers.getContractAt("OmniTokenV2", omnitokenV2.address, owner);
		// verify the contract is deployed
		console.log("OMNI TokenV2 Address Contract with getContractAt Method:", omnitokenV2.address);
		// Verify the contract name
		console.log("Name of The Token: ", (await omnitokenV2.name()).toString(), "=====> must be OMNI App");
		expect(((await omnitokenV2.name()).toString())).to.be.equal('OMNI Coin');
		// verify the contract symbol
		console.log("Name of The Token: ", (await omnitokenV2.symbol()).toString(), "====> must be OMN");
		expect(((await omnitokenV2.symbol()).toString())).to.be.equal('OMN');
		// verify the contract Name
		console.log("Name of The Token: ", (await omnitokenV2.decimals()), "=====> must be 18");
		expect((await omnitokenV2.decimals())).to.be.equal(18);

	});

});
