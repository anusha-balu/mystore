import React, { useState, useCallback } from "react";

const useInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);
  console.log("entertedvalue", enteredValue);

  const isValueValid = validateValue(enteredValue);
  const hasError = valueIsTouched && !isValueValid;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = event => {
    setValueIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setValueIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: isValueValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset: reset
  };
};
export default useInput;
