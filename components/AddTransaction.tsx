'use client';
import React from "react";

type Props = {};

const AddTransaction = (props: Props) => {
  const clientAction = (formData: FormData) => {
    console.log(formData.get("text"), formData.get("amount"));
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form action={clientAction}>
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
