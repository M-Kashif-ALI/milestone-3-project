"use client";

import React, { useState } from "react";
import { CartContext } from "./context";

interface cartItem {
  id: number;
  name: string;
  title: string;
  description: string;
  detailDescription: string;
  price: number;
  img: string;
  quantity: number;
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<cartItem[]>([]);
  const [count, setCount] = useState(0);

  // --------------- Add Functionality ------------------ \\
  const add = (item: cartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setCount(count + 1);
  };

  // --------------- Delete Functionality ------------------ \\

  const del = (id: number) => {
    const existingItem = cart.find((cartItem) => cartItem.id === id);
    if (existingItem?.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
    setCount(count - 1);
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, del, add, count }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
