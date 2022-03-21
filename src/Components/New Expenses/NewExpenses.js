import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpenses.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // trigger for cancel btn
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/*Trigger Add new expense button */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
