// import { getToken } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export async function getUserToken() {
//     const cookieStore = await cookies();
    
//     const token = await getToken({
//         req: {
//           cookies: cookieStore
//         } as any,
//         secret: process.env.NEXTAUTH_SECRET,
//     });
//     return token?.token as string | undefined;
// }


import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function getUserToken() {
    const token = await getToken({
        req: { cookies: await cookies() } as any,
        secret: process.env.NEXTAUTH_SECRET,
    });

    return (token?.token || token?.accessToken) as string | undefined;
}