import React, { useState, useRef, useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../FoodLayout/Input";
import CartContext from "../../../context/cart_context";

export default function MealItemForm(props) {
  const ctx = useContext(CartContext);
  const [amountInvalid, setamountInvalid] = useState(false);
  const amountInputRef = useRef();
  const submitHandler = e => {
    e.preventDefault();
    const enteredQty = amountInputRef.current.value;
    const enteredQtyNumber = +enteredQty;
    if (
      enteredQtyNumber === 0 ||
      enteredQtyNumber < 1 ||
      enteredQtyNumber > 5
    ) {
      setamountInvalid(true);
      return;
    }
    props.onAddToCart(enteredQtyNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1"
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
}
