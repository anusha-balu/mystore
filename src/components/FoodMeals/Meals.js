import React, { Fragment, useMemo } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import Vegetarian from "../../components/FoodMeals/Vegetarian";
import Orders from "./MealItem/Orders";

export default function Meals(props) {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <Orders orders={useMemo(() => [10, 8, 9, 7, 4], [])}></Orders>
      <Vegetarian showVegan={props.showVegan}></Vegetarian>
      <AvailableMeals
        veganPreference={props.vegan}
        foodTypeSelectionHandler={props.foodTypeSelectionHandler}
      ></AvailableMeals>
      {/* only if vegan boolean value changes then only available meals will be re-evaluated
      when does the vegan boolean value change? only when showvegan click event happens in vegetarian component 
      if AvailableMeals is not executed then child of AvailableMeals is also not executed
      
      If you are passing a function props.showVegan as props and 
      when the re-evaluation happens when any of the parent component is re-evaluated
      the react.memo will not work because functions are like objects and during ever 
      re-render  when the function is evaluated and function is re-created so  react will 
      check for equality of object whihc will be different obviosuly but if primitive types 
      are passed as props the equal comparison will provide true if they are same */}
    </Fragment>
  );
}
