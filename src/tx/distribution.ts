import { Coin } from ".";
import {
  MsgFundCommunityPool as MsgFundCommunityPoolProto,
  MsgSetWithdrawAddress as MsgSetWithdrawAddressProto,
  MsgWithdrawDelegatorReward as MsgWithdrawDelegatorRewardProto,
  MsgWithdrawValidatorCommission as MsgWithdrawValidatorCommissionProto,
  protobufPackage,
} from "../protobuf_stuff/cosmos/distribution/v1beta1/tx";
import { AminoMsg, Msg, ProtoMsg } from "./types";

export type MsgSetWithdrawAddressParams = MsgSetWithdrawAddressProto;

export class MsgSetWithdrawAddress implements Msg {
  public delegatorAddress: string;
  public withdrawAddress: string;

  constructor({
    delegatorAddress,
    withdrawAddress,
  }: MsgSetWithdrawAddressParams) {
    this.delegatorAddress = delegatorAddress;
    this.withdrawAddress = withdrawAddress;
  }

  async toProto(): Promise<ProtoMsg> {
    const msgContent: MsgSetWithdrawAddressProto = {
      delegatorAddress: this.delegatorAddress,
      withdrawAddress: this.withdrawAddress,
    };

    return {
      typeUrl: `/${protobufPackage}.MsgSetWithdrawAddress`,
      value: msgContent,
      encode: () => MsgSetWithdrawAddressProto.encode(msgContent).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgModifyWithdrawAddress", // wtf
      value: {
        delegator_address: this.delegatorAddress,
        withdraw_address: this.withdrawAddress,
      },
    };
  }
}

// proto and amino names are different, so export both names
export { MsgSetWithdrawAddress as MsgModifyWithdrawAddress };

export type MsgWithdrawDelegatorRewardParams = MsgWithdrawDelegatorRewardProto;

export class MsgWithdrawDelegatorReward implements Msg {
  public delegatorAddress: string;
  public validatorAddress: string;

  constructor({
    delegatorAddress,
    validatorAddress,
  }: MsgWithdrawDelegatorRewardParams) {
    this.delegatorAddress = delegatorAddress;
    this.validatorAddress = validatorAddress;
  }

  async toProto(): Promise<ProtoMsg> {
    const msgContent: MsgWithdrawDelegatorRewardProto = {
      delegatorAddress: this.delegatorAddress,
      validatorAddress: this.validatorAddress,
    };

    return {
      typeUrl: `/${protobufPackage}.MsgWithdrawDelegatorReward`,
      value: msgContent,
      encode: () => MsgWithdrawDelegatorRewardProto.encode(msgContent).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegationReward", // wtf
      value: {
        delegator_address: this.delegatorAddress,
        validator_address: this.validatorAddress,
      },
    };
  }
}

// proto and amino names are different, so export both names
export { MsgWithdrawDelegatorReward as MsgWithdrawDelegationReward };

export type MsgWithdrawValidatorCommissionParams =
  MsgWithdrawValidatorCommissionProto;

export class MsgWithdrawValidatorCommission implements Msg {
  public validatorAddress: string;

  constructor({ validatorAddress }: MsgWithdrawValidatorCommissionParams) {
    this.validatorAddress = validatorAddress;
  }

  async toProto(): Promise<ProtoMsg> {
    const msgContent: MsgWithdrawValidatorCommissionProto = {
      validatorAddress: this.validatorAddress,
    };

    return {
      typeUrl: `/${protobufPackage}.MsgWithdrawValidatorCommission`,
      value: msgContent,
      encode: () =>
        MsgWithdrawValidatorCommissionProto.encode(msgContent).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommission",
      value: {
        validator_address: this.validatorAddress,
      },
    };
  }
}

export type MsgFundCommunityPoolParams = MsgFundCommunityPoolProto;

export class MsgFundCommunityPool implements Msg {
  public depositor: string;
  public amount: Coin[];

  constructor({ depositor, amount }: MsgFundCommunityPoolParams) {
    this.depositor = depositor;
    this.amount = amount;
  }

  async toProto(): Promise<ProtoMsg> {
    const msgContent: MsgFundCommunityPoolProto = {
      depositor: this.depositor,
      amount: this.amount,
    };

    return {
      typeUrl: `/${protobufPackage}.MsgFundCommunityPool`,
      value: msgContent,
      encode: () => MsgFundCommunityPoolProto.encode(msgContent).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgFundCommunityPool",
      value: {
        depositor: this.depositor,
        amount: this.amount,
      },
    };
  }
}
