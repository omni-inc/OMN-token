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
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611630806100206000396000f3fe6080604052600436106100fe5760003560e01c8063715018a611610095578063a457c2d711610064578063a457c2d7146102b1578063a9059cbb146102d1578063dd62ed3e146102f1578063f2fde38b14610337578063fcb6c26314610357576100fe565b8063715018a6146102485780638129fc1c1461025f5780638da5cb5b1461027457806395d89b411461029c576100fe565b806323b872dd116100d157806323b872dd146101b6578063313ce567146101d657806339509351146101f257806370a0823114610212576100fe565b806306fdde0314610103578063095ea7b31461012e5780631626ba7e1461015e57806318160ddd14610197575b600080fd5b34801561010f57600080fd5b5061011861036a565b604051610125919061149f565b60405180910390f35b34801561013a57600080fd5b5061014e6101493660046113be565b6103fc565b6040519015158152602001610125565b34801561016a57600080fd5b5061017e6101793660046113e9565b610412565b6040516001600160e01b03199091168152602001610125565b3480156101a357600080fd5b506067545b604051908152602001610125565b3480156101c257600080fd5b5061014e6101d136600461137e565b61052a565b3480156101e257600080fd5b5060405160128152602001610125565b3480156101fe57600080fd5b5061014e61020d3660046113be565b6105db565b34801561021e57600080fd5b506101a861022d366004611307565b6001600160a01b031660009081526065602052604090205490565b34801561025457600080fd5b5061025d610612565b005b34801561026b57600080fd5b5061025d6106b6565b34801561028057600080fd5b506033546040516001600160a01b039091168152602001610125565b3480156102a857600080fd5b5061011861077c565b3480156102bd57600080fd5b5061014e6102cc3660046113be565b61078b565b3480156102dd57600080fd5b5061014e6102ec3660046113be565b610826565b3480156102fd57600080fd5b506101a861030c366004611346565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b34801561034357600080fd5b5061025d610352366004611307565b610833565b61014e6103653660046113be565b61094e565b6060606880546103799061157e565b80601f01602080910402602001604051908101604052809291908181526020018280546103a59061157e565b80156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b5050505050905090565b600061040933848461095a565b50600192915050565b600081516041146104745760405162461bcd60e51b815260206004820152602160248201527f455243313237313a20496e76616c6964207369676e6174757265206c656e67746044820152600d60fb1b60648201526084015b60405180910390fd5b60006104808484610a7e565b9050336001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104bb57600080fd5b505afa1580156104cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f3919061132a565b6001600160a01b0316816001600160a01b031614610519576001600160e01b0319610522565b630b135d3f60e11b5b949350505050565b6000610537848484610b4d565b6001600160a01b0384166000908152606660209081526040808320338452909152902054828110156105bc5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840161046b565b6105d085336105cb8685611567565b61095a565b506001949350505050565b3360008181526066602090815260408083206001600160a01b038716845290915281205490916104099185906105cb90869061154f565b6033546001600160a01b0316331461066c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046b565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b600054610100900460ff16806106cf575060005460ff16155b6106eb5760405162461bcd60e51b815260040161046b906114f2565b600054610100900460ff16158015610716576000805460ff1961ff0019909116610100171660011790555b61075f6040518060400160405280600b81526020016a22a9219918102a37b5b2b760a91b815250604051806040016040528060048152602001630ae8aa8960e31b815250610d25565b610767610dae565b8015610779576000805461ff00191690555b50565b6060606980546103799061157e565b3360009081526066602090815260408083206001600160a01b03861684529091528120548281101561080d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161046b565b61081c33856105cb8685611567565b5060019392505050565b6000610409338484610b4d565b6033546001600160a01b0316331461088d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046b565b6001600160a01b0381166108f25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161046b565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60006104098383610e1e565b6001600160a01b0383166109bc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161046b565b6001600160a01b038216610a1d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161046b565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600080600080845160411415610aa85750505060208201516040830151606084015160001a610b37565b845160401415610aef5750505060408201516020830151907f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169060ff1c601b01610b37565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161046b565b610b4386828585610efd565b9695505050505050565b6001600160a01b038316610bb15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161046b565b6001600160a01b038216610c135760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161046b565b6001600160a01b03831660009081526065602052604090205481811015610c8b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161046b565b610c958282611567565b6001600160a01b038086166000908152606560205260408082209390935590851681529081208054849290610ccb90849061154f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d1791815260200190565b60405180910390a350505050565b600054610100900460ff1680610d3e575060005460ff16155b610d5a5760405162461bcd60e51b815260040161046b906114f2565b600054610100900460ff16158015610d85576000805460ff1961ff0019909116610100171660011790555b610d8d6110a6565b610d978383611119565b8015610da9576000805461ff00191690555b505050565b600054610100900460ff1680610dc7575060005460ff16155b610de35760405162461bcd60e51b815260040161046b906114f2565b600054610100900460ff16158015610e0e576000805460ff1961ff0019909116610100171660011790555b610e166110a6565b6107676111b7565b6001600160a01b038216610e745760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161046b565b8060676000828254610e86919061154f565b90915550506001600160a01b03821660009081526065602052604081208054839290610eb390849061154f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610f7a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161046b565b8360ff16601b1480610f8f57508360ff16601c145b610fe65760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161046b565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa15801561103a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661109d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161046b565b95945050505050565b600054610100900460ff16806110bf575060005460ff16155b6110db5760405162461bcd60e51b815260040161046b906114f2565b600054610100900460ff16158015610767576000805460ff1961ff0019909116610100171660011790558015610779576000805461ff001916905550565b600054610100900460ff1680611132575060005460ff16155b61114e5760405162461bcd60e51b815260040161046b906114f2565b600054610100900460ff16158015611179576000805460ff1961ff0019909116610100171660011790555b825161118c90606890602086019061126e565b5081516111a090606990602085019061126e565b508015610da9576000805461ff0019169055505050565b600054610100900460ff16806111d0575060005460ff16155b6111ec5760405162461bcd60e51b815260040161046b906114f2565b600054610100900460ff16158015611217576000805460ff1961ff0019909116610100171660011790555b603380546001600160a01b0319163390811790915560405181906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610779576000805461ff001916905550565b82805461127a9061157e565b90600052602060002090601f01602090048101928261129c57600085556112e2565b82601f106112b557805160ff19168380011785556112e2565b828001600101855582156112e2579182015b828111156112e25782518255916020019190600101906112c7565b506112ee9291506112f2565b5090565b5b808211156112ee57600081556001016112f3565b600060208284031215611318578081fd5b8135611323816115e5565b9392505050565b60006020828403121561133b578081fd5b8151611323816115e5565b60008060408385031215611358578081fd5b8235611363816115e5565b91506020830135611373816115e5565b809150509250929050565b600080600060608486031215611392578081fd5b833561139d816115e5565b925060208401356113ad816115e5565b929592945050506040919091013590565b600080604083850312156113d0578182fd5b82356113db816115e5565b946020939093013593505050565b600080604083850312156113fb578182fd5b82359150602083013567ffffffffffffffff80821115611419578283fd5b818501915085601f83011261142c578283fd5b81358181111561143e5761143e6115cf565b604051601f8201601f19908116603f01168101908382118183101715611466576114666115cf565b8160405282815288602084870101111561147e578586fd5b82602086016020830137856020848301015280955050505050509250929050565b6000602080835283518082850152825b818110156114cb578581018301518582016040015282016114af565b818111156114dc5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201527f647920696e697469616c697a6564000000000000000000000000000000000000606082015260800190565b60008219821115611562576115626115b9565b500190565b600082821015611579576115796115b9565b500390565b60028104600182168061159257607f821691505b602082108114156115b357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461077957600080fdfea2646970667358221220ee3a26c69ddc8013ddae43ce80647402a79db2c915ea88c7e6782c388747e70264736f6c63430008020033";
