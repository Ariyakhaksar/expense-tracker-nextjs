import getUserBalance from "@/actions/getUserBalance";
import { addCommas } from "@/lib/utils";
import React from "react";

interface Props {}

const Balance = async (props: Props) => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>
    </>
  );
};

export default Balance;
