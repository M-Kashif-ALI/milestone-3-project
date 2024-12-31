"use client"
import { createContext } from "react"

interface cartItem {
  id: number;
  name: string;
  title: string;
  description: string;
  detailDescription: string;
  price: number;
  img: string;
  quantity: number
}

interface cartContextType {
  cart: cartItem[];
  count: number;
  add: (item:cartItem) => void;
  del: (id:number) => void;
}
 
export const CartContext = createContext<cartContextType>({
  cart: [],
  count: 0,
  add: () => { },
  del: () => { },
})