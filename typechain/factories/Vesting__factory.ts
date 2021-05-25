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
        name: "",
        type: "address",
      },
    ],
    name: "frozenWallets",
    outputs: [
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
      {
        internalType: "uint256",
        name: "startDay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "afterDays",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "scheduled",
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
  "0x608060405234801561001057600080fd5b506112b0806100206000396000f3fe6080604052600436106100c65760003560e01c8063a851c2e511610074578063e66fa2391161004e578063e66fa23914610270578063f22a0b31146102b2578063f2fde38b146102d257600080fd5b8063a851c2e51461020d578063abd225e114610230578063c632395e1461025057600080fd5b8063715018a6116100a5578063715018a614610128578063718494031461013f5780638da5cb5b146101e557600080fd5b8062b61dd9146100cb578063188ec356146100fe57806353462d6b14610111575b600080fd5b3480156100d757600080fd5b506100eb6100e6366004610fa7565b6102f2565b6040519081526020015b60405180910390f35b34801561010a57600080fd5b50426100eb565b34801561011d57600080fd5b506360c880976100eb565b34801561013457600080fd5b5061013d6103be565b005b34801561014b57600080fd5b506101a461015a366004610fa7565b60656020526000908152604090208054600182015460028301546003840154600485015460058601546006909601546001600160a01b039095169593949293919290919060ff1687565b604080516001600160a01b0390981688526020880196909652948601939093526060850191909152608084015260a0830152151560c082015260e0016100f5565b3480156101f157600080fd5b506033546040516001600160a01b0390911681526020016100f5565b61022061021b366004610fc1565b610467565b60405190151581526020016100f5565b34801561023c57600080fd5b5061022061024b3660046110ab565b61073b565b34801561025c57600080fd5b506100eb61026b366004610fa7565b610766565b34801561027c57600080fd5b5061029061028b3660046110ab565b61079c565b60408051948552602085019390935291830152151560608201526080016100f5565b3480156102be57600080fd5b506100eb6102cd3660046110ab565b6107d9565b3480156102de57600080fd5b5061013d6102ed366004610fa7565b6108a5565b6001600160a01b0381166000908152606560205260408120600501548190610319906107d9565b6001600160a01b0384166000908152606560205260408120600201549192509061034390836109c0565b6001600160a01b0385166000908152606560205260408120600301549192509061036e9083906109cc565b6001600160a01b0386166000908152606560205260409020600101549091508111156103b657505050506001600160a01b031660009081526065602052604090206001015490565b949350505050565b6033546001600160a01b0316331461041d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6033546000906001600160a01b031633146104c45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610414565b825184511461052a5760405162461bcd60e51b815260206004820152602c60248201527f4164647265737320616e6420746f74616c416d6f756e7473206c656e6774682060448201526b6d7573742062652073616d6560a01b6064820152608401610414565b6066828154811061054b57634e487b7160e01b600052603260045260246000fd5b600091825260209091206003600490920201015460ff166105ae5760405162461bcd60e51b815260206004820152601860248201527f56657374696e6720747970652069736e277420666f756e6400000000000000006044820152606401610414565b6000606683815481106105d157634e487b7160e01b600052603260045260246000fd5b60009182526020808320604080516080810182526004909402909101805484526001810154928401929092526002820154908301526003015460ff16151560608201528651909250905b8181101561072c57600087828151811061064557634e487b7160e01b600052603260045260246000fd5b60200260200101519050600087838151811061067157634e487b7160e01b600052603260045260246000fd5b6020026020010151905060006106bc8985815181106106a057634e487b7160e01b600052603260045260246000fd5b6020026020010151876000015168056bc75e2d631000006109d8565b905060006106ff8a86815181106106e357634e487b7160e01b600052603260045260246000fd5b6020026020010151886020015168056bc75e2d631000006109d8565b60408801519091506107148585858585610b5d565b5050505050808061072490611233565b91505061061b565b506001925050505b9392505050565b60006360c880974281118061074f57508242105b1561075d5750600092915050565b50600192915050565b600080610772836102f2565b6001600160a01b038416600090815260656020526040812060010154919250906103b69083610c66565b606681815481106107ac57600080fd5b60009182526020909120600490910201805460018201546002830154600390930154919350919060ff1684565b60006360c88097816107eb82856109cc565b9050804210156107ff575060009392505050565b600061080b4283610c66565b9050600061081c8262015180610c72565b905061085d6040518060400160405280601081526020017f43616c63756c61746520446966663a200000000000000000000000000000000081525083610c7e565b61089c6040518060400160405280601081526020017f43616c63756c61746520446179733a200000000000000000000000000000000081525082610c7e565b95945050505050565b6033546001600160a01b031633146108ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610414565b6001600160a01b0381166109645760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610414565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b600061073482846111cd565b60006107348284611195565b600080806000198587098587029250828110838203039150508060001415610a125760008411610a0757600080fd5b508290049050610734565b808411610a1e57600080fd5b600084868809808403938111909203919050600085610a3e8160016109cc565b610a4a906000196111ec565b16958690049593849004936000819003046001019050610a6a81846111cd565b909317926000610a7b8760036111cd565b6002189050610a8a81886111cd565b610a959060026111ec565b610a9f90826111cd565b9050610aab81886111cd565b610ab69060026111ec565b610ac090826111cd565b9050610acc81886111cd565b610ad79060026111ec565b610ae190826111cd565b9050610aed81886111cd565b610af89060026111ec565b610b0290826111cd565b9050610b0e81886111cd565b610b199060026111ec565b610b2390826111cd565b9050610b2f81886111cd565b610b3a9060026111ec565b610b4490826111cd565b9050610b5081866111cd565b9998505050505050505050565b6001600160a01b0385166000908152606560205260409020600601546360c880979060ff16610b9157610b91308787610cc7565b60006040518060e00160405280886001600160a01b03168152602001878152602001868152602001858152602001610bd285856109cc90919063ffffffff16565b8152602080820195909552600160409182018190526001600160a01b03998a16600090815260658752829020835181546001600160a01b0319169b169a909a178a5594820151948901949094559283015160028801555050606081015160038601556080810151600486015560a0810151600586015560c001516006909401805460ff191694151594909417909355505050565b600061073482846111ec565b600061073482846111ad565b610cc38282604051602401610c9492919061111e565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610d1e565b5050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d19908490610d3f565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000610d94826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e119092919063ffffffff16565b805190915015610d195780806020019051810190610db2919061108b565b610d195760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610414565b60606103b6848460008585843b610e6a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610414565b600080866001600160a01b03168587604051610e8691906110ef565b60006040518083038185875af1925050503d8060008114610ec3576040519150601f19603f3d011682016040523d82523d6000602084013e610ec8565b606091505b5091509150610ed8828286610ee3565b979650505050505050565b60608315610ef2575081610734565b825115610f025782518084602001fd5b8160405162461bcd60e51b8152600401610414919061110b565b80356001600160a01b0381168114610f3357600080fd5b919050565b600082601f830112610f48578081fd5b81356020610f5d610f5883611171565b611140565b80838252828201915082860187848660051b8901011115610f7c578586fd5b855b85811015610f9a57813584529284019290840190600101610f7e565b5090979650505050505050565b600060208284031215610fb8578081fd5b61073482610f1c565b600080600060608486031215610fd5578182fd5b833567ffffffffffffffff80821115610fec578384fd5b818601915086601f830112610fff578384fd5b8135602061100f610f5883611171565b8083825282820191508286018b848660051b890101111561102e578889fd5b8896505b848710156110575761104381610f1c565b835260019690960195918301918301611032565b509750508701359250508082111561106d578384fd5b5061107a86828701610f38565b925050604084013590509250925092565b60006020828403121561109c578081fd5b81518015158114610734578182fd5b6000602082840312156110bc578081fd5b5035919050565b600081518084526110db816020860160208601611203565b601f01601f19169290920160200192915050565b60008251611101818460208701611203565b9190910192915050565b60208152600061073460208301846110c3565b60408152600061113160408301856110c3565b90508260208301529392505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561116957611169611264565b604052919050565b600067ffffffffffffffff82111561118b5761118b611264565b5060051b60200190565b600082198211156111a8576111a861124e565b500190565b6000826111c857634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156111e7576111e761124e565b500290565b6000828210156111fe576111fe61124e565b500390565b60005b8381101561121e578181015183820152602001611206565b8381111561122d576000848401525b50505050565b60006000198214156112475761124761124e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212205323d240a4dfbd5f40f2a1a89f9f159922ac81dcd6d24a7a2e35772f446825ed64736f6c63430008040033";
