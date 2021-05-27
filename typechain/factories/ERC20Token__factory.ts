/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20Token } from "../ERC20Token";

export class ERC20Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Token> {
    return super.deploy(overrides || {}) as Promise<ERC20Token>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Token {
    return super.attach(address) as ERC20Token;
  }
  connect(signer: Signer): ERC20Token__factory {
    return super.connect(signer) as ERC20Token__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Token {
    return new Contract(address, _abi, signerOrProvider) as ERC20Token;
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
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintToWallet",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ec8806100206000396000f3fe6080604052600436106100d25760003560e01c806370a082311161007f578063a457c2d711610059578063a457c2d7146101f9578063a9059cbb14610219578063dd62ed3e14610239578063fcb6c2631461027f576100d2565b806370a08231146101ad5780638129fc1c146101cd57806395d89b41146101e4576100d2565b806323b872dd116100b057806323b872dd14610151578063313ce56714610171578063395093511461018d576100d2565b806306fdde03146100d7578063095ea7b31461010257806318160ddd14610132575b600080fd5b3480156100e357600080fd5b506100ec610292565b6040516100f99190610dbf565b60405180910390f35b34801561010e57600080fd5b5061012261011d366004610d96565b610324565b60405190151581526020016100f9565b34801561013e57600080fd5b506035545b6040519081526020016100f9565b34801561015d57600080fd5b5061012261016c366004610d5b565b61033a565b34801561017d57600080fd5b50604051601281526020016100f9565b34801561019957600080fd5b506101226101a8366004610d96565b6103f0565b3480156101b957600080fd5b506101436101c8366004610d08565b610427565b3480156101d957600080fd5b506101e2610446565b005b3480156101f057600080fd5b506100ec61054b565b34801561020557600080fd5b50610122610214366004610d96565b61055a565b34801561022557600080fd5b50610122610234366004610d96565b6105f5565b34801561024557600080fd5b50610143610254366004610d29565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b61012261028d366004610d96565b610602565b6060603680546102a190610e41565b80601f01602080910402602001604051908101604052809291908181526020018280546102cd90610e41565b801561031a5780601f106102ef5761010080835404028352916020019161031a565b820191906000526020600020905b8154815290600101906020018083116102fd57829003601f168201915b5050505050905090565b600061033133848461060e565b50600192915050565b6000610347848484610732565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156103d15760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103e585336103e08685610e2a565b61060e565b506001949350505050565b3360008181526034602090815260408083206001600160a01b038716845290915281205490916103319185906103e0908690610e12565b6001600160a01b0381166000908152603360205260409020545b919050565b600054610100900460ff168061045f575060005460ff16155b6104c25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103c8565b600054610100900460ff161580156104ed576000805460ff1961ff0019909116610100171660011790555b6105366040518060400160405280600b81526020016a22a9219918102a37b5b2b760a91b815250604051806040016040528060048152602001630ae8aa8960e31b81525061090a565b8015610548576000805461ff00191690555b50565b6060603780546102a190610e41565b3360009081526034602090815260408083206001600160a01b0386168452909152812054828110156105dc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103c8565b6105eb33856103e08685610e2a565b5060019392505050565b6000610331338484610732565b600061033183836109da565b6001600160a01b0383166106705760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103c8565b6001600160a01b0382166106d15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103c8565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166107965760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103c8565b6001600160a01b0382166107f85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103c8565b6001600160a01b038316600090815260336020526040902054818110156108705760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103c8565b61087a8282610e2a565b6001600160a01b0380861660009081526033602052604080822093909355908516815290812080548492906108b0908490610e12565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108fc91815260200190565b60405180910390a350505050565b600054610100900460ff1680610923575060005460ff16155b6109865760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103c8565b600054610100900460ff161580156109b1576000805460ff1961ff0019909116610100171660011790555b6109b9610ab9565b6109c38383610b73565b80156109d5576000805461ff00191690555b505050565b6001600160a01b038216610a305760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103c8565b8060356000828254610a429190610e12565b90915550506001600160a01b03821660009081526033602052604081208054839290610a6f908490610e12565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff1680610ad2575060005460ff16155b610b355760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103c8565b600054610100900460ff16158015610536576000805460ff1961ff0019909116610100171660011790558015610548576000805461ff001916905550565b600054610100900460ff1680610b8c575060005460ff16155b610bef5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103c8565b600054610100900460ff16158015610c1a576000805460ff1961ff0019909116610100171660011790555b8251610c2d906036906020860190610c58565b508151610c41906037906020850190610c58565b5080156109d5576000805461ff0019169055505050565b828054610c6490610e41565b90600052602060002090601f016020900481019282610c865760008555610ccc565b82601f10610c9f57805160ff1916838001178555610ccc565b82800160010185558215610ccc579182015b82811115610ccc578251825591602001919060010190610cb1565b50610cd8929150610cdc565b5090565b5b80821115610cd85760008155600101610cdd565b80356001600160a01b038116811461044157600080fd5b600060208284031215610d19578081fd5b610d2282610cf1565b9392505050565b60008060408385031215610d3b578081fd5b610d4483610cf1565b9150610d5260208401610cf1565b90509250929050565b600080600060608486031215610d6f578081fd5b610d7884610cf1565b9250610d8660208501610cf1565b9150604084013590509250925092565b60008060408385031215610da8578182fd5b610db183610cf1565b946020939093013593505050565b6000602080835283518082850152825b81811015610deb57858101830151858201604001528201610dcf565b81811115610dfc5783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610e2557610e25610e7c565b500190565b600082821015610e3c57610e3c610e7c565b500390565b600281046001821680610e5557607f821691505b60208210811415610e7657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122097db2dc2b14704698d615f11523bce0ceaa56aba846dba2112c48aa7b60906e364736f6c63430008020033";
