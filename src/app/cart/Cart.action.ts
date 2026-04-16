"use server";

import { revalidatePath } from "next/cache";
// import { getUserToken } from "@/app/myUtil";
// import { revalidateTag } from "next/cache";
import { getUserToken } from "../myUtil";
import {
  productCartId,
  productQuantity,
} from "@/components/AddToCart/AddToCart.interface";
import { redirect } from "next/navigation";

export async function AddProductToCart(data: productCartId) {
  const token = await getUserToken();

  // if (!token) {
  //   return { status: "error", message: "You must be logged in" };
  // }
  if (!token) {
    redirect("/login");
  }
  try {
    // console.log("TOKEN ===>", token);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`,
      {
        method: "POST",
        headers: {
          token: token as string,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }

    const res = await response.json();

    // console.log("ADD CART RESPONSE ===>", res);

    revalidatePath("/cart");

    return res;
  } catch (error) {
    console.error("AddProductToCart error:", error);
    return { status: "error", message: "Something went wrong" };
  }
}

export async function GetCart() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
      headers: {
        token: (await getUserToken()) as string,
      },
      // cache: "force-cache",
      cache: "no-store",
      next: { revalidate: 0 },
    });

    const data = await res.json();
    // console.log('data===--0-=-> ',data.data.products)
    return data;
  } catch (error) {
    console.log("GetCart error", error);
  }
}

export async function DeleteCartItem(productId: string) {
  try {
    const token = await getUserToken();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${productId}`,
      // /api/v2/cart/{{productId}}
      {
        method: "DELETE",
        headers: {
          token: token as string,
        },
      },
    );

    const res = await response.json();

    revalidatePath("/cart");

    return res;
  } catch (error) {
    console.log("DeleteCartItem error", error);
  }
}

export async function handleProductQuantity(
  data: productQuantity,
  productId: string,
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${productId}`,
      {
        method: "PUT",
        headers: {
          token: (await getUserToken()) as string,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    // const responseData = await res.json();
    // console.log("data===--0-=-> ", responseData);
    revalidatePath("/cart");
    // return data;
  } catch (error) {
    console.log("GetCart error", error);
  }
}


export async function DeleteAllCart() {
  try {
    const token = await getUserToken();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`,
      {
        method: "DELETE",
        headers: {
          token: token as string,
        },
      },
    );

    const res = await response.json();
    revalidatePath("/cart");

  } catch (error) {
    console.log("DeleteCartItem error", error);
  }
}
