import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/indexreduxtoolkit";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter); //when u use useselector react-redux
  //will automatically create a subscription to redux store for this component,
  //whenever there is a change to value to counter change will be pubished to the component here
  //when u use more than one reducer in a store u have to access the values using the key of slice.
  // for instance above state.counter shud be accessed as state.counter.counter as the key of slice is counter
  //if you want to access the isAuthenticated access using state.auth.isAuthenticated

  const show = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(10)); // { type: "UNIQUE_IDENTIFIER", payload: 10}
    //anything we pass as argument will go as payload
  };
  console.log("counter...", counter);
  return (
    <main className={classes.counter}>
      <h1>Redux counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
}
