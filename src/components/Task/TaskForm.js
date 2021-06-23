import React, { useRef } from "react";
import classes from "./TaskForm.module.css";

export default function TaskForm(props) {
  const submitHandler = e => {
    e.preventDefault();
    const enteredValue = taskInputRef.current.value;
    props.onEnterTask(enteredValue);
  };
  const taskInputRef = useRef("");
  return (
    <form className={classes.form}>
      <input type="text" ref={taskInputRef}></input>
      <button onClick={submitHandler}>Add</button>
    </form>
  );
}
