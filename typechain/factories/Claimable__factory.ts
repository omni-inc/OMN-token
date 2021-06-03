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
  "0x608060405234801561001057600080fd5b50610929806100206000396000f3fe6080604052600436106100435760003560e01c8063715018a61461007c5780638da5cb5b14610093578063a0603510146100bf578063f2fde38b146100df57610077565b3661007757604051349033907f7e71433ddf847725166244795048ecf3e3f9f35628254ecbf73605666423349390600090a3005b600080fd5b34801561008857600080fd5b506100916100ff565b005b34801561009f57600080fd5b50603354604080516001600160a01b039092168252519081900360200190f35b3480156100cb57600080fd5b506100916100da36600461080e565b6101b5565b3480156100eb57600080fd5b506100916100fa3660046107f4565b61029d565b6033546001600160a01b0316331461015e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36033805473ffffffffffffffffffffffffffffffffffffffff19169055565b806001600160a01b0381166102185760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610155565b6033546001600160a01b031633146102725760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610155565b6001600160a01b03831661028e57610289826103c5565b610298565b6102988383610498565b505050565b6033546001600160a01b031633146102f75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610155565b6001600160a01b03811661035c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610155565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36033805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60405147906000906001600160a01b0384169083908381818185875af1925050503d8060008114610412576040519150601f19603f3d011682016040523d82523d6000602084013e610417565b606091505b50509050806102985760405162461bcd60e51b815260206004820152604160248201527f45524332303a20416464726573733a20756e61626c6520746f2073656e64207660448201527f616c75652c20726563697069656e74206d6179206861766520726576657274656064820152601960fa1b608482015260a401610155565b6040516370a0823160e01b815230600482015282906000906001600160a01b038316906370a082319060240160206040518083038186803b1580156104dc57600080fd5b505afa1580156104f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105149190610860565b905061052a6001600160a01b0383168483610530565b50505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610298928692916000916105d5918516908490610652565b80519091501561029857808060200190518101906105f39190610840565b6102985760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610155565b6060610661848460008561066b565b90505b9392505050565b6060824710156106cc5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610155565b6106d58561079a565b6107215760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610155565b600080866001600160a01b0316858760405161073d9190610878565b60006040518083038185875af1925050503d806000811461077a576040519150601f19603f3d011682016040523d82523d6000602084013e61077f565b606091505b509150915061078f8282866107a4565b979650505050505050565b803b15155b919050565b606083156107b3575081610664565b8251156107c35782518084602001fd5b8160405162461bcd60e51b81526004016101559190610894565b80356001600160a01b038116811461079f57600080fd5b600060208284031215610805578081fd5b610664826107dd565b60008060408385031215610820578081fd5b610829836107dd565b9150610837602084016107dd565b90509250929050565b600060208284031215610851578081fd5b81518015158114610664578182fd5b600060208284031215610871578081fd5b5051919050565b6000825161088a8184602087016108c7565b9190910192915050565b60006020825282518060208401526108b38160408501602087016108c7565b601f01601f19169190910160400192915050565b60005b838110156108e25781810151838201526020016108ca565b8381111561052a575050600091015256fea264697066735822122054cdef9478481f6ec824229ca44e00404ee6a77c5c23f7065ecccd66d8894ee464736f6c63430008020033";
