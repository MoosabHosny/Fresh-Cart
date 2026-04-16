"use client";

import { useState } from "react";
import AppButton from "@/Shared/AppButton/AppButton";
import { Check, Loader2 } from "lucide-react";
import { AddProductToCart } from "@/app/cart/Cart.action";
import { useCart } from "@/Shared/context/CartContext";

export default function AddToCart({ children, id, ...props }: any) {
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false); 
  const { refreshCart } = useCart();

  async function handleProductToCart() {
    if (loading) return;

    try {
      setLoading(true); 

      const res = await AddProductToCart({ productId: id });

      if (res?.status === "success") {
        await refreshCart();
        setAdded(true);
        setTimeout(() => setAdded(false), 1000);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppButton {...props} disabled={loading} onClick={handleProductToCart}>
      {loading ? (
        <Loader2 className="animate-spin" size={20} />
      ) : added ? (
        <>
          <Check size={22} strokeWidth={3} />
        </>
      ) : (
        children
      )}
    </AppButton>
  );
}
