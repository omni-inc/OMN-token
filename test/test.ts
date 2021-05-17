import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import  { expect } from "chai";

describe("Greeter", async () => {
  it("Should return the new greeting once it's changed", async () => {
    const Greeter = await ethers.getContractFactory("OmniTokenV1");
    const greeter = await Greeter.deploy("Hello, world!");

    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
