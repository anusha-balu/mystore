import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";
export default function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2021");
  const filterChangeHandler = selectedYear => {
    console.log("selectedYear...", selectedYear);
    setfilteredYear(selectedYear);
  };
  const filteredExpense = props.expenses.filter(expense => {
    console.log("filtering");
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selectedYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpensesList items={filteredExpense} deleteItem={props.deleteItem} />
      </Card>
    </div>
  );
}
