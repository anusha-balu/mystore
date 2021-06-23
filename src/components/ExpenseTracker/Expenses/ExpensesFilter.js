import React from "react";
import "./ExpensesFilter.css";
export default function ExpensesFilter(props) {
  const dropdownChangeHandler = event => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select year</label>
        <select onChange={dropdownChangeHandler} value={props.selectedYear}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
