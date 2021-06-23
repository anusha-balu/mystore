import React, { useReducer } from "react";
import CartContext from "../context/cart_context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};
//we will write cartreducer outside the component so that it will not be recreated when the component is reevaluated
//one more reason is that the cartreducer is not dependent on any state
const cartReducer = (state, action) => {
  console.log("action.item...", action.item);
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.qty;

    const tobeUpdatedIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const toBeUpdatedItem = state.items[tobeUpdatedIndex];
    let updatedItems = [];
    if (toBeUpdatedItem) {
      const newToBeUpdatedItem = {
        ...toBeUpdatedItem,
        qty: toBeUpdatedItem.qty + action.item.qty
      };
      updatedItems = [...state.items];
      updatedItems[tobeUpdatedIndex] = newToBeUpdatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const toBeUpdatedIndex = state.items.findIndex(
      item => item.id === action.item
    );
    console.log("toBeUpdatedIndex...", toBeUpdatedIndex);
    const toBeUpdatedItem = state.items[toBeUpdatedIndex];
    console.log("toBeUpdatedItem...", toBeUpdatedItem);

    let updatedItems;
    if (toBeUpdatedItem.qty > 1) {
      const newToBeUpdatedItem = {
        ...toBeUpdatedItem,
        qty: toBeUpdatedItem.qty - 1
      };
      updatedItems = [...state.items];
      updatedItems[toBeUpdatedIndex] = newToBeUpdatedItem;
    } else if (toBeUpdatedItem.qty === 1) {
      updatedItems = state.items.filter(item => {
        console.log("item with quantity 1...", item.name);
        return item.id !== action.item;
      });
    }

    const updatedTotalAmount = state.totalAmount - toBeUpdatedItem.price;
    console.log("updatedTotalAmount...", updatedTotalAmount);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};
export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCartHandler = item => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = item => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };
  const clearCartHandler = item => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler, //in the cartContext which is send as value in provider we can add more values here. the context which is created as cart-context is just for creating a context. we can add more values and methods here which will eb availabe as context for children
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
