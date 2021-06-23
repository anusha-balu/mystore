import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../FoodCart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/cart_context";
export default function HeaderCartButton(props) {
  const [buttonToBump, setButtonToBump] = useState(false);
  const ctx = useContext(CartContext);
  const numberOfItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.qty;
  }, 0);
  const btnClasses = `${classes.button} ${
    buttonToBump === true ? classes.bump : ""
  }`;
  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setButtonToBump(true);
    const timer = setTimeout(() => {
      console.log("Setting to false");
      setButtonToBump(false);
    }, 50);

    return () => {
      console.log("clean up");
      clearTimeout(timer);
    };
  }, [ctx.items]);
  return (
    <button className={btnClasses} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}
