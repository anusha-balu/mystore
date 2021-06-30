import React from "react";
import { uiActions } from "../../../advancedstore/ui-slice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = props => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };
  const totalQty = useSelector(state => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
