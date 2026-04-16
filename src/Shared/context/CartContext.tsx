"use client";
import { GetCart } from "@/app/cart/Cart.action";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cartCount: number;
  setCartCount: (num: number) => void;
  refreshCart: () => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: any) {
  const [cartCount, setCartCount] = useState(0);

  async function refreshCart() {
    const res = await GetCart();
    if (res?.numOfCartItems !== undefined) {
      setCartCount(res.numOfCartItems);
    }
  }

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext)!;