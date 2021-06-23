import React from "react";

const CartContext = React.createContext({
  items: 0,
  totalAmount: 0,
  removeItem: item => {},
  addItem: id => {},
  clearCart: () => {}
});
export default CartContext;
