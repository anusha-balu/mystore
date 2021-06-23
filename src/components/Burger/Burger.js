import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => (
        <BurgerIngredient
          key={ingredientKey + i}
          type={ingredientKey}
        ></BurgerIngredient>
      ));
    })
    .reduce((arr, data) => {
      return arr.concat(data);
    }, []);
  console.log("ingredientKey...", transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = "Please start adding ingredients";
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
}
