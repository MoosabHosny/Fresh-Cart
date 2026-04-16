"use server";

import { getUserToken } from "@/app/myUtil";
import { revalidatePath } from "next/cache";

export async function CreateCashOrderFromCart(
  shippingAddress: any,
  cartId: string,
) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/orders/${cartId}`,
      {
        method: "POST",
        headers: {
          token: (await getUserToken()) as string,
          "content-type": "application/json",
        },
        body: JSON.stringify(shippingAddress),
      },
    );
    const resData = await response.json();
    console.log(resData);
  revalidatePath("/cart");
  // redirect('/cart');
  return resData;

}





export async function CreateOnlineOrderFromCart(
  shippingAddress: any,
  cartId: string,
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
      {
        method: "POST",
        headers: {
          token: (await getUserToken()) as string,
          "content-type": "application/json",
        },
        body: JSON.stringify(shippingAddress),
      },
    );
    const resData = await response.json();
    console.log(resData);
  // revalidatePath("/cart");
  // redirect('/cart');
  return resData;

}
