import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
export default function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("clicked");
  };

  const deleteHandler = () => {
    props.deleteItem(props.id);
    console.log(props.id, "for deletion");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description" onClick={deleteHandler}>
        <h2> {props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
}
