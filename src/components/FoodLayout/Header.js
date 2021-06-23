import React, { Fragment, useState } from "react";
import mealsimage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Button from "../ExpenseTracker/UI/Button";
import Users from "../FoodMeals/MealItem/Users/Users";

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>MyMeals</h2>
        <Button onClick={props.switchUsersHandler}>Users</Button>
        <HeaderCartButton showCartHandler={props.showCartHandler}>
          Cart
        </HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        {/* since main-image has hyphen we cant use dot so we are going for classes["main-image"] */}
        <img src={mealsimage} alt="A table fuul of delicious food!"></img>
      </div>
    </Fragment>
  );
}
