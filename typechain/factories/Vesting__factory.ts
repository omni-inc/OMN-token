/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Vesting } from "../Vesting";

export class Vesting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vesting> {
    return super.deploy(overrides || {}) as Promise<Vesting>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Vesting {
    return super.attach(address) as Vesting;
  }
  connect(signer: Signer): Vesting__factory {
    return super.connect(signer) as Vesting__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Vesting {
    return new Contract(address, _abi, signerOrProvider) as Vesting;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
    name: "inBlacklisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "scheduled",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "startDay",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "afterDays",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dailyAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialAmount",
        type: "uint256",
      },
    ],
    name: "inFrozenWallet",
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
    name: "outBlacklisted",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "totalAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "vestingTypeIndex",
        type: "uint256",
      },
    ],
    name: "addAllocations",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
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
    name: "addBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    name: "dropBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "frozenWallets",
    outputs: [
      {
        internalType: "bool",
        name: "scheduled",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "startDay",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "afterDays",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dailyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "afterDays",
        type: "uint256",
      },
    ],
    name: "getDays",
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
    name: "getReleaseTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "getRestAmount",
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
    name: "getTimestamp",
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
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "getTransferableAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "uint256",
        name: "startDay",
        type: "uint256",
      },
    ],
    name: "isStarted",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "paused",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "_a",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_b",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_c",
        type: "uint8",
      },
    ],
    name: "rsvToSig",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vestingTypes",
    outputs: [
      {
        internalType: "uint256",
        name: "dailyRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "afterDays",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "vesting",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506127c3806100206000396000f3fe6080604052600436106101e25760003560e01c80637ecebe0011610102578063abd225e111610095578063e66fa23911610064578063e66fa2391461061c578063f22a0b311461065e578063f2fde38b1461067e578063fe575a871461069e576101e2565b8063abd225e114610576578063c632395e14610596578063d505accf146105b6578063dd62ed3e146105d6576101e2565b80639cfe42da116100d15780639cfe42da14610503578063a457c2d714610523578063a851c2e514610543578063a9059cbb14610556576101e2565b80637ecebe0014610486578063882da331146104a65780638da5cb5b146104c657806395d89b41146104ee576101e2565b80633644e5151161017a5780635c975abb116101495780635c975abb1461035e57806370a0823114610376578063715018a6146103ac57806371849403146103c3576101e2565b80633644e515146102f2578063395093511461030757806353462d6b14610327578063553ca4e21461033e576101e2565b8063188ec356116101b6578063188ec3561461028157806323b872dd14610294578063313ce567146102b4578063338d6c30146102d0576101e2565b8062b61dd9146101e757806306fdde031461021a578063095ea7b31461023c57806318160ddd1461026c575b600080fd5b3480156101f357600080fd5b506102076102023660046123c9565b6106d7565b6040519081526020015b60405180910390f35b34801561022657600080fd5b5061022f6107b9565b6040516102119190612680565b34801561024857600080fd5b5061025c6102573660046124b9565b61084b565b6040519015158152602001610211565b34801561027857600080fd5b50609b54610207565b34801561028d57600080fd5b5042610207565b3480156102a057600080fd5b5061025c6102af366004612415565b610861565b3480156102c057600080fd5b5060405160128152602001610211565b3480156102dc57600080fd5b506102e5610919565b6040516102119190612612565b3480156102fe57600080fd5b506102076109d5565b34801561031357600080fd5b5061025c6103223660046124b9565b6109e4565b34801561033357600080fd5b506360b62140610207565b34801561034a57600080fd5b5061022f610359366004612553565b610a1b565b34801561036a57600080fd5b5060675460ff1661025c565b34801561038257600080fd5b506102076103913660046123c9565b6001600160a01b031660009081526099602052604090205490565b3480156103b857600080fd5b506103c1610bb5565b005b3480156103cf57600080fd5b5061043d6103de3660046123c9565b61013260205260009081526040902080546001820154600283015460039093015460ff831693610100840463ffffffff908116946501000000000081049091169369010000000000000000009091046001600160a01b03169290919087565b60408051971515885263ffffffff968716602089015294909516938601939093526001600160a01b03919091166060850152608084015260a083015260c082015260e001610211565b34801561049257600080fd5b506102076104a13660046123c9565b610c59565b3480156104b257600080fd5b506103c16104c13660046123c9565b610c79565b3480156104d257600080fd5b506033546040516001600160a01b039091168152602001610211565b3480156104fa57600080fd5b5061022f610d1c565b34801561050f57600080fd5b506103c161051e3660046123c9565b610d2b565b34801561052f57600080fd5b5061025c61053e3660046124b9565b610e11565b61025c6105513660046124e2565b610eac565b34801561056257600080fd5b5061025c6105713660046124b9565b611489565b34801561058257600080fd5b5061025c6105913660046125af565b611496565b3480156105a257600080fd5b506102076105b13660046123c9565b6114b9565b3480156105c257600080fd5b506103c16105d1366004612450565b6114f0565b3480156105e257600080fd5b506102076105f13660046123e3565b6001600160a01b039182166000908152609a6020908152604080832093909416825291909152205490565b34801561062857600080fd5b5061063c6106373660046125af565b611770565b6040805194855260208501939093529183015215156060820152608001610211565b34801561066a57600080fd5b506102076106793660046125af565b6117ae565b34801561068a57600080fd5b506103c16106993660046123c9565b6117fc565b3480156106aa57600080fd5b5061025c6106b93660046123c9565b6001600160a01b031660009081526066602052604090205460ff1690565b6001600160a01b03811660009081526101326020526040812054819061070b9065010000000000900463ffffffff166117ae565b6001600160a01b03841660009081526101326020526040812060020154919250906107369083611917565b6001600160a01b0385166000908152610132602052604081206003015491925090610762908390611923565b6001600160a01b038616600090815261013260205260409020600101549091508111156107af57505050506001600160a01b038116600090815261013260205260409020600101546107b4565b925050505b919050565b6060609c80546107c890612701565b80601f01602080910402602001604051908101604052809291908181526020018280546107f490612701565b80156108415780601f1061081657610100808354040283529160200191610841565b820191906000526020600020905b81548152906001019060200180831161082457829003601f168201915b5050505050905090565b600061085833848461192f565b50600192915050565b600061086e848484611a53565b6001600160a01b0384166000908152609a60209081526040808320338452909152902054828110156108f85760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61090c853361090786856126ea565b61192f565b60019150505b9392505050565b6033546060906001600160a01b031633146109765760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ef565b606580548060200260200160405190810160405280929190818152602001828054801561084157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116109ae575050505050905090565b60006109df611c2b565b905090565b336000818152609a602090815260408083206001600160a01b03871684529091528120549091610858918590610907908690612693565b604080516041808252608082019092526060916000919060208201818036833701905050905060005b6020811015610aba57858160208110610a6d57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610a9157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535080610ab281612736565b915050610a44565b5060205b6040811015610b3e5784610ad36020836126ea565b60208110610af157634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610b1557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535080610b3681612736565b915050610abe565b506020839052600080601f1a60f81b82604081518110610b6e57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610b8e86611ca6565b610b9785611ca6565b610ba38460ff16611cee565b610bac82611d33565b50949350505050565b6033546001600160a01b03163314610c0f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ef565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6001600160a01b038116600090815260ff60205260408120545b92915050565b6033546001600160a01b03163314610cd35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ef565b6001600160a01b038116600081815260666020526040808220805460ff19169055517faa4be75f7a98ba03c512db17adfc9fd6fbc0ca34751147d7b347fe13c9758e599190a250565b6060609d80546107c890612701565b6033546001600160a01b03163314610d855760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ef565b6001600160a01b038116600081815260666020526040808220805460ff1916600190811790915560658054918201815583527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b03191684179055517fb0dbbbd05b70fa6efee33860f1511290a2934875f9b838d5dbdcc9f09b9e68559190a250565b336000908152609a602090815260408083206001600160a01b038616845290915281205482811015610e935760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016108ef565b610ea2338561090786856126ea565b5060019392505050565b6033546000906001600160a01b03163314610f095760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ef565b60675460ff1615610f4f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108ef565b848314610fb35760405162461bcd60e51b815260206004820152602c60248201527f4164647265737320616e6420746f74616c416d6f756e7473206c656e6774682060448201526b6d7573742062652073616d6560a01b60648201526084016108ef565b6101338281548110610fd557634e487b7160e01b600052603260045260246000fd5b600091825260209091206003600490920201015460ff166110385760405162461bcd60e51b815260206004820152601860248201527f56657374696e6720747970652069736e277420666f756e64000000000000000060448201526064016108ef565b6000610133838154811061105c57634e487b7160e01b600052603260045260246000fd5b60009182526020808320604080516080810182526004909402909101805484526001810154928401929092526002820154908301526003015460ff161515606082015291508690805b828110156112995760008a8a838181106110cf57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906110e491906123c9565b90506001600160a01b0381166111485760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016108ef565b6001600160a01b03811660009081526066602052604090205460ff16156111c55760405162461bcd60e51b815260206004820152602b60248201527f4552433230204f4d4e3a20726563697069656e74206163636f756e742069732060448201526a189b1858dadb1a5cdd195960aa1b60648201526084016108ef565b60008989848181106111e757634e487b7160e01b600052603260045260246000fd5b90506020020135141561124a5760405162461bcd60e51b815260206004820152602560248201527f4552433230204f4d4e3a20746f74616c20616d6f756e7420746f6b656e206973604482015264207a65726f60d81b60648201526084016108ef565b61128389898481811061126d57634e487b7160e01b600052603260045260246000fd5b905060200201358461192390919063ffffffff16565b925050808061129190612736565b9150506110a5565b506112ce8160405180606001604052806026815260200161276860269139336000908152609960205260409020549190611d76565b336000908152609960205260408120919091555b828110156114795760008a8a8381811061130c57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061132191906123c9565b9050600089898481811061134557634e487b7160e01b600052603260045260246000fd5b905060200201359050600061138d8b8b8681811061137357634e487b7160e01b600052603260045260246000fd5b905060200201358860000151670de0b6b3a7640000611da2565b905060006113ce8c8c878181106113b457634e487b7160e01b600052603260045260246000fd5b905060200201358960200151670de0b6b3a7640000611da2565b6040808a01516001600160a01b038716600090815260996020529190912054919250906113fb9085611923565b6001600160a01b0386166000818152609960205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061144c9088815260200190565b60405180910390a36114618585858585611f27565b5050505050808061147190612736565b9150506112e2565b5060019998505050505050505050565b6000610858338484611a53565b60006360b62140428111806114aa57508242105b156108585760009150506107b4565b6000806114c5836106d7565b6001600160a01b03841660009081526101326020526040812060010154919250906107af9083612100565b834211156115405760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016108ef565b6000610100548888886115528c61210c565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006115ad82612134565b905060006115bc858588610a1b565b9050893b156116ed57604051630b135d3f60e11b81526001600160a01b038b1690631626ba7e906115f3908590859060040161265f565b60206040518083038186803b15801561160b57600080fd5b505afa92505050801561163b575060408051601f3d908101601f1916820190925261163891810190612587565b60015b6116875760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016108ef565b6001600160e01b03198116630b135d3f60e11b146116e75760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016108ef565b50611759565b896001600160a01b031661170383888888612182565b6001600160a01b0316146117595760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016108ef565b6117648a8a8a61192f565b50505050505050505050565b610133818154811061178157600080fd5b60009182526020909120600490910201805460018201546002830154600390930154919350919060ff1684565b60006360b62140816117c08285611923565b9050804210156117d5576000925050506107b4565b60006117e14283612100565b905060006117f2826201518061232b565b9695505050505050565b6033546001600160a01b031633146118565760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ef565b6001600160a01b0381166118bb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016108ef565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b600061091282846126cb565b60006109128284612693565b6001600160a01b0383166119915760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016108ef565b6001600160a01b0382166119f25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016108ef565b6001600160a01b038381166000818152609a602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316611ab75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016108ef565b6001600160a01b038216611b195760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016108ef565b6001600160a01b03831660009081526099602052604090205481811015611b915760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016108ef565b611b9b82826126ea565b6001600160a01b038086166000908152609960205260408082209390935590851681529081208054849290611bd1908490612693565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611c1d91815260200190565b60405180910390a350505050565b60006109df7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611c5a60cb5490565b60cc546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b611ceb81604051602401611cbc91815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166327b7cf8560e01b179052612337565b50565b611ceb81604051602401611d0491815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f5b1bba960e01b179052612337565b611ceb81604051602401611d479190612680565b60408051601f198184030181529190526020810180516001600160e01b03166305f3bfab60e11b179052612337565b60008184841115611d9a5760405162461bcd60e51b81526004016108ef9190612680565b505050900390565b600080806000198587098587029250828110838203039150508060001415611ddc5760008411611dd157600080fd5b508290049050610912565b808411611de857600080fd5b600084868809808403938111909203919050600085611e08816001611923565b611e14906000196126ea565b16958690049593849004936000819003046001019050611e3481846126cb565b909317926000611e458760036126cb565b6002189050611e5481886126cb565b611e5f9060026126ea565b611e6990826126cb565b9050611e7581886126cb565b611e809060026126ea565b611e8a90826126cb565b9050611e9681886126cb565b611ea19060026126ea565b611eab90826126cb565b9050611eb781886126cb565b611ec29060026126ea565b611ecc90826126cb565b9050611ed881886126cb565b611ee39060026126ea565b611eed90826126cb565b9050611ef981886126cb565b611f049060026126ea565b611f0e90826126cb565b9050611f1a81866126cb565b9998505050505050505050565b60675460ff1615611f6d5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108ef565b6040805160e08101909152600181526360b621409060009060208101611f938486611923565b63ffffffff90811682528581166020808401919091526001600160a01b038b8116604080860182905260608087018e905260808088018e905260a09788018d90526000848152610132875283902089518154978b0151948b0151938b015160ff199098169015151764ffffffff001916610100948916949094029390931768ffffffff000000000019166501000000000092881692909202919091177fffffff0000000000000000000000000000000000000000ffffffffffffffffff16690100000000000000000095909416949094029290921782559185015160018083019190915593850151600282015560c08501516003909101559293508892917f98b12ad1f670e27b3d38ba562768f3001544b64a5e1184a3f9b6914629e079bd916120c1908790899061192316565b60408051921515835263ffffffff918216602084015290881690820152606081018990526080810188905260a00160405180910390a350505050505050565b600061091282846126ea565b6001600160a01b038116600090815260ff602052604090208054600181018255905b50919050565b6000610c73612141611c2b565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156121ff5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016108ef565b8360ff16601b148061221457508360ff16601c145b61226b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016108ef565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156122bf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166123225760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016108ef565b95945050505050565b600061091282846126ab565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b80356001600160a01b03811681146107b457600080fd5b60008083601f840112612380578182fd5b50813567ffffffffffffffff811115612397578182fd5b60208301915083602080830285010111156123b157600080fd5b9250929050565b803560ff811681146107b457600080fd5b6000602082840312156123da578081fd5b61091282612358565b600080604083850312156123f5578081fd5b6123fe83612358565b915061240c60208401612358565b90509250929050565b600080600060608486031215612429578081fd5b61243284612358565b925061244060208501612358565b9150604084013590509250925092565b600080600080600080600060e0888a03121561246a578283fd5b61247388612358565b965061248160208901612358565b9550604088013594506060880135935061249d608089016123b8565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156124cb578182fd5b6124d483612358565b946020939093013593505050565b6000806000806000606086880312156124f9578081fd5b853567ffffffffffffffff80821115612510578283fd5b61251c89838a0161236f565b90975095506020880135915080821115612534578283fd5b506125418882890161236f565b96999598509660400135949350505050565b600080600060608486031215612567578283fd5b833592506020840135915061257e604085016123b8565b90509250925092565b600060208284031215612598578081fd5b81516001600160e01b031981168114610912578182fd5b6000602082840312156125c0578081fd5b5035919050565b60008151808452815b818110156125ec576020818501810151868301820152016125d0565b818111156125fd5782602083870101525b50601f01601f19169290920160200192915050565b6020808252825182820181905260009190848201906040850190845b818110156126535783516001600160a01b03168352928401929184019160010161262e565b50909695505050505050565b60008382526040602083015261267860408301846125c7565b949350505050565b60006020825261091260208301846125c7565b600082198211156126a6576126a6612751565b500190565b6000826126c657634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156126e5576126e5612751565b500290565b6000828210156126fc576126fc612751565b500390565b60028104600182168061271557607f821691505b6020821081141561212e57634e487b7160e01b600052602260045260246000fd5b600060001982141561274a5761274a612751565b5060010190565b634e487b7160e01b600052601160045260246000fdfe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365a26469706673582212206e7070253524d8f131f9054d0d4990dc641bb84955b155aa94a410a570a1090164736f6c63430008020033";
