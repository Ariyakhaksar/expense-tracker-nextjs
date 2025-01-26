import getTransactions from "@/actions/getTransactions";
import { Transaction } from "@prisma/client";
import React from "react";
import TransactionItem from "./TransactionItem";

type Props = {};

const TransactionList = async (props: Props) => {
  const { transactions, error } = await getTransactions();
  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
