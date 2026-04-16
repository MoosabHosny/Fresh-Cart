"use client";
import { Minus, Plus, Loader2 } from "lucide-react";
import AppButton from "@/Shared/AppButton/AppButton";
import { Input } from "../ui/input";
import { handleProductQuantity } from "@/app/cart/Cart.action";
import { useState } from "react";
import { useCart } from "@/Shared/context/CartContext";

export default function QuantityCounter({
  count,
  productId,
}: {
  count: number;
  productId: string;
}) {
  const [loading, setLoading] = useState(false);
  const { refreshCart } = useCart();

  const handleProductCount = async (newCount: number) => {
    if (newCount < 1 || loading) return;

    setLoading(true);
    await handleProductQuantity({ count: newCount }, productId);
    await refreshCart();
    setLoading(false);
  };

  return (
    <>
      <div className="flex gap-1 max-w-30 bg-gray-50 border border-gray-200 rounded-2xl">
        <AppButton
          disabled={loading}
          onClick={function () {
            handleProductCount(count - 1);
          }}
          className=" p-3 rounded-l-[15px]"
        >
          <Minus size={16} className="text-gray-600" />
        </AppButton>

        <div className="flex items-center">
          {loading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Input
              type="text"
              value={count}
              readOnly
              className="text-center w-full border-none bg-transparent"
            />
          )}
        </div>
        <AppButton
          disabled={loading}
          onClick={function () {
            handleProductCount(count + 1);
          }}
          className=" bg-green-500 p-3 rounded-e-[15px]"
        >
          <Plus size={16} className="text-white" />
        </AppButton>
      </div>
    </>
  );
}
