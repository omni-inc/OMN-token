/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Claimable } from "../Claimable";

export class Claimable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Claimable> {
    return super.deploy(overrides || {}) as Promise<Claimable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Claimable {
    return super.attach(address) as Claimable;
  }
  connect(signer: Signer): Claimable__factory {
    return super.connect(signer) as Claimable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Claimable {
    return new Contract(address, _abi, signerOrProvider) as Claimable;
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
    name: "OutOmniWallet",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ValueReceived",
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
    name: "addWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "claimValues",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061179c806100206000396000f3fe6080604052600436106100f75760003560e01c8063a06035101161008a578063d740c48a11610059578063d740c48a146102b0578063f2fde38b146102d0578063f80f5dd5146102f0578063fe575a871461031057600080fd5b8063a06035101461023b578063bb4dade51461025b578063d01f63f51461027b578063d4cd12831461029057600080fd5b8063715018a6116100c6578063715018a6146101bc578063882da331146101d35780638da5cb5b146101f35780639cfe42da1461021b57600080fd5b8063071c0d4a14610130578063338d6c30146101655780633af32abf146101875780635c910a69146101a757600080fd5b3661012b57604051349033907f7e71433ddf847725166244795048ecf3e3f9f35628254ecbf73605666423349390600090a3005b600080fd5b34801561013c57600080fd5b5061015061014b366004611592565b610349565b60405190151581526020015b60405180910390f35b34801561017157600080fd5b5061017a6103d5565b60405161015c9190611632565b34801561019357600080fd5b506101506101a2366004611592565b610437565b3480156101b357600080fd5b5061017a61046e565b3480156101c857600080fd5b506101d16104ce565b005b3480156101df57600080fd5b506101d16101ee366004611592565b610565565b3480156101ff57600080fd5b506033546040516001600160a01b03909116815260200161015c565b34801561022757600080fd5b506101d1610236366004611592565b6106a4565b34801561024757600080fd5b506101d16102563660046115ac565b61083b565b34801561026757600080fd5b506101d1610276366004611592565b610970565b34801561028757600080fd5b5061017a610ab9565b34801561029c57600080fd5b506101506102ab366004611592565b610b19565b3480156102bc57600080fd5b506101506102cb366004611592565b610d7d565b3480156102dc57600080fd5b506101d16102eb366004611592565b610ee0565b3480156102fc57600080fd5b506101d161030b366004611592565b610fe9565b34801561031c57600080fd5b5061015061032b366004611592565b6001600160a01b031660009081526068602052604090205460ff1690565b60006001600160a01b03821661036157506000919050565b60695460005b818110156103cb576069818154811061039057634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03858116911614156103b9575060019392505050565b806103c3816116f5565b915050610367565b5060009392505050565b6060606780548060200260200160405190810160405280929190818152602001828054801561042d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161040f575b5050505050905090565b60006001600160a01b03821661044f57506001919050565b506001600160a01b031660009081526066602052604090205460ff1690565b6060606980548060200260200160405190810160405280929190818152602001828054801561042d576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161040f575050505050905090565b6033546001600160a01b0316331461051b5760405162461bcd60e51b8152602060048201819052602482015260008051602061174783398151915260448201526064015b60405180910390fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b806001600160a01b0381166105aa5760405162461bcd60e51b815260206004820152601f60248201526000805160206117278339815191526044820152606401610512565b6033546001600160a01b031633146105f25760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b6001600160a01b03821660009081526068602052604090205460ff1661065a5760405162461bcd60e51b815260206004820152601d60248201527f4552433230204f4d4e3a2057616c6c657420646f6e27742065786973740000006044820152606401610512565b6001600160a01b038216600081815260686020526040808220805460ff19169055517f0b69455eaff3a6d5dbcb8cea85d607f306d08ce4cdcc8a164b07a877e53a5c019190a25050565b806001600160a01b0381166106e95760405162461bcd60e51b815260206004820152601f60248201526000805160206117278339815191526044820152606401610512565b6001600160a01b038216600090815260686020526040902054829060ff16156107655760405162461bcd60e51b815260206004820152602860248201527f4552433230204f4d4e3a2073656e646572206163636f756e7420697320626c6160448201526718dadb1a5cdd195960c21b6064820152608401610512565b6033546001600160a01b031633146107ad5760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b6001600160a01b038316600081815260686020526040808220805460ff1916600190811790915560678054918201815583527f9787eeb91fe3101235e4a76063c7023ecb40f923f97916639c598592fa30d6ae0180546001600160a01b03191684179055517f8cfdb3b5a1b22bb4b4478f7ae6e8084f22cd24977a5cdedf9812c6dd1ac46e1b9190a2505050565b806001600160a01b0381166108805760405162461bcd60e51b815260206004820152601f60248201526000805160206117278339815191526044820152606401610512565b6001600160a01b038216600090815260686020526040902054829060ff16156108fc5760405162461bcd60e51b815260206004820152602860248201527f4552433230204f4d4e3a2073656e646572206163636f756e7420697320626c6160448201526718dadb1a5cdd195960c21b6064820152608401610512565b6033546001600160a01b031633146109445760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b6001600160a01b0384166109605761095b8361117a565b61096a565b61096a8484611252565b50505050565b806001600160a01b0381166109b55760405162461bcd60e51b815260206004820152601f60248201526000805160206117278339815191526044820152606401610512565b6033546001600160a01b031633146109fd5760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b6001600160a01b03821660009081526066602052604090205460ff16610a6f5760405162461bcd60e51b815260206004820152602160248201527f4552433230204f4d4e3a2057616c6c6574206e6f742077686974656c697374656044820152601960fa1b6064820152608401610512565b6001600160a01b038216600081815260666020526040808220805460ff19169055517f89919c803882ce650255ed0ea805425d31e884f35072c094b9b5d6b5e4453d939190a25050565b6060606580548060200260200160405190810160405280929190818152602001828054801561042d576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161040f575050505050905090565b6000816001600160a01b038116610b605760405162461bcd60e51b815260206004820152601f60248201526000805160206117278339815191526044820152606401610512565b6033546001600160a01b03163314610ba85760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b610bb183610349565b610bfd5760405162461bcd60e51b815260206004820152601d60248201527f4552433230204f4d4e3a2057616c6c657420646f6e27742065786973740000006044820152606401610512565b60695460005b81811015610d705760698181548110610c2c57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0386811691161415610d5e576069610c586001846116b2565b81548110610c7657634e487b7160e01b600052603260045260246000fd5b600091825260209091200154606980546001600160a01b039092169183908110610cb057634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506069805480610cfd57634e487b7160e01b600052603160045260246000fd5b600082815260208120820160001990810180546001600160a01b03191690559091019091556040516001600160a01b038716917fb1ee1f633d2d158b781d9f6893e9a8abba27a0fb87f407d0960bac885a8bd28c91a2600193505050610d77565b80610d68816116f5565b915050610c03565b5060009250505b50919050565b6000816001600160a01b038116610dc45760405162461bcd60e51b815260206004820152601f60248201526000805160206117278339815191526044820152606401610512565b6033546001600160a01b03163314610e0c5760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b610e1583610349565b15610e625760405162461bcd60e51b815260206004820152601c60248201527f4552433230204f4d4e3a2077616c6c657420697320616c7265616479000000006044820152606401610512565b6069805460018101825560009182527f7fb4302e8e91f9110a6554c2c0a24601252c2a42c2220ca988efcfe3999143080180546001600160a01b0319166001600160a01b03861690811790915560405190917f47532b363fb36ec14175c84315bcbc4d5e17157c347fee4ce1f68eaba480065791a250600192915050565b6033546001600160a01b03163314610f285760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b6001600160a01b038116610f8d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610512565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b806001600160a01b03811661102e5760405162461bcd60e51b815260206004820152601f60248201526000805160206117278339815191526044820152606401610512565b6033546001600160a01b031633146110765760405162461bcd60e51b815260206004820181905260248201526000805160206117478339815191526044820152606401610512565b6001600160a01b03821660009081526066602052604090205460ff16156110ed5760405162461bcd60e51b815260206004820152602560248201527f4552433230204f4d4e3a2057616c6c657420616c72656164792077686974656c6044820152641a5cdd195960da1b6064820152608401610512565b6001600160a01b038216600081815260666020526040808220805460ff1916600190811790915560658054918201815583527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b03191684179055517f498772d0a336ce0349224c81490f537c54bff6ee3e80b3fd886da372aada48489190a25050565b60405147906000906001600160a01b0384169083908381818185875af1925050503d80600081146111c7576040519150601f19603f3d011682016040523d82523d6000602084013e6111cc565b606091505b505090508061124d5760405162461bcd60e51b815260206004820152604160248201527f45524332303a20416464726573733a20756e61626c6520746f2073656e64207660448201527f616c75652c20726563697069656e74206d6179206861766520726576657274656064820152601960fa1b608482015260a401610512565b505050565b6040516370a0823160e01b815230600482015282906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561129657600080fd5b505afa1580156112aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ce91906115fe565b604080516001600160a01b03868116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015292935061096a928516918691859161124d91859160009061137f90849084906113fc565b80519091501561124d578080602001905181019061139d91906115de565b61124d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610512565b606061140b8484600085611415565b90505b9392505050565b6060824710156114765760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610512565b843b6114c45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610512565b600080866001600160a01b031685876040516114e09190611616565b60006040518083038185875af1925050503d806000811461151d576040519150601f19603f3d011682016040523d82523d6000602084013e611522565b606091505b509150915061153282828661153d565b979650505050505050565b6060831561154c57508161140e565b82511561155c5782518084602001fd5b8160405162461bcd60e51b8152600401610512919061167f565b80356001600160a01b038116811461158d57600080fd5b919050565b6000602082840312156115a3578081fd5b61140e82611576565b600080604083850312156115be578081fd5b6115c783611576565b91506115d560208401611576565b90509250929050565b6000602082840312156115ef578081fd5b8151801515811461140e578182fd5b60006020828403121561160f578081fd5b5051919050565b600082516116288184602087016116c9565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156116735783516001600160a01b03168352928401929184019160010161164e565b50909695505050505050565b602081526000825180602084015261169e8160408501602087016116c9565b601f01601f19169190910160400192915050565b6000828210156116c4576116c4611710565b500390565b60005b838110156116e45781810151838201526020016116cc565b8381111561096a5750506000910152565b600060001982141561170957611709611710565b5060010190565b634e487b7160e01b600052601160045260246000fdfe4552433230204f4d4e3a204e6f7420416464205a65726f2041646472657373004f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212203e08f454b85d72685134e8e03d543da8636727a599ebe0bb62a85f4fa6ae819664736f6c63430008040033";
