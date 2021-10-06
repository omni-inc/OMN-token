/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Blacklistable } from "../Blacklistable";

export class Blacklistable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Blacklistable> {
    return super.deploy(overrides || {}) as Promise<Blacklistable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Blacklistable {
    return super.attach(address) as Blacklistable;
  }
  connect(signer: Signer): Blacklistable__factory {
    return super.connect(signer) as Blacklistable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Blacklistable {
    return new Contract(address, _abi, signerOrProvider) as Blacklistable;
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
    name: "InBlacklisted",
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
    name: "InWhitelisted",
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
    name: "OutBlacklisted",
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
    name: "OutWhitelisted",
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
    name: "addBlacklist",
    outputs: [],
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
    name: "addWhitelist",
    outputs: [],
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
    name: "dropBlacklist",
    outputs: [],
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
    name: "dropWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlacklist",
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
    inputs: [],
    name: "getWhitelist",
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
    name: "isBlacklisted",
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
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isWhitelisted",
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
  "0x608060405234801561001057600080fd5b50610b65806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b95760003560e01c80639cfe42da11610081578063f2fde38b1161005b578063f2fde38b14610165578063f80f5dd514610178578063fe575a871461018b57600080fd5b80639cfe42da14610137578063bb4dade51461014a578063d01f63f51461015d57600080fd5b8063338d6c30146100be5780633af32abf146100dc578063715018a6146100ff578063882da331146101095780638da5cb5b1461011c575b600080fd5b6100c66101b7565b6040516100d39190610ae2565b60405180910390f35b6100ef6100ea366004610ab4565b610219565b60405190151581526020016100d3565b610107610250565b005b610107610117366004610ab4565b6102f9565b6033546040516001600160a01b0390911681526020016100d3565b610107610145366004610ab4565b61045c565b610107610158366004610ab4565b610617565b6100c6610784565b610107610173366004610ab4565b6107e4565b610107610186366004610ab4565b6108ff565b6100ef610199366004610ab4565b6001600160a01b031660009081526068602052604090205460ff1690565b6060606780548060200260200160405190810160405280929190818152602001828054801561020f57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101f1575b5050505050905090565b60006001600160a01b03821661023157506001919050565b506001600160a01b031660009081526066602052604090205460ff1690565b6033546001600160a01b031633146102af5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b806001600160a01b0381166103505760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f20416464726573730060448201526064016102a6565b6033546001600160a01b031633146103aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a6565b6001600160a01b03821660009081526068602052604090205460ff166104125760405162461bcd60e51b815260206004820152601d60248201527f4552433230204f4d4e3a2057616c6c657420646f6e277420657869737400000060448201526064016102a6565b6001600160a01b038216600081815260686020526040808220805460ff19169055517f0b69455eaff3a6d5dbcb8cea85d607f306d08ce4cdcc8a164b07a877e53a5c019190a25050565b806001600160a01b0381166104b35760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f20416464726573730060448201526064016102a6565b6001600160a01b038216600090815260686020526040902054829060ff161561052f5760405162461bcd60e51b815260206004820152602860248201527f4552433230204f4d4e3a2073656e646572206163636f756e7420697320626c6160448201526718dadb1a5cdd195960c21b60648201526084016102a6565b6033546001600160a01b031633146105895760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a6565b6001600160a01b038316600081815260686020526040808220805460ff1916600190811790915560678054918201815583527f9787eeb91fe3101235e4a76063c7023ecb40f923f97916639c598592fa30d6ae0180546001600160a01b03191684179055517f8cfdb3b5a1b22bb4b4478f7ae6e8084f22cd24977a5cdedf9812c6dd1ac46e1b9190a2505050565b806001600160a01b03811661066e5760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f20416464726573730060448201526064016102a6565b6033546001600160a01b031633146106c85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a6565b6001600160a01b03821660009081526066602052604090205460ff1661073a5760405162461bcd60e51b815260206004820152602160248201527f4552433230204f4d4e3a2057616c6c6574206e6f742077686974656c697374656044820152601960fa1b60648201526084016102a6565b6001600160a01b038216600081815260666020526040808220805460ff19169055517f89919c803882ce650255ed0ea805425d31e884f35072c094b9b5d6b5e4453d939190a25050565b6060606580548060200260200160405190810160405280929190818152602001828054801561020f576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116101f1575050505050905090565b6033546001600160a01b0316331461083e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a6565b6001600160a01b0381166108a35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102a6565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b806001600160a01b0381166109565760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f20416464726573730060448201526064016102a6565b6033546001600160a01b031633146109b05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a6565b6001600160a01b03821660009081526066602052604090205460ff1615610a275760405162461bcd60e51b815260206004820152602560248201527f4552433230204f4d4e3a2057616c6c657420616c72656164792077686974656c6044820152641a5cdd195960da1b60648201526084016102a6565b6001600160a01b038216600081815260666020526040808220805460ff1916600190811790915560658054918201815583527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b03191684179055517f498772d0a336ce0349224c81490f537c54bff6ee3e80b3fd886da372aada48489190a25050565b600060208284031215610ac5578081fd5b81356001600160a01b0381168114610adb578182fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015610b235783516001600160a01b031683529284019291840191600101610afe565b5090969550505050505056fea264697066735822122072c58d6a96af42e65e861e7c3e8882a200a10a64bb34060e6bdbfee2f6d30a9564736f6c63430008040033";
