import getIncomExpense from "@/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";
import React from "react";

interface Props {}

const IncomeExpense = async (props: Props) => {
  const { income, expense } = await getIncomExpense();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${addCommas(Number(income?.toFixed(2) ?? 0))}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${addCommas(Number(expense?.toFixed(2) ?? 0))}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
