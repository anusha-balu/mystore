import React, { useReducer } from "react";
const initialInputState = {
  value: "",
  isTouched: false
};

const inputStateReducer = (state, action) => {
  console.log("action...", action);
  if (action.type === "CHANGE")
    return { value: action.value, isTouched: state.isTouched };
  if (action.type === "BLUR") return { value: state.value, isTouched: true };
  if (action.type === "RESET") return { value: "", isTouched: false };

  return initialInputState;
};
const useInputReducer = validateValue => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValueValid = validateValue(inputState.value);
  const hasError = inputState.isTouched && !isValueValid;

  const valueChangeHandler = event => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const valueBlurHandler = event => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid: isValueValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset: reset
  };
};
export default useInputReducer;
