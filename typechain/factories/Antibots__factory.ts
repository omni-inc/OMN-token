/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Antibots } from "../Antibots";

export class Antibots__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Antibots> {
    return super.deploy(overrides || {}) as Promise<Antibots>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Antibots {
    return super.attach(address) as Antibots;
  }
  connect(signer: Signer): Antibots__factory {
    return super.connect(signer) as Antibots__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Antibots {
    return new Contract(address, _abi, signerOrProvider) as Antibots;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "statusDefense",
        type: "bool",
      },
    ],
    name: "DisableDefenseAntiBots",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferBurned",
    type: "event",
  },
  {
    inputs: [],
    name: "disableBurnBeforeBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blocksDuration",
        type: "uint256",
      },
    ],
    name: "disableTransfers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBurnBeforeBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBurnBeforeBlockNumberDisabled",
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
    name: "getIsTransferDisabled",
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
  "0x608060405234801561001057600080fd5b50610580806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100ce57806390926217146100e95780639f20353b146100f1578063f2fde38b1461010757600080fd5b806305f5bcd91461008d5780633a4c580f14610097578063715018a6146100b3578063836be0bf146100bb575b600080fd5b61009561011a565b005b60665460ff165b60405190151581526020015b60405180910390f35b6100956101ca565b6100956100c936600461050e565b61027b565b6033546040516001600160a01b0390911681526020016100aa565b61009e610338565b6100f9610354565b6040519081526020016100aa565b6100956101153660046104e0565b6103b8565b6033546001600160a01b031633146101795760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60006065556066805460ff191660019081179091556040805143815260208101929092527f7fd467ee77fd0d63f02631c2a3d0b2471a06149cd77ebb7ec75a763b15578b7c910160405180910390a1565b6033546001600160a01b031633146102245760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610170565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36033805473ffffffffffffffffffffffffffffffffffffffff19169055565b6033546001600160a01b031633146102d55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610170565b60665460ff16156103285760405162461bcd60e51b815260206004820152601760248201527f426f7420646566656e73652069732064697361626c65640000000000000000006044820152606401610170565b6103328143610526565b60655550565b60665460009060ff1615801561034f575060655443105b905090565b6033546000906001600160a01b031633146103b15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610170565b5060655490565b6033546001600160a01b031633146104125760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610170565b6001600160a01b0381166104775760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610170565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000602082840312156104f1578081fd5b81356001600160a01b0381168114610507578182fd5b9392505050565b60006020828403121561051f578081fd5b5035919050565b6000821982111561054557634e487b7160e01b81526011600452602481fd5b50019056fea2646970667358221220a8c6deca7ef1845160e3ec4154b9358ab55491d5f7207c4cfa7aa23877fd75e564736f6c63430008040033";
