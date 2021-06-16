import { ethers, network, upgrades } from 'hardhat';
import { BigNumber, Signer } from "ethers";
import  { expect, assert } from "chai";
import moment from 'moment';


describe("ERC20 Only Vesting Test", async () => {

	let accounts: Signer[]

	beforeEach(async () => {
		accounts = await ethers.getSigners();
		// console.log("Accounts:", accounts.map((a) => a.getAddress()));
		console.log("Get TimeStamp:", Math.floor((await ethers.provider.getBlock("latest")).timestamp));
	});

	//   ** Function Total Supply, Balance of, Name, Symbol, Decimals */
	//   ** 1. Test Add Allocation in the ERC20 Omni Smart Contract : How it is working - Test Case */
	//   ** t1. Add Allocation and Verify Frozen Wallets, include, Unlocked and Locked Tokens into the Wallets*/
	//   ** t2. Verify each Allocation day by day Frozen Wallets, include, Unlocked and Locked Tokens into the Wallets*/


	it("1.- Add Allocation, and Verify into the Frozen Wallets Unlocked and Locked Tokens into the Wallets", async () => {
		const OmniToken = await ethers.getContractFactory("OmniTokenV1");
		const omnitoken = await upgrades.deployProxy(OmniToken);

		await omnitoken.deployed();
		// verify the Address
		console.log("OMNI Token deployed to:", omnitoken.address);
		// Verify the balance of the Owner
		// TGE TimeStamp
		const TGE = moment((await omnitoken.getReleaseTime())*1000).utc();
		console.log("TimeStamp TGE: ", parseInt(TGE.format('X')), " Full Date Token Generate Event: ", TGE.format("dddd, MMMM Do YYYY, h:mm:ss a"));
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
		for (let i=10; i < 110; i++) {
			addresses1.push((await accounts[i].getAddress()).toString());
			addresses2.push((await accounts[i+100].getAddress()).toString());
			addresses3.push((await accounts[i+200].getAddress()).toString());
			addresses4.push((await accounts[i+300].getAddress()).toString());
			addresses5.push((await accounts[i+400].getAddress()).toString());
			addresses6.push((await accounts[i+500].getAddress()).toString());
			addresses7.push((await accounts[i+600].getAddress()).toString());
			addresses8.push((await accounts[i+700].getAddress()).toString());
			addresses9.push((await accounts[i+800].getAddress()).toString());
			addresses10.push((await accounts[i+900].getAddress()).toString());
			addresses11.push((await accounts[i+1000].getAddress()).toString());
			addresses12.push((await accounts[i+1100].getAddress()).toString());
			addresses13.push((await accounts[i+1200].getAddress()).toString());
			amount1.push(ethers.utils.parseEther(String(i+75000)));
			amount2.push(ethers.utils.parseEther(String(i+70000)));
			amount3.push(ethers.utils.parseEther(String(i+30000)));
			amount4.push(ethers.utils.parseEther(String(i+300)));
			amount5.push(ethers.utils.parseEther(String(i+500)));
			amount6.push(ethers.utils.parseEther(String(i+45000)));
			amount7.push(ethers.utils.parseEther(String(i+1000)));
			amount8.push(ethers.utils.parseEther(String(i+100)));
			amount9.push(ethers.utils.parseEther(String(i+10)));
			amount10.push(ethers.utils.parseEther(String(i+45)));
			amount11.push(ethers.utils.parseEther(String(i+600)));
			amount12.push(ethers.utils.parseEther(String(i+700)));
			amount13.push(ethers.utils.parseEther(String(i+1)));
		}
		const address:string = addresses1[35];
		const amount:BigNumber =  amount1[35];
		describe("Start to Load the All Wallets in the allocation to corresponding such vesting process", async () => {
			beforeEach(async () => {
				const tiempo = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", tiempo," Full Date: ", moment(tiempo*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
			})

			it("1.1.- Call the AddAllocation Method, and Include a Address Zero, in the Wallets Array, Revert Transaction", async () => {
				// Revert Because include a Zero Address in Array
				addresses1[35] = '0x0000000000000000000000000000000000000000';
				await expect(omnitoken.addAllocations(addresses1, amount1, 0)).to.be.revertedWith("ERC20: transfer to the zero address")
			});
			it("1.2.- Call the AddAllocation Method, and Include a Blacklisted Address in the Wallets Array, Revert Transaction", async () => {
				// Revert Because include a Blacklisted Address in Array
				addresses1[35] = address;
				await expect(omnitoken.addBlacklist(address)).to.emit(omnitoken, 'inBlacklisted').withArgs(address);
				await expect(omnitoken.addAllocations(addresses1, amount1, 0)).to.be.revertedWith("ERC20 OMN: recipient account is blacklisted");
				await expect(omnitoken.dropBlacklist(address)).to.emit(omnitoken, 'outBlacklisted').withArgs(address);
			});
			it("1.3.- Call the AddAllocation Method, and Include a Zero TotalAmount, in the Amount Array, Revert Transaction", async () => {
				// Revert Because include a Zero TotalAmount in Array
				amount1[35] = ethers.utils.parseEther(String(0));
				await expect(omnitoken.addAllocations(addresses1, amount1, 0)).to.be.revertedWith("ERC20 OMN: total amount token is zero");
				amount1[35] = amount;
			});
			it("1.4.- Call the AddAllocation Method for Allocation #1 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #1
				const receipt = await omnitoken.addAllocations(addresses1, amount1, 0);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", (amount1[i]).toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
					expect((await omnitoken.balanceOf(addresses1[i])).toString()).to.equal((amount1[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses1[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses1[i])).toString()).to.equal((amount1[i]).toString());
				}
			});
			it("1.5.- Call the AddAllocation Method for Allocation #2 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #2
				const receipt = await omnitoken.addAllocations(addresses2, amount2, 1);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
					expect((await omnitoken.balanceOf(addresses2[i])).toString()).to.equal((amount2[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses2[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses2[i])).toString()).to.equal((amount2[i]).toString());
				}
			});
			it("1.6.- Call the AddAllocation Method for Allocation #3 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #3
				const receipt = await omnitoken.addAllocations(addresses3, amount3, 2);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
					expect((await omnitoken.balanceOf(addresses3[i])).toString()).to.equal((amount3[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses3[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses3[i])).toString()).to.equal((amount3[i]).toString());
				}
			});
			it("1.7.- Call the AddAllocation Method for Allocation #4 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #4
				const receipt = await omnitoken.addAllocations(addresses4, amount4, 3);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #4, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses4[i], "Amount: ", amount4[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses4[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses4[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses4[i])).toString());
					expect((await omnitoken.balanceOf(addresses4[i])).toString()).to.equal((amount4[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses4[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses4[i])).toString()).to.equal((amount4[i]).toString());
				}
			});
			it("1.8.- Call the AddAllocation Method for Allocation #5 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #5
				const receipt = await omnitoken.addAllocations(addresses5, amount5, 4);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #5, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses5[i], "Amount: ", amount5[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses5[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses5[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses5[i])).toString());
					expect((await omnitoken.balanceOf(addresses5[i])).toString()).to.equal((amount5[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses5[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses5[i])).toString()).to.equal((amount5[i]).toString());
				}
			});
			it("1.9.- Call the AddAllocation Method for Allocation #6 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #6
				const receipt = await omnitoken.addAllocations(addresses6, amount6, 5);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #6, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
					expect((await omnitoken.balanceOf(addresses6[i])).toString()).to.equal((amount6[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses6[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses6[i])).toString()).to.equal((amount6[i]).toString());
				}
			});
			it("1.10.- Call the AddAllocation Method for Allocation #7 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #7
				const receipt = await omnitoken.addAllocations(addresses7, amount7, 6);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #7, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses7[i], "Amount: ", amount7[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses7[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses7[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses7[i])).toString());
					expect((await omnitoken.balanceOf(addresses7[i])).toString()).to.equal((amount7[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses7[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses7[i])).toString()).to.equal((amount7[i]).toString());
				}
			});
			it("1.11.- Call the AddAllocation Method for Allocation #8 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #8
				const receipt = await omnitoken.addAllocations(addresses8, amount8, 7);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #8, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses8[i], "Amount: ", amount8[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses8[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses8[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses8[i])).toString());
					expect((await omnitoken.balanceOf(addresses8[i])).toString()).to.equal((amount8[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses8[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses8[i])).toString()).to.equal((amount8[i]).toString());
				}
			});
			it("1.12.- Call the AddAllocation Method for Allocation #9 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #9
				const receipt = await omnitoken.addAllocations(addresses9, amount9, 8);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #9, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses9[i], "Amount: ", amount9[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses9[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses9[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses9[i])).toString());
					expect((await omnitoken.balanceOf(addresses9[i])).toString()).to.equal((amount9[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses9[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses9[i])).toString()).to.equal((amount9[i]).toString());
				}
			});
			it("1.13.- Call the AddAllocation Method for Allocation #10 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #10
				const receipt = await omnitoken.addAllocations(addresses10, amount10, 3);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #10, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses10[i], "Amount: ", amount10[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses10[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses10[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses10[i])).toString());
					expect((await omnitoken.balanceOf(addresses10[i])).toString()).to.equal((amount10[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses10[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses10[i])).toString()).to.equal((amount10[i]).toString());
				}
			});
			it("1.14.- Call the AddAllocation Method for Allocation #11 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #11
				const receipt = await omnitoken.addAllocations(addresses11, amount11, 9);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #11, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses11[i], "Amount: ", amount11[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses11[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses11[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses11[i])).toString());
					expect((await omnitoken.balanceOf(addresses11[i])).toString()).to.equal((amount11[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses11[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses11[i])).toString()).to.equal((amount11[i]).toString());
				}
			});
			it("1.15.- Call the AddAllocation Method for Allocation #12 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #12
				const receipt = await omnitoken.addAllocations(addresses12, amount12, 10);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #12, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses12[i], "Amount: ", amount12[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses12[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses12[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses12[i])).toString());
					expect((await omnitoken.balanceOf(addresses12[i])).toString()).to.equal((amount12[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses12[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses12[i])).toString()).to.equal((amount12[i]).toString());
				}
			});
			it("1.16.- Call the AddAllocation Method for Allocation #13 and upload all Wallets of the Vesting Process in the Smart Contract and Verify have the right Values", async () => {
				// Allocation #13
				const receipt = await omnitoken.addAllocations(addresses13, amount13, 11);
				// await receipt.wait();
				// console.log("List of Wallet of Allocation #13, Balances, TransferableAmount, RestAmount Before TGE: ");
				for (let i=0 ; i<100; i++) {
					// console.log("Wallet ",i ," : ", addresses13[i], "Amount: ", amount13[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses13[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses13[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses13[i])).toString());
					expect((await omnitoken.balanceOf(addresses13[i])).toString()).to.equal((amount13[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses13[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses13[i])).toString()).to.equal((amount13[i]).toString());
				}
			});

			// ** Verify Allocation #1 Wallets day by day and unlocked Tokens
			it("1.17.1.- Verify Daily Rate and Initial Iteration of Allocation #1, #2, #3, #4, #6 and #10 Before to TGE  =============================================================", async () => {
				console.log("1 seconds Before Token Generate Event: ", parseInt(TGE.subtract(1, 's').format('X')), TGE.format("dddd, MMMM Do YYYY, h:mm:ss a"));
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount Before to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", amount1[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses1[i])).toString()).to.equal((amount1[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses1[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses1[i])).toString()).to.equal((amount1[i]).toString());
				}
				console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount Before to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses2[i])).toString()).to.equal((amount2[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses2[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses2[i])).toString()).to.equal((amount2[i]).toString());
				}
				console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount Before to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses3[i])).toString()).to.equal((amount3[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses3[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses3[i])).toString()).to.equal((amount3[i]).toString());
				}
				console.log("List of Wallet of Allocation #4, Balances, TransferableAmount, RestAmount Before to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses4[i], "Amount: ", amount4[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses4[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses4[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses4[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses4[i])).toString()).to.equal((amount4[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses4[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses4[i])).toString()).to.equal((amount4[i]).toString());
				}
				console.log("List of Wallet of Allocation #6, Balances, TransferableAmount, RestAmount Before to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses6[i])).toString()).to.equal((amount6[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses6[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses6[i])).toString()).to.equal((amount6[i]).toString());
				}
				console.log("List of Wallet of Allocation #10, Balances, TransferableAmount, RestAmount Before to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses10[i], "Amount: ", amount10[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses10[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses10[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses10[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses10[i])).toString()).to.equal((amount10[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses10[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses10[i])).toString()).to.equal((amount10[i]).toString());
				}
			});

			// ** Verify Allocation #1 Wallets day by day and unlocked Tokens
			it("1.17.2.- Verify Daily Rate and Initial Iteration of Allocation #1, #2, #3, #4, #6 and #10 Beginning to TGE =============================================================", async () => {
				// TGE Moment
				console.log("Date for Token Generate Event: ", parseInt(TGE.add(1, 's').format('X')), TGE.format("dddd, MMMM Do YYYY, h:mm:ss a"));
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount Beginning to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", amount1[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses1[i])).toString()).to.equal((amount1[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses1[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses1[i])).toString()).to.equal((amount1[i]).toString());
				}
				console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount Beginning to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses2[i])).toString()).to.equal((amount2[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses2[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses2[i])).toString()).to.equal((amount2[i]).toString());
				}
				console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount Beginning to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses3[i])).toString()).to.equal((amount3[i]).toString());
					const ten:BigNumber = BigNumber.from(await omnitoken.balanceOf(addresses3[i])).mul('10').div('100');
					expect((await omnitoken.getTransferableAmount(addresses3[i])).toString()).to.equal(ten.toString());
					const diff:BigNumber = BigNumber.from(await omnitoken.balanceOf(addresses3[i])).sub(ten);
					expect((await omnitoken.getRestAmount(addresses3[i])).toString()).to.equal(diff.toString());
				}
				console.log("List of Wallet of Allocation #4, Balances, TransferableAmount, RestAmount Beginning to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses4[i], "Amount: ", amount4[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses4[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses4[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses4[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses4[i])).toString()).to.equal((amount4[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses4[i])).toString()).to.equal((amount4[i]).toString());
					expect((await omnitoken.getRestAmount(addresses4[i])).toString()).to.equal('0');
				}
				console.log("List of Wallet of Allocation #6, Balances, TransferableAmount, RestAmount Beginning to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses6[i])).toString()).to.equal((amount6[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses6[i])).toString()).to.equal('0');
					expect((await omnitoken.getRestAmount(addresses6[i])).toString()).to.equal((amount6[i]).toString());
				}
				console.log("List of Wallet of Allocation #10, Balances, TransferableAmount, RestAmount Beginning to TGE: ");
				for (let i=0 ; i<5; i++) {
					console.log("Wallet ",i ," : ", addresses10[i], "Amount: ", amount10[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses10[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses10[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses10[i])).toString());
				}
				for (let i=0 ; i<100; i++) {
					expect((await omnitoken.balanceOf(addresses10[i])).toString()).to.equal((amount10[i]).toString());
					expect((await omnitoken.getTransferableAmount(addresses10[i])).toString()).to.equal((amount10[i]).toString());
					expect((await omnitoken.getRestAmount(addresses10[i])).toString()).to.equal('0');
				}
			});

			it("1.18.- Verify Daily Rate and Initial Iteration of Allocation #1, #2, #3, #6 After 30 Days ===========================================", async () => {
				// 31 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(30,'d').subtract(1, 'seconds').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount 31 Days - 1 seconds After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", amount1[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
				}
				console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount 31 Days - 1 seconds After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
				}
				console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount 31 Days - 1 seconds After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
				}
				console.log("List of Wallet of Allocation #6, Balances, TransferableAmount, RestAmount 31 Days - 1 seconds After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
				}
				// 31 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount 31 Days After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", amount1[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
				}
				console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount 31 Days After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
				}
				console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount 31 Days After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
				}
				console.log("List of Wallet of Allocation #6, Balances, TransferableAmount, RestAmount 31 Days After to TGE: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
				}
			});

			// ** Verify Allocation Initial Rate of #11
			it("1.19.- Verify Daily Rate and Initial Iteration of Allocation #11 ===========================================", async () => {
				// 93 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(62,'d').subtract(1, 'seconds').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #11, Balances, TransferableAmount, RestAmount 91 Days - 1 seconds After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses11[i], "Amount: ", amount11[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses11[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses11[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses11[i])).toString());
				}
				// 93 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #11, Balances, TransferableAmount, RestAmount 91 Days After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses11[i], "Amount: ", amount11[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses11[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses11[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses11[i])).toString());
				}
			});

			// ** Verify Allocation Initial Rate of #7
			it("1.20.- Verify Daily Rate and Initial Iteration of Allocation #7 ===========================================", async () => {
				// 123 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(30,'d').subtract(1, 'seconds').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #7, Balances, TransferableAmount, RestAmount 123 Days - 1 seconds After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses7[i], "Amount: ", amount7[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses7[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses7[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses7[i])).toString());
				}
				// 123 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #7, Balances, TransferableAmount, RestAmount 123 Days After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses7[i], "Amount: ", amount7[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses7[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses7[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses7[i])).toString());
				}
			});

			// ** Verify Allocation Initial Rate of #12
			it("1.21.- Verify Daily Rate and Initial Iteration of Allocation #12 ===========================================", async () => {
				// 184 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(61,'d').subtract(1, 'seconds').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #12, Balances, TransferableAmount, RestAmount 184 Days - 1 seconds After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses12[i], "Amount: ", amount12[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses12[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses12[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses12[i])).toString());
				}
				// 184 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #12, Balances, TransferableAmount, RestAmount 184 Days After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses12[i], "Amount: ", amount12[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses12[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses12[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses12[i])).toString());
				}
			});

			// ** Verify Allocation Initial Rate of #5, #8, #13
			it("1.22.- Verify Daily Rate and Initial Iteration of Allocation #5, #8, #13 ===========================================", async () => {
				// 274 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(90,'d').subtract(1, 'seconds').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #5, Balances, TransferableAmount, RestAmount 274 Days - 1 seconds After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses5[i], "Amount: ", amount5[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses5[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses5[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses5[i])).toString());
				}
				console.log("List of Wallet of Allocation #8, Balances, TransferableAmount, RestAmount 274 Days - 1 seconds After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses8[i], "Amount: ", amount8[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses8[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses8[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses8[i])).toString());
				}
				console.log("List of Wallet of Allocation #13, Balances, TransferableAmount, RestAmount 274 Days - 1 seconds After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses13[i], "Amount: ", amount13[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses13[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses13[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses13[i])).toString());
				}
				// 274 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
								console.log("List of Wallet of Allocation #5, Balances, TransferableAmount, RestAmount 274 Days After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses5[i], "Amount: ", amount5[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses5[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses5[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses5[i])).toString());
				}
				console.log("List of Wallet of Allocation #8, Balances, TransferableAmount, RestAmount 274 Days After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses8[i], "Amount: ", amount8[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses8[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses8[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses8[i])).toString());
				}
				console.log("List of Wallet of Allocation #13, Balances, TransferableAmount, RestAmount 274 Days After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses13[i], "Amount: ", amount13[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses13[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses13[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses13[i])).toString());
				}
			});

			// ** Verify Allocation Initial Rate of #9
			it("1.23.- Verify Daily Rate and Initial Iteration of Allocation #9 ===========================================", async () => {
				// 365 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(92,'d').subtract(1, 'seconds').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #9, Balances, TransferableAmount, RestAmount 365 Days - 1 seconds After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses9[i], "Amount: ", amount9[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses9[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses9[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses9[i])).toString());
				}
				// 365 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #9, Balances, TransferableAmount, RestAmount 365 Days After to Start: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses9[i], "Amount: ", amount9[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses9[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses9[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses9[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #3 and #6
			it("1.24.- Verify Daily Rate and Final Iteration of Allocation #3, #6 ===========================================", async () => {
				// 30+396 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(60,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount 396 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
				}
				console.log("List of Wallet of Allocation #6 Balances, TransferableAmount, RestAmount 396 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
				}
				// 30+396 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #3, Balances, TransferableAmount, RestAmount 365 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses3[i], "Amount: ", amount3[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses3[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses3[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses3[i])).toString());
				}
				console.log("List of Wallet of Allocation #6, Balances, TransferableAmount, RestAmount 365 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses6[i], "Amount: ", amount6[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses6[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses6[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses6[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #7
			it("1.25.- Verify Daily Rate and Final Iteration of Allocation #7 ===========================================", async () => {
				// 30+457 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(31,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #7, Balances, TransferableAmount, RestAmount 457 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses7[i], "Amount: ", amount7[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses7[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses7[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses7[i])).toString());
				}
				// 30+457 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #7, Balances, TransferableAmount, RestAmount 457 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses7[i], "Amount: ", amount7[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses7[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses7[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses7[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #2
			it("1.26.- Verify Daily Rate and Final Iteration of Allocation #2 ===========================================", async () => {
				// 30+457 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(31,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount 457 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
				}
				// 30+457 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #2, Balances, TransferableAmount, RestAmount 457 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses2[i], "Amount: ", amount2[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses2[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses2[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses2[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #1 and #5
			it("1.27.- Verify Daily Rate and Final Iteration of Allocation #1, #5 ===========================================", async () => {
				// 30+518 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(60,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount 518 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", amount1[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
				}
				console.log("List of Wallet of Allocation #5, Balances, TransferableAmount, RestAmount 275 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses5[i], "Amount: ", amount5[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses5[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses5[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses5[i])).toString());
				}
				// 30+457 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #1, Balances, TransferableAmount, RestAmount 518 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses1[i], "Amount: ", amount1[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses1[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses1[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses1[i])).toString());
				}
				console.log("List of Wallet of Allocation #5, Balances, TransferableAmount, RestAmount 275 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses5[i], "Amount: ", amount5[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses5[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses5[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses5[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #8
			it("1.28.- Verify Daily Rate and Final Iteration of Allocation #8 ===========================================", async () => {
				// 273+640 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(365,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #8, Balances, TransferableAmount, RestAmount 640 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses8[i], "Amount: ", amount8[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses8[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses8[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses8[i])).toString());
				}
				// 273+640 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #8, Balances, TransferableAmount, RestAmount 640 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses8[i], "Amount: ", amount8[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses8[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses8[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses8[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #9
			it("1.29.- Verify Daily Rate and Final Iteration of Allocation #9 ===========================================", async () => {
				// 365+639 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(91,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #9, Balances, TransferableAmount, RestAmount 639 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses9[i], "Amount: ", amount9[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses9[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses9[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses9[i])).toString());
				}
				// 365+639 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #9, Balances, TransferableAmount, RestAmount 639 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses9[i], "Amount: ", amount9[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses9[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses9[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses9[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #13
			it("1.30.- Verify Daily Rate and Final Iteration of Allocation #13 ===========================================", async () => {
				// 273+1006 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(275,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #13, Balances, TransferableAmount, RestAmount 1006 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses13[i], "Amount: ", amount13[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses13[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses13[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses13[i])).toString());
				}
				// 273+1006 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #13, Balances, TransferableAmount, RestAmount 1006 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses13[i], "Amount: ", amount13[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses13[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses13[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses13[i])).toString());
				}
			});

			// ** Verify Allocation Final Rate of #11, #12
			it("1.31.- Verify Daily Rate and Final Iteration of Allocation #11, #12 ===========================================", async () => {
				// 183+1186 Days - 1 seconds after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(90,'d').subtract(1, 's').format('X'))]);
				await network.provider.send("evm_mine", []);
				let time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #11, Balances, TransferableAmount, RestAmount 1277 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses11[i], "Amount: ", amount11[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses11[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses11[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses11[i])).toString());
				}
				console.log("List of Wallet of Allocation #12, Balances, TransferableAmount, RestAmount 1186 Days - 1 seconds After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses12[i], "Amount: ", amount12[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses12[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses12[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses12[i])).toString());
				}
				// 183+1186 Days after TGE
				await network.provider.send("evm_setNextBlockTimestamp", [parseInt(TGE.add(1,'s').format('X'))]);
				await network.provider.send("evm_mine", []);
				time = Math.floor((await ethers.provider.getBlock("latest")).timestamp);
				console.log("Verify TimeStamp: ", time," Full Date: ", moment(time*1000).utc().format("dddd, MMMM Do YYYY, h:mm:ss a"));
				console.log("List of Wallet of Allocation #11, Balances, TransferableAmount, RestAmount 1277 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses11[i], "Amount: ", amount11[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses11[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses11[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses11[i])).toString());
				}
				console.log("List of Wallet of Allocation #12, Balances, TransferableAmount, RestAmount 1186 Days After to Unlocked: ");
				for (let i=0 ; i<10; i++) {
					console.log("Wallet ",i ," : ", addresses12[i], "Amount: ", amount12[i].toString(), "Balances: ",(await omnitoken.balanceOf(addresses12[i])).toString(),"Transferable Amount: ",(await omnitoken.getTransferableAmount(addresses12[i])).toString(), "Rest Amount: ",(await omnitoken.getRestAmount(addresses12[i])).toString());
				}
			});

		});

	});
});
