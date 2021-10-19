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
  "0x608060405234801561001057600080fd5b506113c4806100206000396000f3fe6080604052600436106100cb5760003560e01c80639cfe42da11610074578063d740c48a1161004e578063d740c48a1461022f578063f2fde38b1461024f578063fe575a871461026f57600080fd5b80639cfe42da146101cf578063a0603510146101ef578063d4cd12831461020f57600080fd5b8063715018a6116100a5578063715018a614610170578063882da331146101875780638da5cb5b146101a757600080fd5b8063071c0d4a14610104578063338d6c30146101395780635c910a691461015b57600080fd5b366100ff57604051349033907f7e71433ddf847725166244795048ecf3e3f9f35628254ecbf73605666423349390600090a3005b600080fd5b34801561011057600080fd5b5061012461011f3660046111da565b6102a8565b60405190151581526020015b60405180910390f35b34801561014557600080fd5b5061014e610334565b604051610130919061127a565b34801561016757600080fd5b5061014e610396565b34801561017c57600080fd5b506101856103f6565b005b34801561019357600080fd5b506101856101a23660046111da565b61048d565b3480156101b357600080fd5b506033546040516001600160a01b039091168152602001610130565b3480156101db57600080fd5b506101856101ea3660046111da565b6105de565b3480156101fb57600080fd5b5061018561020a3660046111f4565b610787565b34801561021b57600080fd5b5061012461022a3660046111da565b6108ce565b34801561023b57600080fd5b5061012461024a3660046111da565b610b44565b34801561025b57600080fd5b5061018561026a3660046111da565b610cb9565b34801561027b57600080fd5b5061012461028a3660046111da565b6001600160a01b031660009081526066602052604090205460ff1690565b60006001600160a01b0382166102c057506000919050565b60675460005b8181101561032a57606781815481106102ef57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0385811691161415610318575060019392505050565b806103228161133d565b9150506102c6565b5060009392505050565b6060606580548060200260200160405190810160405280929190818152602001828054801561038c57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161036e575b5050505050905090565b6060606780548060200260200160405190810160405280929190818152602001828054801561038c576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161036e575050505050905090565b6033546001600160a01b031633146104435760405162461bcd60e51b8152602060048201819052602482015260008051602061136f83398151915260448201526064015b60405180910390fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b806001600160a01b0381166104e45760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f204164647265737300604482015260640161043a565b6033546001600160a01b0316331461052c5760405162461bcd60e51b8152602060048201819052602482015260008051602061136f833981519152604482015260640161043a565b6001600160a01b03821660009081526066602052604090205460ff166105945760405162461bcd60e51b815260206004820152601d60248201527f4552433230204f4d4e3a2057616c6c657420646f6e2774206578697374000000604482015260640161043a565b6001600160a01b038216600081815260666020526040808220805460ff19169055517f0b69455eaff3a6d5dbcb8cea85d607f306d08ce4cdcc8a164b07a877e53a5c019190a25050565b806001600160a01b0381166106355760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f204164647265737300604482015260640161043a565b6001600160a01b038216600090815260666020526040902054829060ff16156106b15760405162461bcd60e51b815260206004820152602860248201527f4552433230204f4d4e3a2073656e646572206163636f756e7420697320626c6160448201526718dadb1a5cdd195960c21b606482015260840161043a565b6033546001600160a01b031633146106f95760405162461bcd60e51b8152602060048201819052602482015260008051602061136f833981519152604482015260640161043a565b6001600160a01b038316600081815260666020526040808220805460ff1916600190811790915560658054918201815583527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b03191684179055517f8cfdb3b5a1b22bb4b4478f7ae6e8084f22cd24977a5cdedf9812c6dd1ac46e1b9190a2505050565b806001600160a01b0381166107de5760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f204164647265737300604482015260640161043a565b6001600160a01b038216600090815260666020526040902054829060ff161561085a5760405162461bcd60e51b815260206004820152602860248201527f4552433230204f4d4e3a2073656e646572206163636f756e7420697320626c6160448201526718dadb1a5cdd195960c21b606482015260840161043a565b6033546001600160a01b031633146108a25760405162461bcd60e51b8152602060048201819052602482015260008051602061136f833981519152604482015260640161043a565b6001600160a01b0384166108be576108b983610dc2565b6108c8565b6108c88484610e9a565b50505050565b6000816001600160a01b0381166109275760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f204164647265737300604482015260640161043a565b6033546001600160a01b0316331461096f5760405162461bcd60e51b8152602060048201819052602482015260008051602061136f833981519152604482015260640161043a565b610978836102a8565b6109c45760405162461bcd60e51b815260206004820152601d60248201527f4552433230204f4d4e3a2057616c6c657420646f6e2774206578697374000000604482015260640161043a565b60675460005b81811015610b3757606781815481106109f357634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0386811691161415610b25576067610a1f6001846112fa565b81548110610a3d57634e487b7160e01b600052603260045260246000fd5b600091825260209091200154606780546001600160a01b039092169183908110610a7757634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506067805480610ac457634e487b7160e01b600052603160045260246000fd5b600082815260208120820160001990810180546001600160a01b03191690559091019091556040516001600160a01b038716917fb1ee1f633d2d158b781d9f6893e9a8abba27a0fb87f407d0960bac885a8bd28c91a2600193505050610b3e565b80610b2f8161133d565b9150506109ca565b5060009250505b50919050565b6000816001600160a01b038116610b9d5760405162461bcd60e51b815260206004820152601f60248201527f4552433230204f4d4e3a204e6f7420416464205a65726f204164647265737300604482015260640161043a565b6033546001600160a01b03163314610be55760405162461bcd60e51b8152602060048201819052602482015260008051602061136f833981519152604482015260640161043a565b610bee836102a8565b15610c3b5760405162461bcd60e51b815260206004820152601c60248201527f4552433230204f4d4e3a2077616c6c657420697320616c726561647900000000604482015260640161043a565b6067805460018101825560009182527f9787eeb91fe3101235e4a76063c7023ecb40f923f97916639c598592fa30d6ae0180546001600160a01b0319166001600160a01b03861690811790915560405190917f47532b363fb36ec14175c84315bcbc4d5e17157c347fee4ce1f68eaba480065791a250600192915050565b6033546001600160a01b03163314610d015760405162461bcd60e51b8152602060048201819052602482015260008051602061136f833981519152604482015260640161043a565b6001600160a01b038116610d665760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161043a565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60405147906000906001600160a01b0384169083908381818185875af1925050503d8060008114610e0f576040519150601f19603f3d011682016040523d82523d6000602084013e610e14565b606091505b5050905080610e955760405162461bcd60e51b815260206004820152604160248201527f45524332303a20416464726573733a20756e61626c6520746f2073656e64207660448201527f616c75652c20726563697069656e74206d6179206861766520726576657274656064820152601960fa1b608482015260a40161043a565b505050565b6040516370a0823160e01b815230600482015282906000906001600160a01b038316906370a082319060240160206040518083038186803b158015610ede57600080fd5b505afa158015610ef2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f169190611246565b604080516001600160a01b03868116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401529293506108c89285169186918591610e95918591600090610fc79084908490611044565b805190915015610e955780806020019051810190610fe59190611226565b610e955760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161043a565b6060611053848460008561105d565b90505b9392505050565b6060824710156110be5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161043a565b843b61110c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161043a565b600080866001600160a01b03168587604051611128919061125e565b60006040518083038185875af1925050503d8060008114611165576040519150601f19603f3d011682016040523d82523d6000602084013e61116a565b606091505b509150915061117a828286611185565b979650505050505050565b60608315611194575081611056565b8251156111a45782518084602001fd5b8160405162461bcd60e51b815260040161043a91906112c7565b80356001600160a01b03811681146111d557600080fd5b919050565b6000602082840312156111eb578081fd5b611056826111be565b60008060408385031215611206578081fd5b61120f836111be565b915061121d602084016111be565b90509250929050565b600060208284031215611237578081fd5b81518015158114611056578182fd5b600060208284031215611257578081fd5b5051919050565b60008251611270818460208701611311565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156112bb5783516001600160a01b031683529284019291840191600101611296565b50909695505050505050565b60208152600082518060208401526112e6816040850160208701611311565b601f01601f19169190910160400192915050565b60008282101561130c5761130c611358565b500390565b60005b8381101561132c578181015183820152602001611314565b838111156108c85750506000910152565b600060001982141561135157611351611358565b5060010190565b634e487b7160e01b600052601160045260246000fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122066964aa71fb6759ae71e461fbfdf28641fdff2a6a48547a3720b7148e058047164736f6c63430008040033";
