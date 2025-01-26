import getUserBalance from "@/actions/getUserBalance";
import React from "react";

interface Props {}

const Balance = async (props: Props) => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance ?? 0}</h1>
    </>
  );
};

export default Balance;
