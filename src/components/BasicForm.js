import React from "react";
import Section from "./Task/UI/Section";
import useInput from "../hooks/use-input";
import useInputReducer from "../hooks/use-input-reducer";
const isNotEmpty = value => {
  return value.trim() !== "";
};
const isEmail = value => {
  return value.includes("@");
};
export default function BasicForm() {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameResetHandler
  } =
    //   useInput(isNotEmpty);
    useInputReducer(isNotEmpty);
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameResetHandler
  } = useInput(isNotEmpty);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailResetHandler
  } = useInput(isEmail);
  let isFormValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) isFormValid = true;

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const submitHandler = event => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
  };

  return (
    <Section>
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className={firstNameClasses}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={firstName}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            ></input>
            {firstNameHasError && (
              <p className="error-text">Firstname shouldn't be blank</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              value={lastName}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            ></input>
          </div>
          {lastNameHasError && (
            <p className="error-text">Lastname shouldn't be blank</p>
          )}
        </div>
        <div className={emailClasses}>
          <label htmlFor="name">E-mail Address</label>
          <input
            type="text"
            id="name"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
          {emailHasError && (
            <p className="error-text">Email should contain @</p>
          )}
        </div>
        <div style={{ padding: "5px" }}>
          <button disabled={!isFormValid}>Submit</button>
        </div>
      </form>
    </Section>
  );
}
