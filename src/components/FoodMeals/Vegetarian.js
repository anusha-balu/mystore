import React from "react";
import LoginButton from "../ExpenseTracker/UI/LoginButton";
import classes from "./Vegetarian.module.css";
import Card from "../FoodUI/Card";
import { white } from "color-name";

const Vegetarian = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <h3 style={{ color: "white" }}>Vegan dishes</h3>
      <div>
        <label className={classes.switch}>
          <input type="checkbox"></input>
          <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
      </div>
      <div>
        <LoginButton className={classes.button1} onClick={props.showVegan}>
          Vegan
        </LoginButton>
      </div>
    </div>
  );
};

export default Vegetarian;
