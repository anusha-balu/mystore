import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState(0.01);
  // const [enteredDate, setEnteredDate] = useState();

  const [isValid, setisValid] = useState(true);
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  });
  const titleChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = event => {
    setUserInput({ ...userInput, enteredAmount: event.target.value });
    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = event => {
    setUserInput({ ...userInput, enteredDate: event.target.value });
    // setUserInput(
    //   prevState => {
    //     return { ...prevState, enteredDate: event.target.value };
    //   } // this is the best way. if you want your state update to happen on the previous state value
    // );
  };

  const submitHandler = event => {
    event.preventDefault();
    if (userInput.enteredTitle.trim().length === 0) {
      setisValid(false);
      return;
    }
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    console.log("Expense...", expenseData);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };
  const cancelHandler = () => {};
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={`new-expense__control ${!isValid ? "invalid" : ""}`}>
          {/* add style dynamically */}
          <label
          // style={{ color: !isValid ? "red" : "black" }}
          >
            Title: {userInput.enteredTitle}
          </label>
          <input
            // style={{
            //   borderColor: !isValid ? "red" : "#ccc",
            //   background: !isValid ? "salmon" : "white"
            // }}
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          {/* <div className={`new-expense__control ${!isValid ? "invalid" : ""}`}> */}
          <label>Amount: {userInput.enteredAmount}</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          {/* <div className={`new-expense__control ${!isValid ? "invalid" : ""}`}> */}
          <label>Date: {userInput.enteredDate}</label>
          <input
            type="date"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditingHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
