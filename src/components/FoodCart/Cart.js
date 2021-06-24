import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../FoodLayout/Modal";
import CartContext from "../../context/cart_context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
export default function Cart(props) {
  const ctx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSumit, setDidSumit] = useState(false);
  const [error, setError] = useState(false);

  const onRemove = id => {
    ctx.removeItem(id);
  };

  const onAdd = item => {
    console.log("item", item);
    ctx.addItem(item);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const confirmHandler = userData => {
    const orderHandler = async () => {
      setIsSubmitting(true);
      const ordersResponse = await fetch(
        "https://react-my-burger-44816-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: userData, orderItems: ctx.items })
        }
      );
      if (!ordersResponse.ok) {
        throw new Error("Order not added");
      }
      setIsSubmitting(false);
      setDidSumit(true);
      ctx.clearCart();
    };
    orderHandler().catch(error => {
      console.log("error", error.message);
      setError(true);
    });
  };
  const hasItems = ctx.items.length > 0;
  const orderActions = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={props.showPageHandler}
      >
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {// [
      // {
      //   id: "c1",
      //   name: "sushi",
      //   amount: 2,
      //   price: 22.89
      // }
      ctx.items
        // ]
        .map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            qty={item.qty}
            price={+item.price}
            onAdd={onAdd.bind(this, {
              id: item.id,
              name: item.name,
              price: item.price,
              qty: 1
            })}
            onRemove={onRemove.bind(this, item.id)}
          ></CartItem>
        ))}
    </ul>
  );

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onConfirm={confirmHandler}
          closeModal={props.showPageHandler}
        />
      )}
      {!isCheckout && orderActions}
    </React.Fragment>
  );
  const isSubmittingOrderContent = <p>Sending order for confirmation...</p>;
  const submittedOrderContent = <p>Submitted...</p>;
  const notSubmittedOrderContent = <p>Error while submitting...</p>;
  return (
    <Modal showPageHandler={props.showPageHandler}>
      {!isSubmitting && !didSumit && cartModalContent}
      {isSubmitting && isSubmittingOrderContent}
      {!isSubmitting && didSumit && submittedOrderContent}
      {error && notSubmittedOrderContent}
    </Modal>
  );
}
