/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CirculatSupply } from "../CirculatSupply";

export class CirculatSupply__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CirculatSupply> {
    return super.deploy(overrides || {}) as Promise<CirculatSupply>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CirculatSupply {
    return super.attach(address) as CirculatSupply;
  }
  connect(signer: Signer): CirculatSupply__factory {
    return super.connect(signer) as CirculatSupply__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CirculatSupply {
    return new Contract(address, _abi, signerOrProvider) as CirculatSupply;
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
    name: "unOmniWallet",
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
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b506106c9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063071c0d4a14610067578063715018a61461008f5780638da5cb5b14610099578063d4cd1283146100b4578063d740c48a146100c7578063f2fde38b146100da575b600080fd5b61007a6100753660046105b6565b6100ed565b60405190151581526020015b60405180910390f35b6100976101c2565b005b6033546040516001600160a01b039091168152602001610086565b61007a6100c23660046105b6565b610266565b61007a6100d53660046105b6565b6103ab565b6100976100e83660046105b6565b610488565b6000816001600160a01b038116156101205760405162461bcd60e51b815260040161011790610614565b60405180910390fd5b6033546001600160a01b0316331461014a5760405162461bcd60e51b8152600401610117906105dd565b60655460005b818110156101b5576065818154811061017957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03868116911614156101a3576001935050506101bc565b806101ad81610662565b915050610150565b5060009250505b50919050565b6033546001600160a01b0316331461021c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610117565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6000816001600160a01b038116156102905760405162461bcd60e51b815260040161011790610614565b6033546001600160a01b031633146102ba5760405162461bcd60e51b8152600401610117906105dd565b60655460005b8181101561036c57606581815481106102e957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b038681169116141561035a5760006065828154811061032b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b8061036481610662565b9150506102c0565b506040516001600160a01b038516907fe9df8759e27b868341e77f2225f91e1f9257f59ebf17a5ef4ff69a5b63db3e2690600090a25060019392505050565b6000816001600160a01b038116156103d55760405162461bcd60e51b815260040161011790610614565b6033546001600160a01b031633146103ff5760405162461bcd60e51b8152600401610117906105dd565b606580549084906104118360016105a3565b8154811061042f57634e487b7160e01b600052603260045260246000fd5b6000918252602082200180546001600160a01b0319166001600160a01b03938416179055604051918616917f6e29664dcb1f27c1518133232ab51c1ce868f182eef54b6859c8fc850be45d419190a25060019392505050565b6033546001600160a01b031633146104e25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610117565b6001600160a01b0381166105475760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610117565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60006105af828461064b565b9392505050565b6000602082840312156105c7578081fd5b81356001600160a01b03811681146105af578182fd5b60208082526017908201527f45524332303a206973206e6f7420746865204f776e6572000000000000000000604082015260600190565b6020808252601f908201527f4552433230204f4d4e3a204e6f7420416464205a65726f204164647265737300604082015260600190565b60008282101561065d5761065d61067d565b500390565b60006000198214156106765761067661067d565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220ddcae173dd4b3a6a8c59f235de045dafb4953f7f9eacf791f21b6d3f3ce0727a64736f6c63430008040033";
