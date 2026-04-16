"use client";
import React, { useRef, useState } from "react";
// import ShippingAddressForm from "./ShippingAddressForm";
import OrderSummaryCheckout from "./OrderSummaryCheckout";
import { ShippingAddressForm } from "./ShippingAddressForm";

export default function CheckoutClientWrapper({ cartId }: { cartId: string }) {
  const formRef = useRef<any>(null);
    const [selectedMethod, setSelectedMethod] = useState("cash");
    // console.log('cartId====< ',cartId)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-8">
        <ShippingAddressForm ref={formRef} onMethodChange={setSelectedMethod} />
      </div>

      <div className="lg:col-span-4 sticky top-6">
        <OrderSummaryCheckout
          formRef={formRef}
          method={selectedMethod}
          cartId={cartId}
        />
      </div>
    </div>
  );
}
