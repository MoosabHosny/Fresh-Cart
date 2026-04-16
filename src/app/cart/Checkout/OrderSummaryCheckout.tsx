"use client";
import { useEffect, useState } from "react";
import { Truck, ShieldCheck, ShoppingBag } from "lucide-react";
import { GetCart } from "../Cart.action";
import AppButton from "@/Shared/AppButton/AppButton";
import {
  CreateCashOrderFromCart,
  CreateOnlineOrderFromCart,
} from "./payment.action";
import { useRouter } from "next/navigation";
import { useCart } from "@/Shared/context/CartContext";

export default function OrderSummaryCheckout({
  formRef,
  method,
  cartId,
}: {
  formRef: any;
  method: string;
  cartId: string;
}) {
  const [cart, setCart] = useState<any>(null);
  const router = useRouter();
  const { refreshCart } = useCart();

  useEffect(() => {
    async function fetchCartData() {
      try {
        const data = await GetCart();
        setCart(data);
      } catch (err) {
        console.error("Cart error:", err);
      }
    }
    fetchCartData();
  }, []);

  const handlePlaceOrder = async () => {
    if (formRef.current) {
      const shippingAddress = formRef.current.submitForm();
      const res = await CreateCashOrderFromCart(shippingAddress, cartId);
      if (res.status === "success") {
        await refreshCart();
        router.push("/");
      }
    }
  };
  const handleOnlineOrder = async () => {
    if (formRef.current) {
      const shippingAddress = formRef.current.submitForm();
      const res = await CreateOnlineOrderFromCart(shippingAddress, cartId);
      const url = res.session.url;
      await refreshCart();
      window.open(url, "_self");
    }
  };
  function CashOrOnline(method: string) {
    if (method === "cash") {
      return handlePlaceOrder;
    } else {
      return handleOnlineOrder;
    }
  }

  const products = cart?.data?.products || [];
  const totalPrice = cart?.data?.totalCartPrice || 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-[#16a34a] p-4 flex items-center gap-2 text-white">
        <ShoppingBag size={20} />
        <h2 className="font-bold text-lg">Order Summary</h2>
      </div>
      <div className="p-5">
        <div className="space-y-4 max-h-60 overflow-y-auto mb-6 pr-2">
          {products.map((item: any) => (
            <div
              key={item._id}
              className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg"
            >
              <img
                src={item.product.imageCover}
                className="w-12 h-12 object-contain bg-white rounded"
                alt=""
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold truncate">
                  {item.product.title}
                </h3>
                <p className="text-[10px] text-gray-500">
                  {item.count} x {item.price} EGP
                </p>
              </div>
              <span className="text-xs font-bold">
                {item.price * item.count}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-bold">{totalPrice} EGP</span>
          </div>
          <div className="flex justify-between text-sm text-green-600">
            <span>Shipping</span>
            <span className="font-bold">FREE</span>
          </div>
          <div className="flex justify-between items-baseline pt-4">
            <span className="text-lg font-black">Total</span>
            <span className="text-2xl font-black text-green-600">
              {totalPrice} <span className="text-xs text-gray-400">EGP</span>
            </span>
          </div>
        </div>
        <AppButton
          onClick={CashOrOnline(method)}
          className="w-full bg-[#16a34a] hover:bg-green-700 text-white py-6 mt-6 rounded-xl font-bold shadow-lg"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 7h-1V6a6 6 0 0 0-12 0v1H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-11 0V6a4 4 0 1 1 8 0v1H8Z" />
          </svg>
          {method === "cash" ? "Cash Order" : "Online Payment"}
        </AppButton>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50 px-2">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500">
            <ShieldCheck size={14} className="text-[#16a34a]" />
            <span>Secure</span>
          </div>
          <div className="w-px h-3 bg-gray-200"></div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500">
            <Truck size={14} className="text-blue-500" />
            <span>Fast Delivery</span>
          </div>
          <div className="w-px h-3 bg-gray-200"></div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#ff7800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 7h-1V6a6 6 0 0 0-12 0v1H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-11 0V6a4 4 0 1 1 8 0v1H8Z" />
            </svg>
            <span>Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}
