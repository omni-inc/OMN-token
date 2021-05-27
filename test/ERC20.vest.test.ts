import { ethers, upgrades } from 'hardhat';
import { BigNumber, Signer } from "ethers";
import  { expect, assert } from "chai";

describe("ERC20 Only Vesting Test", async () => {

	let accounts: Signer[]

	beforeEach(async () => {
		accounts = await ethers.getSigners();
		// console.log("Accounts:", accounts.map((a) => a.getAddress()));
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

	it("2.- Add Allocation, and Verify into the Frozen Wallets Unlocked and Locked Tokens into the Wallets", async () => {
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
		// Define the Array for address and vesting process
		let addresses1:string[] = [];
		let addresses2:string[] = [];
		let addresses3:string[] = [];
		let addresses4:string[] = [];
		let addresses5:string[] = [];
		let addresses6:string[] = [];
		let addresses7:string[] = [];
		let addresses8:string[] = [];
		let addresses9:string[] = [];
		let addresses10:string[] = [];
		let addresses11:string[] = [];
		let addresses12:string[] = [];
		let addresses13:string[] = [];
		let amount1:BigNumber[] = [];
		let amount2:BigNumber[] = [];
		let amount3:BigNumber[] = [];
		let amount4:BigNumber[] = [];
		let amount5:BigNumber[] = [];
		let amount6:BigNumber[] = [];
		let amount7:BigNumber[] = [];
		let amount8:BigNumber[] = [];
		let amount9:BigNumber[] = [];
		let amount10:BigNumber[] = [];
		let amount11:BigNumber[] = [];
		let amount12:BigNumber[] = [];
		let amount13:BigNumber[] = [];
		for (let i=10; i < 60; i++) {
			addresses1.push((await accounts[i].getAddress()).toString());
			addresses2.push((await accounts[i+50].getAddress()).toString());
			addresses3.push((await accounts[i+100].getAddress()).toString());
			addresses4.push((await accounts[i+150].getAddress()).toString());
			addresses5.push((await accounts[i+200].getAddress()).toString());
			addresses6.push((await accounts[i+250].getAddress()).toString());
			addresses7.push((await accounts[i+300].getAddress()).toString());
			addresses8.push((await accounts[i+350].getAddress()).toString());
			addresses9.push((await accounts[i+400].getAddress()).toString());
			addresses10.push((await accounts[i+450].getAddress()).toString());
			addresses11.push((await accounts[i+500].getAddress()).toString());
			addresses12.push((await accounts[i+550].getAddress()).toString());
			addresses13.push((await accounts[i+600].getAddress()).toString());
			amount1.push(ethers.utils.parseEther(String(i+1)));
			amount2.push(ethers.utils.parseEther(String(i+10)));
			amount3.push(ethers.utils.parseEther(String(i+100)));
			amount4.push(ethers.utils.parseEther(String(i+300)));
			amount5.push(ethers.utils.parseEther(String(i+500)));
			amount6.push(ethers.utils.parseEther(String(i+700)));
			amount7.push(ethers.utils.parseEther(String(i+1000)));
			amount8.push(ethers.utils.parseEther(String(i+30000)));
			amount9.push(ethers.utils.parseEther(String(i+70000)));
			amount10.push(ethers.utils.parseEther(String(i+45)));
			amount11.push(ethers.utils.parseEther(String(i+600)));
			amount12.push(ethers.utils.parseEther(String(i+45000)));
			amount13.push(ethers.utils.parseEther(String(i+75000)));
		}
		console.log("Addresses 13: ", addresses13);
		console.log("Amount 13: ", (amount13).toString());
		describe("Start to Load the All Wallets in the allocation to corresponding such vesting process", async () => {
			it("2.1- Call the addLocation Method for Allocation #1 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses1, amount1, 0);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", (amount1[i]).toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
				}
			});
			it("2.2- Call the addLocation Method for Allocation #2 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses2, amount2, 1);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
				}
			});
			it("2.3- Call the addLocation Method for Allocation #3 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses3, amount3, 2);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
				}
			});
			it("2.4- Call the addLocation Method for Allocation #4 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses4, amount4, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #4, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses4[i], "Amount: ", amount4[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses4[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses4[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses4[i])).toString());
				}
			});
			it("2.5- Call the addLocation Method for Allocation #5 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses5, amount5, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #5, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses5[i], "Amount: ", amount5[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses5[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses5[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses5[i])).toString());
				}
			});
			it("2.6- Call the addLocation Method for Allocation #6 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses6, amount6, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #6, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
				}
			});
			it("2.7- Call the addLocation Method for Allocation #7 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses7, amount7, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #7, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses7[i], "Amount: ", amount7[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses7[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses7[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses7[i])).toString());
				}
			});
			it("2.8- Call the addLocation Method for Allocation #8 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses8, amount8, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #8, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses8[i], "Amount: ", amount8[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses8[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses8[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses8[i])).toString());
				}
			});
			it("2.9- Call the addLocation Method for Allocation #9 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses9, amount9, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #9, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses9[i], "Amount: ", amount9[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses9[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses9[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses9[i])).toString());
				}
			});
			it("2.10- Call the addLocation Method for Allocation #10 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses10, amount10, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #10, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses10[i], "Amount: ", amount10[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses10[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses10[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses10[i])).toString());
				}
			});
			it("2.11- Call the addLocation Method for Allocation #11 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses11, amount11, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #11, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses11[i], "Amount: ", amount11[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses11[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses11[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses11[i])).toString());
				}
			});
			it("2.12- Call the addLocation Method for Allocation #12 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses12, amount12, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #12, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses12[i], "Amount: ", amount12[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses12[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses12[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses12[i])).toString());
				}
			});
			it("2.13- Call the addLocation Method for Allocation #13 and upload all Wallets of the Vesting Process in the Smart Contract", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses13, amount13, 3);
				// await receipt.wait();
				console.log("List of Wallet of Allocation #13, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<50; i++) {
					console.log("Wallet ",i ," : ", addresses13[i], "Amount: ", amount13[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses13[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses13[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses13[i])).toString());
				}
			});
		});

	});
});
