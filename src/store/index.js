import { createStore } from "redux";
import { stat } from "fs";

const initialState = { counter: 0, showCounter: true };
//redux wont  merge ur changes with existing state instead takes what u return and replaces exisitng state
const counterReducer = (state = initialState, action) => {
  if (action.type == "increment")
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  else if (action.type == "decrement")
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  if (action.type == "increase")
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  if (action.type == "toggle")
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  return state;
};
const store = createStore(counterReducer); // this now creates our redux store

export default store;
