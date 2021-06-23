import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart_context";

export default function MealItem(props) {
  const ctx = useContext(CartContext);
  const addToCartHandler = qty => {
    ctx.addItem({
      id: props.meals.id,
      name: props.meals.name,
      price: props.meals.price,
      qty: qty
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meals.name}</h3>
        <div className={classes.description}>{props.meals.description}</div>
        <div className={classes.price}>{props.meals.price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        ></MealItemForm>
      </div>
    </li>
  );
}
