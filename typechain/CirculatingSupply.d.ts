/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CirculatingSupplyInterface extends ethers.utils.Interface {
  functions: {
    "addBlacklist(address)": FunctionFragment;
    "addOmniWallet(address)": FunctionFragment;
    "dropBlacklist(address)": FunctionFragment;
    "dropOmniWallet(address)": FunctionFragment;
    "getBlacklist()": FunctionFragment;
    "getOmniWallets()": FunctionFragment;
    "isBlacklisted(address)": FunctionFragment;
    "isOmniWallet(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBlacklist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addOmniWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "dropBlacklist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "dropOmniWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlacklist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOmniWallets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isBlacklisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isOmniWallet",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBlacklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addOmniWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dropBlacklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dropOmniWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlacklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOmniWallets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBlacklisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOmniWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "InBlacklisted(address)": EventFragment;
    "InOmniWallet(address)": EventFragment;
    "OutBlacklisted(address)": EventFragment;
    "OutOmniWallet(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InBlacklisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InOmniWallet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OutBlacklisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OutOmniWallet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class CirculatingSupply extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CirculatingSupplyInterface;

  functions: {
    addBlacklist(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addBlacklist(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addOmniWallet(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addOmniWallet(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dropBlacklist(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "dropBlacklist(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dropOmniWallet(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "dropOmniWallet(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBlacklist(overrides?: CallOverrides): Promise<[string[]]>;

    "getBlacklist()"(overrides?: CallOverrides): Promise<[string[]]>;

    getOmniWallets(overrides?: CallOverrides): Promise<[string[]]>;

    "getOmniWallets()"(overrides?: CallOverrides): Promise<[string[]]>;

    isBlacklisted(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isBlacklisted(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOmniWallet(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isOmniWallet(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBlacklist(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addBlacklist(address)"(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addOmniWallet(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addOmniWallet(address)"(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dropBlacklist(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "dropBlacklist(address)"(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dropOmniWallet(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "dropOmniWallet(address)"(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBlacklist(overrides?: CallOverrides): Promise<string[]>;

  "getBlacklist()"(overrides?: CallOverrides): Promise<string[]>;

  getOmniWallets(overrides?: CallOverrides): Promise<string[]>;

  "getOmniWallets()"(overrides?: CallOverrides): Promise<string[]>;

  isBlacklisted(_account: string, overrides?: CallOverrides): Promise<boolean>;

  "isBlacklisted(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOmniWallet(_account: string, overrides?: CallOverrides): Promise<boolean>;

  "isOmniWallet(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBlacklist(_account: string, overrides?: CallOverrides): Promise<void>;

    "addBlacklist(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addOmniWallet(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "addOmniWallet(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    dropBlacklist(_account: string, overrides?: CallOverrides): Promise<void>;

    "dropBlacklist(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    dropOmniWallet(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "dropOmniWallet(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getBlacklist(overrides?: CallOverrides): Promise<string[]>;

    "getBlacklist()"(overrides?: CallOverrides): Promise<string[]>;

    getOmniWallets(overrides?: CallOverrides): Promise<string[]>;

    "getOmniWallets()"(overrides?: CallOverrides): Promise<string[]>;

    isBlacklisted(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isBlacklisted(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOmniWallet(_account: string, overrides?: CallOverrides): Promise<boolean>;

    "isOmniWallet(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    InBlacklisted(
      _account: string | null
    ): TypedEventFilter<[string], { _account: string }>;

    InOmniWallet(
      _account: string | null
    ): TypedEventFilter<[string], { _account: string }>;

    OutBlacklisted(
      _account: string | null
    ): TypedEventFilter<[string], { _account: string }>;

    OutOmniWallet(
      _account: string | null
    ): TypedEventFilter<[string], { _account: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addBlacklist(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addBlacklist(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addOmniWallet(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addOmniWallet(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dropBlacklist(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "dropBlacklist(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dropOmniWallet(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "dropOmniWallet(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBlacklist(overrides?: CallOverrides): Promise<BigNumber>;

    "getBlacklist()"(overrides?: CallOverrides): Promise<BigNumber>;

    getOmniWallets(overrides?: CallOverrides): Promise<BigNumber>;

    "getOmniWallets()"(overrides?: CallOverrides): Promise<BigNumber>;

    isBlacklisted(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isBlacklisted(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOmniWallet(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isOmniWallet(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBlacklist(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addBlacklist(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addOmniWallet(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addOmniWallet(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dropBlacklist(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "dropBlacklist(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dropOmniWallet(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "dropOmniWallet(address)"(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBlacklist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getBlacklist()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOmniWallets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOmniWallets()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBlacklisted(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBlacklisted(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOmniWallet(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isOmniWallet(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
