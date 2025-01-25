"use client";
import React, { useRef } from "react";
import AddTransactionAction from "@/actions/AddTransactionAction";
import { toast } from "react-toastify";

type Props = {};

const AddTransaction = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await AddTransactionAction(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("transaction Added");
      formRef.current?.reset();
    }
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (nagative - expense - positive - income){" "}
          </label>
          <input type="number" step="0.01" id="amount" name="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
