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
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b5061278e806100206000396000f3fe6080604052600436106101e25760003560e01c80637ecebe0011610102578063abd225e111610095578063e66fa23911610064578063e66fa2391461061c578063f22a0b311461065e578063f2fde38b1461067e578063fe575a871461069e57600080fd5b8063abd225e114610576578063c632395e14610596578063d505accf146105b6578063dd62ed3e146105d657600080fd5b80639cfe42da116100d15780639cfe42da14610503578063a457c2d714610523578063a851c2e514610543578063a9059cbb1461055657600080fd5b80637ecebe0014610486578063882da331146104a65780638da5cb5b146104c657806395d89b41146104ee57600080fd5b80633644e5151161017a5780635c975abb116101495780635c975abb1461035e57806370a0823114610376578063715018a6146103ac57806371849403146103c357600080fd5b80633644e515146102f2578063395093511461030757806353462d6b14610327578063553ca4e21461033e57600080fd5b8063188ec356116101b6578063188ec3561461028157806323b872dd14610294578063313ce567146102b4578063338d6c30146102d057600080fd5b8062b61dd9146101e757806306fdde031461021a578063095ea7b31461023c57806318160ddd1461026c575b600080fd5b3480156101f357600080fd5b5061020761020236600461239c565b6106d7565b6040519081526020015b60405180910390f35b34801561022657600080fd5b5061022f6107cf565b604051610211919061264b565b34801561024857600080fd5b5061025c61025736600461248c565b610861565b6040519015158152602001610211565b34801561027857600080fd5b50609b54610207565b34801561028d57600080fd5b5042610207565b3480156102a057600080fd5b5061025c6102af3660046123e8565b610877565b3480156102c057600080fd5b5060405160128152602001610211565b3480156102dc57600080fd5b506102e561092f565b60405161021191906125e5565b3480156102fe57600080fd5b506102076109eb565b34801561031357600080fd5b5061025c61032236600461248c565b6109fa565b34801561033357600080fd5b506360ddae40610207565b34801561034a57600080fd5b5061022f610359366004612526565b610a31565b34801561036a57600080fd5b5060675460ff1661025c565b34801561038257600080fd5b5061020761039136600461239c565b6001600160a01b031660009081526099602052604090205490565b3480156103b857600080fd5b506103c1610b99565b005b3480156103cf57600080fd5b5061043d6103de36600461239c565b61013260205260009081526040902080546001820154600283015460039093015460ff831693610100840463ffffffff908116946501000000000081049091169369010000000000000000009091046001600160a01b03169290919087565b60408051971515885263ffffffff968716602089015294909516938601939093526001600160a01b03919091166060850152608084015260a083015260c082015260e001610211565b34801561049257600080fd5b506102076104a136600461239c565b610c3d565b3480156104b257600080fd5b506103c16104c136600461239c565b610c5d565b3480156104d257600080fd5b506033546040516001600160a01b039091168152602001610211565b3480156104fa57600080fd5b5061022f610d00565b34801561050f57600080fd5b506103c161051e36600461239c565b610d0f565b34801561052f57600080fd5b5061025c61053e36600461248c565b610df5565b61025c6105513660046124b5565b610e90565b34801561056257600080fd5b5061025c61057136600461248c565b61146d565b34801561058257600080fd5b5061025c610591366004612582565b61147a565b3480156105a257600080fd5b506102076105b136600461239c565b61149c565b3480156105c257600080fd5b506103c16105d1366004612423565b6114db565b3480156105e257600080fd5b506102076105f13660046123b6565b6001600160a01b039182166000908152609a6020908152604080832093909416825291909152205490565b34801561062857600080fd5b5061063c610637366004612582565b611759565b6040805194855260208501939093529183015215156060820152608001610211565b34801561066a57600080fd5b50610207610679366004612582565b611797565b34801561068a57600080fd5b506103c161069936600461239c565b6117e4565b3480156106aa57600080fd5b5061025c6106b936600461239c565b6001600160a01b031660009081526066602052604090205460ff1690565b60006360ddae40428111156106ef5750600092915050565b6001600160a01b038316600090815261013260205260408120546107219065010000000000900463ffffffff16611797565b6001600160a01b038516600090815261013260205260408120600201549192509061074c90836118ff565b6001600160a01b038616600090815261013260205260408120600301549192509061077890839061190b565b6001600160a01b038716600090815261013260205260409020600101549091508111156107c6575050506001600160a01b039092166000908152610132602052604090206001015492915050565b95945050505050565b6060609c80546107de906126cc565b80601f016020809104026020016040519081016040528092919081815260200182805461080a906126cc565b80156108575780601f1061082c57610100808354040283529160200191610857565b820191906000526020600020905b81548152906001019060200180831161083a57829003601f168201915b5050505050905090565b600061086e338484611917565b50600192915050565b6000610884848484611a3b565b6001600160a01b0384166000908152609a602090815260408083203384529091529020548281101561090e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610922853361091d86856126b5565b611917565b60019150505b9392505050565b6033546060906001600160a01b0316331461098c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610905565b606580548060200260200160405190810160405280929190818152602001828054801561085757602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116109c4575050505050905090565b60006109f5611c13565b905090565b336000818152609a602090815260408083206001600160a01b0387168452909152812054909161086e91859061091d90869061265e565b604080516041808252608082019092526060916000919060208201818036833701905050905060005b6020811015610ad057858160208110610a8357634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610aa757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535080610ac881612701565b915050610a5a565b5060205b6040811015610b545784610ae96020836126b5565b60208110610b0757634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610b2b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535080610b4c81612701565b915050610ad4565b508260f81b81604081518110610b7a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350949350505050565b6033546001600160a01b03163314610bf35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610905565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6001600160a01b038116600090815260ff60205260408120545b92915050565b6033546001600160a01b03163314610cb75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610905565b6001600160a01b038116600081815260666020526040808220805460ff19169055517faa4be75f7a98ba03c512db17adfc9fd6fbc0ca34751147d7b347fe13c9758e599190a250565b6060609d80546107de906126cc565b6033546001600160a01b03163314610d695760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610905565b6001600160a01b038116600081815260666020526040808220805460ff1916600190811790915560658054918201815583527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b03191684179055517fb0dbbbd05b70fa6efee33860f1511290a2934875f9b838d5dbdcc9f09b9e68559190a250565b336000908152609a602090815260408083206001600160a01b038616845290915281205482811015610e775760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610905565b610e86338561091d86856126b5565b5060019392505050565b6033546000906001600160a01b03163314610eed5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610905565b60675460ff1615610f335760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610905565b848314610f975760405162461bcd60e51b815260206004820152602c60248201527f4164647265737320616e6420746f74616c416d6f756e7473206c656e6774682060448201526b6d7573742062652073616d6560a01b6064820152608401610905565b6101338281548110610fb957634e487b7160e01b600052603260045260246000fd5b600091825260209091206003600490920201015460ff1661101c5760405162461bcd60e51b815260206004820152601860248201527f56657374696e6720747970652069736e277420666f756e6400000000000000006044820152606401610905565b6000610133838154811061104057634e487b7160e01b600052603260045260246000fd5b60009182526020808320604080516080810182526004909402909101805484526001810154928401929092526002820154908301526003015460ff161515606082015291508690805b8281101561127d5760008a8a838181106110b357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906110c8919061239c565b90506001600160a01b03811661112c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610905565b6001600160a01b03811660009081526066602052604090205460ff16156111a95760405162461bcd60e51b815260206004820152602b60248201527f4552433230204f4d4e3a20726563697069656e74206163636f756e742069732060448201526a189b1858dadb1a5cdd195960aa1b6064820152608401610905565b60008989848181106111cb57634e487b7160e01b600052603260045260246000fd5b90506020020135141561122e5760405162461bcd60e51b815260206004820152602560248201527f4552433230204f4d4e3a20746f74616c20616d6f756e7420746f6b656e206973604482015264207a65726f60d81b6064820152608401610905565b61126789898481811061125157634e487b7160e01b600052603260045260246000fd5b905060200201358461190b90919063ffffffff16565b925050808061127590612701565b915050611089565b506112b28160405180606001604052806026815260200161273360269139336000908152609960205260409020549190611c8e565b336000908152609960205260408120919091555b8281101561145d5760008a8a838181106112f057634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611305919061239c565b9050600089898481811061132957634e487b7160e01b600052603260045260246000fd5b90506020020135905060006113718b8b8681811061135757634e487b7160e01b600052603260045260246000fd5b905060200201358860000151670de0b6b3a7640000611cba565b905060006113b28c8c8781811061139857634e487b7160e01b600052603260045260246000fd5b905060200201358960200151670de0b6b3a7640000611cba565b6040808a01516001600160a01b038716600090815260996020529190912054919250906113df908561190b565b6001600160a01b0386166000818152609960205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906114309088815260200190565b60405180910390a36114458585858585611e3f565b5050505050808061145590612701565b9150506112c6565b5060019998505050505050505050565b600061086e338484611a3b565b60006360ddae404281118061148e57508242105b1561086e5750600092915050565b6000806114a8836106d7565b6001600160a01b03841660009081526101326020526040812060010154919250906114d39083612032565b949350505050565b8342111561152b5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610905565b60006101005488888861153d8c61203e565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061159882612066565b905060006115a7858588610a31565b9050893b156116d857604051630b135d3f60e11b81526001600160a01b038b1690631626ba7e906115de9085908590600401612632565b60206040518083038186803b1580156115f657600080fd5b505afa925050508015611626575060408051601f3d908101601f191682019092526116239181019061255a565b60015b6116725760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610905565b6001600160e01b03198116630b135d3f60e11b146116d25760405162461bcd60e51b815260206004820152601f60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726520006044820152606401610905565b50611742565b896001600160a01b03166116ec83836120b4565b6001600160a01b0316146117425760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610905565b61174d8a8a8a611917565b50505050505050505050565b610133818154811061176a57600080fd5b60009182526020909120600490910201805460018201546002830154600390930154919350919060ff1684565b60006360ddae40816117a9828561190b565b9050804210156117bd575060009392505050565b60006117c94283612032565b905060006117da8262015180612179565b9695505050505050565b6033546001600160a01b0316331461183e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610905565b6001600160a01b0381166118a35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610905565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60006109288284612696565b6000610928828461265e565b6001600160a01b0383166119795760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610905565b6001600160a01b0382166119da5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610905565b6001600160a01b038381166000818152609a602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316611a9f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610905565b6001600160a01b038216611b015760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610905565b6001600160a01b03831660009081526099602052604090205481811015611b795760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610905565b611b8382826126b5565b6001600160a01b038086166000908152609960205260408082209390935590851681529081208054849290611bb990849061265e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611c0591815260200190565b60405180910390a350505050565b60006109f57f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611c4260cb5490565b60cc546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b60008184841115611cb25760405162461bcd60e51b8152600401610905919061264b565b505050900390565b600080806000198587098587029250828110838203039150508060001415611cf45760008411611ce957600080fd5b508290049050610928565b808411611d0057600080fd5b600084868809808403938111909203919050600085611d2081600161190b565b611d2c906000196126b5565b16958690049593849004936000819003046001019050611d4c8184612696565b909317926000611d5d876003612696565b6002189050611d6c8188612696565b611d779060026126b5565b611d819082612696565b9050611d8d8188612696565b611d989060026126b5565b611da29082612696565b9050611dae8188612696565b611db99060026126b5565b611dc39082612696565b9050611dcf8188612696565b611dda9060026126b5565b611de49082612696565b9050611df08188612696565b611dfb9060026126b5565b611e059082612696565b9050611e118188612696565b611e1c9060026126b5565b611e269082612696565b9050611e328186612696565b9998505050505050505050565b60675460ff1615611e855760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610905565b6040805160e08101909152600181526360ddae409060009060208101611eab848661190b565b63ffffffff90811682528581166020808401919091526001600160a01b038b8116604080860182905260608087018e905260808088018e905260a09788018d90526000848152610132875283902089518154978b0151948b0151938b015164ffffffffff1990981690151564ffffffff0019161761010094891694909402939093177fffffff000000000000000000000000000000000000000000000000ffffffffff1665010000000000928816929092027fffffff0000000000000000000000000000000000000000ffffffffffffffffff1691909117690100000000000000000095909416949094029290921782559185015160018083019190915593850151600282015560c08501516003909101559293508892917f98b12ad1f670e27b3d38ba562768f3001544b64a5e1184a3f9b6914629e079bd91611ff3908790899061190b16565b60408051921515835263ffffffff918216602084015290881690820152606081018990526080810188905260a00160405180910390a350505050505050565b600061092882846126b5565b6001600160a01b038116600090815260ff602052604090208054600181018255905b50919050565b6000610c57612073611c13565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000808451604114156120de5750505060208201516040830151606084015160001a61216d565b8451604014156121255750505060408201516020830151907f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169060ff1c601b0161216d565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610905565b6117da86828585612185565b60006109288284612676565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156122025760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610905565b8360ff16601b148061221757508360ff16601c145b61226e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610905565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156122c2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166107c65760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610905565b80356001600160a01b038116811461233c57600080fd5b919050565b60008083601f840112612352578182fd5b50813567ffffffffffffffff811115612369578182fd5b6020830191508360208260051b850101111561238457600080fd5b9250929050565b803560ff8116811461233c57600080fd5b6000602082840312156123ad578081fd5b61092882612325565b600080604083850312156123c8578081fd5b6123d183612325565b91506123df60208401612325565b90509250929050565b6000806000606084860312156123fc578081fd5b61240584612325565b925061241360208501612325565b9150604084013590509250925092565b600080600080600080600060e0888a03121561243d578283fd5b61244688612325565b965061245460208901612325565b955060408801359450606088013593506124706080890161238b565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561249e578182fd5b6124a783612325565b946020939093013593505050565b6000806000806000606086880312156124cc578081fd5b853567ffffffffffffffff808211156124e3578283fd5b6124ef89838a01612341565b90975095506020880135915080821115612507578283fd5b5061251488828901612341565b96999598509660400135949350505050565b60008060006060848603121561253a578283fd5b83359250602084013591506125516040850161238b565b90509250925092565b60006020828403121561256b578081fd5b81516001600160e01b031981168114610928578182fd5b600060208284031215612593578081fd5b5035919050565b60008151808452815b818110156125bf576020818501810151868301820152016125a3565b818111156125d05782602083870101525b50601f01601f19169290920160200192915050565b6020808252825182820181905260009190848201906040850190845b818110156126265783516001600160a01b031683529284019291840191600101612601565b50909695505050505050565b8281526040602082015260006114d3604083018461259a565b602081526000610928602083018461259a565b600082198211156126715761267161271c565b500190565b60008261269157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156126b0576126b061271c565b500290565b6000828210156126c7576126c761271c565b500390565b600181811c908216806126e057607f821691505b6020821081141561206057634e487b7160e01b600052602260045260246000fd5b60006000198214156127155761271561271c565b5060010190565b634e487b7160e01b600052601160045260246000fdfe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365a26469706673582212200e6ff6b0f5169d3bdd46da18df2703dafcaede8997c0c01c6deead415cf8ac7264736f6c63430008040033";
