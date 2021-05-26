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
  "0x608060405234801561001057600080fd5b50611319806100206000396000f3fe6080604052600436106100c65760003560e01c8063a851c2e511610074578063e66fa2391161004e578063e66fa23914610270578063f22a0b31146102b2578063f2fde38b146102d2576100c6565b8063a851c2e51461020d578063abd225e114610230578063c632395e14610250576100c6565b8063715018a6116100a5578063715018a614610128578063718494031461013f5780638da5cb5b146101e5576100c6565b8062b61dd9146100cb578063188ec356146100fe57806353462d6b14610111575b600080fd5b3480156100d757600080fd5b506100eb6100e6366004611013565b6102f2565b6040519081526020015b60405180910390f35b34801561010a57600080fd5b50426100eb565b34801561011d57600080fd5b506360c880976100eb565b34801561013457600080fd5b5061013d6103c3565b005b34801561014b57600080fd5b506101a461015a366004611013565b60656020526000908152604090208054600182015460028301546003840154600485015460058601546006909601546001600160a01b039095169593949293919290919060ff1687565b604080516001600160a01b0390981688526020880196909652948601939093526060850191909152608084015260a0830152151560c082015260e0016100f5565b3480156101f157600080fd5b506033546040516001600160a01b0390911681526020016100f5565b61022061021b36600461102d565b61046c565b60405190151581526020016100f5565b34801561023c57600080fd5b5061022061024b366004611114565b610740565b34801561025c57600080fd5b506100eb61026b366004611013565b61076c565b34801561027c57600080fd5b5061029061028b366004611114565b6107a2565b60408051948552602085019390935291830152151560608201526080016100f5565b3480156102be57600080fd5b506100eb6102cd366004611114565b6107df565b3480156102de57600080fd5b5061013d6102ed366004611013565b6108ac565b6001600160a01b0381166000908152606560205260408120600501548190610319906107df565b6001600160a01b0384166000908152606560205260408120600201549192509061034390836109c7565b6001600160a01b0385166000908152606560205260408120600301549192509061036e9083906109d3565b6001600160a01b0386166000908152606560205260409020600101549091508111156103b957505050506001600160a01b0381166000908152606560205260409020600101546103be565b925050505b919050565b6033546001600160a01b031633146104225760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6033546000906001600160a01b031633146104c95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610419565b825184511461052f5760405162461bcd60e51b815260206004820152602c60248201527f4164647265737320616e6420746f74616c416d6f756e7473206c656e6774682060448201526b6d7573742062652073616d6560a01b6064820152608401610419565b6066828154811061055057634e487b7160e01b600052603260045260246000fd5b600091825260209091206003600490920201015460ff166105b35760405162461bcd60e51b815260206004820152601860248201527f56657374696e6720747970652069736e277420666f756e6400000000000000006044820152606401610419565b6000606683815481106105d657634e487b7160e01b600052603260045260246000fd5b60009182526020808320604080516080810182526004909402909101805484526001810154928401929092526002820154908301526003015460ff16151560608201528651909250905b8181101561073157600087828151811061064a57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600087838151811061067657634e487b7160e01b600052603260045260246000fd5b6020026020010151905060006106c18985815181106106a557634e487b7160e01b600052603260045260246000fd5b6020026020010151876000015168056bc75e2d631000006109df565b905060006107048a86815181106106e857634e487b7160e01b600052603260045260246000fd5b6020026020010151886020015168056bc75e2d631000006109df565b60408801519091506107198585858585610b64565b505050505080806107299061129c565b915050610620565b506001925050505b9392505050565b60006360c880974281118061075457508242105b156107635760009150506103be565b50600192915050565b600080610778836102f2565b6001600160a01b038416600090815260656020526040812060010154919250906103b99083610c6d565b606681815481106107b257600080fd5b60009182526020909120600490910201805460018201546002830154600390930154919350919060ff1684565b60006360c88097816107f182856109d3565b905080421015610806576000925050506103be565b60006108124283610c6d565b905060006108238262015180610c79565b90506108646040518060400160405280601081526020017f43616c63756c61746520446966663a200000000000000000000000000000000081525083610c85565b6108a36040518060400160405280601081526020017f43616c63756c61746520446179733a200000000000000000000000000000000081525082610c85565b95945050505050565b6033546001600160a01b031633146109065760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610419565b6001600160a01b03811661096b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610419565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60006107398284611236565b600061073982846111fe565b600080806000198587098587029250828110838203039150508060001415610a195760008411610a0e57600080fd5b508290049050610739565b808411610a2557600080fd5b600084868809808403938111909203919050600085610a458160016109d3565b610a5190600019611255565b16958690049593849004936000819003046001019050610a718184611236565b909317926000610a82876003611236565b6002189050610a918188611236565b610a9c906002611255565b610aa69082611236565b9050610ab28188611236565b610abd906002611255565b610ac79082611236565b9050610ad38188611236565b610ade906002611255565b610ae89082611236565b9050610af48188611236565b610aff906002611255565b610b099082611236565b9050610b158188611236565b610b20906002611255565b610b2a9082611236565b9050610b368188611236565b610b41906002611255565b610b4b9082611236565b9050610b578186611236565b9998505050505050505050565b6001600160a01b0385166000908152606560205260409020600601546360c880979060ff16610b9857610b98308787610cce565b60006040518060e00160405280886001600160a01b03168152602001878152602001868152602001858152602001610bd985856109d390919063ffffffff16565b8152602080820195909552600160409182018190526001600160a01b03998a16600090815260658752829020835181546001600160a01b0319169b169a909a178a5594820151948901949094559283015160028801555050606081015160038601556080810151600486015560a0810151600586015560c001516006909401805460ff191694151594909417909355505050565b60006107398284611255565b60006107398284611216565b610cca8282604051602401610c9b929190611187565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610d25565b5050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d20908490610d46565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000610d9b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e189092919063ffffffff16565b805190915015610d205780806020019051810190610db991906110f4565b610d205760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610419565b6060610e278484600085610e2f565b949350505050565b606082471015610e905760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610419565b843b610ede5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610419565b600080866001600160a01b03168587604051610efa9190611158565b60006040518083038185875af1925050503d8060008114610f37576040519150601f19603f3d011682016040523d82523d6000602084013e610f3c565b606091505b5091509150610f4c828286610f57565b979650505050505050565b60608315610f66575081610739565b825115610f765782518084602001fd5b8160405162461bcd60e51b81526004016104199190611174565b80356001600160a01b03811681146103be57600080fd5b600082601f830112610fb7578081fd5b81356020610fcc610fc7836111da565b6111a9565b8281528181019085830183850287018401881015610fe8578586fd5b855b8581101561100657813584529284019290840190600101610fea565b5090979650505050505050565b600060208284031215611024578081fd5b61073982610f90565b600080600060608486031215611041578182fd5b833567ffffffffffffffff80821115611058578384fd5b818601915086601f83011261106b578384fd5b8135602061107b610fc7836111da565b82815281810190858301838502870184018c1015611097578889fd5b8896505b848710156110c0576110ac81610f90565b83526001969096019591830191830161109b565b50975050870135925050808211156110d6578384fd5b506110e386828701610fa7565b925050604084013590509250925092565b600060208284031215611105578081fd5b81518015158114610739578182fd5b600060208284031215611125578081fd5b5035919050565b6000815180845261114481602086016020860161126c565b601f01601f19169290920160200192915050565b6000825161116a81846020870161126c565b9190910192915050565b600060208252610739602083018461112c565b60006040825261119a604083018561112c565b90508260208301529392505050565b604051601f8201601f1916810167ffffffffffffffff811182821017156111d2576111d26112cd565b604052919050565b600067ffffffffffffffff8211156111f4576111f46112cd565b5060209081020190565b60008219821115611211576112116112b7565b500190565b60008261123157634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611250576112506112b7565b500290565b600082821015611267576112676112b7565b500390565b60005b8381101561128757818101518382015260200161126f565b83811115611296576000848401525b50505050565b60006000198214156112b0576112b06112b7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122002adec8665ed19627d15f742e9f00d6821da916545d95a9d3400833d9df439e364736f6c63430008020033";
