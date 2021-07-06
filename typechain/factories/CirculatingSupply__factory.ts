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
        name: "_account",
        type: "address",
      },
    ],
    name: "InOmniWallet",
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
    name: "OutOmniWallet",
    type: "event",
  },
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
  "0x608060405234801561001057600080fd5b5061088b806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100c9578063d4cd1283146100e4578063d740c48a146100f7578063f2fde38b1461010a57600080fd5b8063071c0d4a146100825780635c910a69146100aa578063715018a6146100bf575b600080fd5b610095610090366004610792565b61011d565b60405190151581526020015b60405180910390f35b6100b26101a9565b6040516100a191906107c0565b6100c761020b565b005b6033546040516001600160a01b0390911681526020016100a1565b6100956100f2366004610792565b6102b4565b610095610105366004610792565b610546565b6100c7610118366004610792565b610677565b60006001600160a01b03821661013557506000919050565b60655460005b8181101561019f576065818154811061016457634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b038581169116141561018d575060019392505050565b8061019781610824565b91505061013b565b5060009392505050565b6060606580548060200260200160405190810160405280929190818152602001828054801561020157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101e3575b5050505050905090565b6033546001600160a01b0316331461026a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6000816001600160a01b03811661030d5760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f2041646472657373006044820152606401610261565b6033546001600160a01b031633146103675760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610261565b6103708361011d565b6103c65760405162461bcd60e51b815260206004820152602160248201527f4552433230204f4d4e3a204f6d6e6957616c6c657420646f6e277420657869736044820152601d60fa1b6064820152608401610261565b60655460005b8181101561053957606581815481106103f557634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b038681169116141561052757606561042160018461080d565b8154811061043f57634e487b7160e01b600052603260045260246000fd5b600091825260209091200154606580546001600160a01b03909216918390811061047957634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060658054806104c657634e487b7160e01b600052603160045260246000fd5b600082815260208120820160001990810180546001600160a01b03191690559091019091556040516001600160a01b038716917fb1ee1f633d2d158b781d9f6893e9a8abba27a0fb87f407d0960bac885a8bd28c91a2600193505050610540565b8061053181610824565b9150506103cc565b5060009250505b50919050565b6000816001600160a01b03811661059f5760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f2041646472657373006044820152606401610261565b6033546001600160a01b031633146105f95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610261565b6065805460018101825560009182527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b0319166001600160a01b03861690811790915560405190917f47532b363fb36ec14175c84315bcbc4d5e17157c347fee4ce1f68eaba480065791a250600192915050565b6033546001600160a01b031633146106d15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610261565b6001600160a01b0381166107365760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610261565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156107a3578081fd5b81356001600160a01b03811681146107b9578182fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156108015783516001600160a01b0316835292840192918401916001016107dc565b50909695505050505050565b60008282101561081f5761081f61083f565b500390565b60006000198214156108385761083861083f565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220dc6084deeda85349fb3060f75b88239f913749b9ea18cd9b80d75eeb558ccc8064736f6c63430008040033";
