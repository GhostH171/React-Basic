import React, { useState } from "react";
// import { useState } from "react/cjs/react.production.min";
import Expenses from "./Components/Expenses/Expenses";

import NewExpense from "./Components/New Expenses/NewExpenses";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
