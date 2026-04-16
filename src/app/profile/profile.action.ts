// "use server";

// import { getUserToken } from "../myUtil";

// export async function AddAddress(data) {

//   const token = await getUserToken();

//   try {
//     console.log("TOKEN ===>", token);

//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`,
//       {
//         method: "POST",
//         headers: {
//           token: token as string,
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(data),
//       },
//     );

//     if (!response.ok) {
//         const errorData = await response.json();
//         console.log('errorData ---=',errorData)
//       return errorData;
//     }

//     const res = await response.json();

//     console.log("ADD CART RESPONSE ===>", res);

//     // revalidatePath("/cart");

//     return res;
//   } catch (error) {
//     // console.error("AddProductToCart error:", error);
//     return { status: "error", message: "Something went wrong" };
//   }
// }

"use server";

import { getUserToken } from "../myUtil";

export async function AddAddress(formData: any) {
  const token = await getUserToken();

  // 🟢 نحول الداتا للشكل اللي الـ API مستنيه
  const data = {
    name: formData.addressName,
    details: formData.fullAddress,
    phone: formData.phone,
    city: formData.city,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`,
      {
        method: "POST",
        headers: {
          token: token as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      },
    );

    const res = await response.json();

    // if (!response.ok) {
    //   console.log("ADD ADDRESS ERROR =>", res);
    //   return { status: "error", message: res.message };
    // }

    // console.log("ADD ADDRESS SUCCESS =>", res);

    return { status: "success", data: res };
  } catch (error) {
    console.log("ADD ADDRESS CATCH ERROR =>", error);
    return { status: "error", message: "Something went wrong" };
  }
}

export async function GetLoggedUserAddresses() {
  const token = await getUserToken();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`,
      {
        headers: {
          token: token as string,
          "Content-Type": "application/json",
        },
      },
    );
    const res = await response.json();

    console.log("ADD ADDRESS SUCCESS =>", res);

    return res;
  } catch (error) {
    console.log("ADD ADDRESS CATCH ERROR =>", error);
    return { status: "error", message: "Something went wrong" };
  }
}

export async function RemoveAddress(id: string) {
  const token = await getUserToken();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses/${id}`,
      {
        method: "DELETE",
        headers: {
          token: token as string,
        },
      },
    );

    const res = await response.json();


    console.log("ADD ADDRESS SUCCESS =>", res);

  } catch (error) {
    console.log("ADD ADDRESS CATCH ERROR =>", error);
    return { status: "error", message: "Something went wrong" };
  }
}
