import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpenses.css";
const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
