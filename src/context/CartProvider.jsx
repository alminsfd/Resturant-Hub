"use client";
import React, { createContext, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([item, ...cart]);
  };

  const cartInfo = {
    addToCart,
    cart,
  };
  return <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>;
};

export default CartProvider;
