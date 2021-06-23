import React, { useState } from "react";
import Section from "./Task/UI/Section";
import useInput from "../hooks/use-input";
export default function SimpleInput(props) {
  const {
    value: name,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameHandler
  } = useInput(value => value.trim() !== "");

  const {
    value: email,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailHandler
  } = useInput(value => value.trim() !== "" && value.includes("@"));

  // const [name, setName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [email, setEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const nameIsValid = name.trim() !== "";
  // const nameInputIsvalid = enteredNameTouched && !nameIsValid;

  // const emailIsValid = email.trim() !== "" && email.includes("@");
  // const emailInputIsvalid = enteredEmailTouched && !emailIsValid;

  let isFormValid = false;

  // if (nameIsValid && emailIsValid) isFormValid = true;
  if (enteredNameIsValid && enteredEmailIsValid) isFormValid = true;

  // const nameChangeHandler = event => {
  //   setName(event.target.value);
  // };
  // const emailChangeHandler = event => {
  //   setEmail(event.target.value);
  // };
  // const nameBlurHandler = event => {
  //   setEnteredNameTouched(true);
  // };
  // const emailBlurHandler = event => {
  //   setEnteredEmailTouched(true);
  // };
  const submitHandler = event => {
    // setEnteredNameTouched(true); we can remove this
    event.preventDefault();
    // if (!nameIsValid && !emailIsValid) {
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    resetNameHandler();
    resetEmailHandler();
    // setName("");
    // setEnteredNameTouched(false);
    // setEmail("");
    // setEnteredEmailTouched(false);
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Section>
      <form onSubmit={submitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={name}
            onBlur={nameBlurHandler}
          ></input>
          {/* {nameInputIsvalid && ( */}
          {nameInputHasError && (
            <p className="error-text">Name should not be blank</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={emailChangeHandler}
            value={email}
            onBlur={emailBlurHandler}
          ></input>
          {emailInputHasError && (
            <p className="error-text">Email should not be blank</p>
          )}
        </div>

        <div style={{ padding: "5px" }}>
          <button disabled={!isFormValid}>Submit</button>
        </div>
      </form>
    </Section>
  );
}
