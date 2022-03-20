import React from "react";
import Expenses from "./Components/Expenses/Expenses";

import NewExpense from "./Components/New Expenses/NewExpenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(),
    },
    {
      id: "e2",
      title: "Washbrook",
      amount: 15.36,
      date: new Date(),
    },
    {
      id: "e3",
      title: "Bath",
      amount: 7.12,
      date: new Date(),
    },
    {
      id: "e4",
      title: "Pipes",
      amount: 96.12,
      date: new Date(),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In app js');
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
