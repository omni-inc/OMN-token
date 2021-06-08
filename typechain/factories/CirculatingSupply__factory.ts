/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CirculatingSupply } from "../CirculatingSupply";

export class CirculatingSupply__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CirculatingSupply> {
    return super.deploy(overrides || {}) as Promise<CirculatingSupply>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CirculatingSupply {
    return super.attach(address) as CirculatingSupply;
  }
  connect(signer: Signer): CirculatingSupply__factory {
    return super.connect(signer) as CirculatingSupply__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CirculatingSupply {
    return new Contract(address, _abi, signerOrProvider) as CirculatingSupply;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "inOmniWallet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "outOmniWallet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addOmniWallet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "dropOmniWallet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOmniWallets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isOmniWallet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610835806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100c9578063d4cd1283146100e4578063d740c48a146100f7578063f2fde38b1461010a57600080fd5b8063071c0d4a146100825780635c910a69146100aa578063715018a6146100bf575b600080fd5b61009561009036600461075d565b61011d565b60405190151581526020015b60405180910390f35b6100b2610209565b6040516100a1919061078b565b6100c76102c6565b005b6033546040516001600160a01b0390911681526020016100a1565b6100956100f236600461075d565b61036a565b61009561010536600461075d565b610511565b6100c761011836600461075d565b610642565b6033546000906001600160a01b0316331461017f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b03821661019557506000919050565b60655460005b818110156101ff57606581815481106101c457634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03858116911614156101ed575060019392505050565b806101f7816107d8565b91505061019b565b5060009392505050565b6033546060906001600160a01b031633146102665760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610176565b60658054806020026020016040519081016040528092919081815260200182805480156102bc57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161029e575b5050505050905090565b6033546001600160a01b031633146103205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610176565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6000816001600160a01b0381166103c35760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f2041646472657373006044820152606401610176565b6033546001600160a01b0316331461041d5760405162461bcd60e51b815260206004820152601760248201527f45524332303a206973206e6f7420746865204f776e65720000000000000000006044820152606401610176565b6065546000805b828110156104d4576065818154811061044d57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03878116911614156104c25760006065828154811061048f57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600191505b806104cc816107d8565b915050610424565b506040516001600160a01b038616907f29d5a2719ce0c0ec55e3e7a455ed0a0aa72d701694bc35eaf644cbc276fd44ce90600090a2949350505050565b6000816001600160a01b03811661056a5760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f2041646472657373006044820152606401610176565b6033546001600160a01b031633146105c45760405162461bcd60e51b815260206004820152601760248201527f45524332303a206973206e6f7420746865204f776e65720000000000000000006044820152606401610176565b6065805460018101825560009182527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b0319166001600160a01b03861690811790915560405190917f6e29664dcb1f27c1518133232ab51c1ce868f182eef54b6859c8fc850be45d4191a250600192915050565b6033546001600160a01b0316331461069c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610176565b6001600160a01b0381166107015760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610176565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561076e578081fd5b81356001600160a01b0381168114610784578182fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156107cc5783516001600160a01b0316835292840192918401916001016107a7565b50909695505050505050565b60006000198214156107f857634e487b7160e01b81526011600452602481fd5b506001019056fea264697066735822122014dadb158bfd90baaf40597fc9b5ff69092acc76a37629034a3361cc9ff09ec964736f6c63430008040033";
