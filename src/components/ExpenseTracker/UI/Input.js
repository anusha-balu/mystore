import React, { useRef, useEffect, useImperativeHandle } from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    };
  });
  return (
    <div
      className={`${classes.control} ${
        // emailValid === false ? classes.invalid : ""
        props.emailState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label>{props.label}</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        value={props.emailState.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
});

export default Input;
