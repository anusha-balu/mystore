import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";
export default function NewExpense(props) {
  const [isediting, setisediting] = useState(false);
  const saveExpenseDataHandler = enteredExpenseDate => {
    console.log("received");
    const expenseData = { ...enteredExpenseDate, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setisediting(false);
  };
  const showFormHandler = () => {
    setisediting(true);
  };
  const stopEditingHandler = () => {
    setisediting(false);
  };
  return (
    <div className="new-expense">
      {!isediting && (
        <Button onClick={showFormHandler}>Add more expense</Button>
      )}
      {isediting && (
        <ExpenseForm
          stopEditingHandler={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}
