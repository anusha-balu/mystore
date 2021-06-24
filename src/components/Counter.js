import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter); //when u use useselector react-redux
  //will automatically create a subscription to redux store for this component
  const show = useSelector(state => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
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
