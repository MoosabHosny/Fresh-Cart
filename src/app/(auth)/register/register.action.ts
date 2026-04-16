"use server";

import { cookies } from "next/headers";
import { RegisterResponse, UserDataType } from "./register";

export async function handleUserData(
  UserData: UserDataType,
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UserData),
      },
    );
    const data: RegisterResponse = await response.json();
    const cookie = await cookies();
    cookie.set("token", data.token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 2,
      sameSite: "strict",
    });
    //   console.log("Signup Success:", data.message);
    if (data.message == "success") {
      return true;
    }
    return data.message;
  } catch (error) {
    console.error("Error fetching all products:", error);
  }
}
