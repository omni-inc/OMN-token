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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface VestingInterface extends ethers.utils.Interface {
  functions: {
    "addAllocations(address[],uint256[],uint256)": FunctionFragment;
    "frozenWallets(address)": FunctionFragment;
    "getDays(uint256)": FunctionFragment;
    "getReleaseTime()": FunctionFragment;
    "getRestAmount(address)": FunctionFragment;
    "getTimestamp()": FunctionFragment;
    "getTransferableAmount(address)": FunctionFragment;
    "isStarted(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vestingTypes(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAllocations",
    values: [string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "frozenWallets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDays",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReleaseTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRestAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransferableAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isStarted",
    values: [BigNumberish]
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
  encodeFunctionData(
    functionFragment: "vestingTypes",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAllocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "frozenWallets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDays", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReleaseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRestAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransferableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isStarted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingTypes",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Vesting extends Contract {
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

  interface: VestingInterface;

  functions: {
    addAllocations(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAllocations(address[],uint256[],uint256)"(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    frozenWallets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        wallet: string;
        totalAmount: BigNumber;
        dailyAmount: BigNumber;
        initialAmount: BigNumber;
        startDay: BigNumber;
        afterDays: BigNumber;
        scheduled: boolean;
      }
    >;

    "frozenWallets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        wallet: string;
        totalAmount: BigNumber;
        dailyAmount: BigNumber;
        initialAmount: BigNumber;
        startDay: BigNumber;
        afterDays: BigNumber;
        scheduled: boolean;
      }
    >;

    getDays(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getDays(uint256)"(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReleaseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getReleaseTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRestAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRestAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTransferableAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTransferableAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isStarted(
      startDay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isStarted(uint256)"(
      startDay: BigNumberish,
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

    vestingTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        dailyRate: BigNumber;
        initialRate: BigNumber;
        afterDays: BigNumber;
        vesting: boolean;
      }
    >;

    "vestingTypes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        dailyRate: BigNumber;
        initialRate: BigNumber;
        afterDays: BigNumber;
        vesting: boolean;
      }
    >;
  };

  addAllocations(
    addresses: string[],
    totalAmounts: BigNumberish[],
    vestingTypeIndex: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAllocations(address[],uint256[],uint256)"(
    addresses: string[],
    totalAmounts: BigNumberish[],
    vestingTypeIndex: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  frozenWallets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      wallet: string;
      totalAmount: BigNumber;
      dailyAmount: BigNumber;
      initialAmount: BigNumber;
      startDay: BigNumber;
      afterDays: BigNumber;
      scheduled: boolean;
    }
  >;

  "frozenWallets(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      wallet: string;
      totalAmount: BigNumber;
      dailyAmount: BigNumber;
      initialAmount: BigNumber;
      startDay: BigNumber;
      afterDays: BigNumber;
      scheduled: boolean;
    }
  >;

  getDays(
    afterDays: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getDays(uint256)"(
    afterDays: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

  "getReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  getRestAmount(sender: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getRestAmount(address)"(
    sender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "getTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTransferableAmount(
    sender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTransferableAmount(address)"(
    sender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isStarted(
    startDay: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isStarted(uint256)"(
    startDay: BigNumberish,
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

  vestingTypes(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, boolean] & {
      dailyRate: BigNumber;
      initialRate: BigNumber;
      afterDays: BigNumber;
      vesting: boolean;
    }
  >;

  "vestingTypes(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, boolean] & {
      dailyRate: BigNumber;
      initialRate: BigNumber;
      afterDays: BigNumber;
      vesting: boolean;
    }
  >;

  callStatic: {
    addAllocations(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "addAllocations(address[],uint256[],uint256)"(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    frozenWallets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        wallet: string;
        totalAmount: BigNumber;
        dailyAmount: BigNumber;
        initialAmount: BigNumber;
        startDay: BigNumber;
        afterDays: BigNumber;
        scheduled: boolean;
      }
    >;

    "frozenWallets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        wallet: string;
        totalAmount: BigNumber;
        dailyAmount: BigNumber;
        initialAmount: BigNumber;
        startDay: BigNumber;
        afterDays: BigNumber;
        scheduled: boolean;
      }
    >;

    getDays(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDays(uint256)"(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    "getReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRestAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRestAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTransferableAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTransferableAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStarted(
      startDay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isStarted(uint256)"(
      startDay: BigNumberish,
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

    vestingTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        dailyRate: BigNumber;
        initialRate: BigNumber;
        afterDays: BigNumber;
        vesting: boolean;
      }
    >;

    "vestingTypes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        dailyRate: BigNumber;
        initialRate: BigNumber;
        afterDays: BigNumber;
        vesting: boolean;
      }
    >;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addAllocations(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addAllocations(address[],uint256[],uint256)"(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    frozenWallets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "frozenWallets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDays(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDays(uint256)"(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    "getReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRestAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRestAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTransferableAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTransferableAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStarted(
      startDay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isStarted(uint256)"(
      startDay: BigNumberish,
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

    vestingTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vestingTypes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAllocations(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAllocations(address[],uint256[],uint256)"(
      addresses: string[],
      totalAmounts: BigNumberish[],
      vestingTypeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    frozenWallets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "frozenWallets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDays(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDays(uint256)"(
      afterDays: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReleaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getReleaseTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRestAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRestAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTimestamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTransferableAmount(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTransferableAmount(address)"(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStarted(
      startDay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isStarted(uint256)"(
      startDay: BigNumberish,
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

    vestingTypes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vestingTypes(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
