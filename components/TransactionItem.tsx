"use client"
import deleteTransaction from "@/actions/deleteTransaction";
import { addCommas } from "@/lib/utils";
import { Transaction } from "@/types/Transaction";
import React from "react";
import { toast } from "react-toastify";

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const sign = transaction.amount > 0 ? "+" : "-";

  const handelDeleteTransaction = async (T_ID: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this transaction?");
    if (!confirmed) return;

    const { message, error } = await deleteTransaction(T_ID);
    if (error) {
      toast.error(error);
    }
    toast.success(message);
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {" "}
        {sign} ${addCommas(Math.abs(transaction.amount))}
      </span>
      <button onClick={() => handelDeleteTransaction(transaction.id)} className="delete-btn">
        X
      </button>
    </li>
  );
};

export default TransactionItem;
