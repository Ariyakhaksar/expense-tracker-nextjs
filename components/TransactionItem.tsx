import { addCommas } from "@/lib/utils";
import { Transaction } from "@/types/Transaction";
import React from "react";

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {" "}
        {sign} ${addCommas(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};

export default TransactionItem;
