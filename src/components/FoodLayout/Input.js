import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // const amountInputRef = useRef();
  // const activate = () => {
  //   amountInputRef.current.focus();
  // };no need of this method because we are not exposing any method. we don need focus method in MealItemForm
  // useImperativeHandle(ref, () => {
  //   return {
  //     focus: activate
  //   };
  // });
  return (
    <div className={classes.input}>
      <label htmlFor={props.label}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
