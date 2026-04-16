import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken() {
    const cookie = await cookies();

    const sessionToken = cookie.get('next-auth.session-token')?.value;
    const jwtToken = await decode({ token: sessionToken, secret: process.env.NEXTAUTH_SECRET || "" });
    // console.log('jwtToken===>',jwtToken)
    return jwtToken?.accessToken;
}