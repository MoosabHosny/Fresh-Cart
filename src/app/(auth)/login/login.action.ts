// "use server";

// import { cookies } from "next/headers";

// export async function sendUserDataLogan(UserData) {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`,
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(UserData),
//       },
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching all products:", error);
//   }
// }

//     // const cookie = await cookies();
//     // cookie.set("token", UserData.token, {
//     //   httpOnly: true,
//     //   maxAge: 60 * 60 * 24 * 2,
//     //   sameSite: "strict",
//     // });
