// This page to display content and call components

import ExpenseList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangehandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
