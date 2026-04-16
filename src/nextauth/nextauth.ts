
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; // 1. ضفنا المستورد ده
import { jwtDecode } from "jwt-decode";

export const NextAuthConfig: NextAuthOptions = {
  providers: [
    // Google
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    
    Credentials({
      name: "login to Fresh Cart",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async function (credentials) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(credentials),
            },
          );
          const data = await response.json();
          if (data.message === "success") {
            const decoded: any = jwtDecode(data.token);
            const { role, ...userData } = data.user;
            return { ...userData, id: decoded.id, userTkn: data.token };
          }
          return null;
        } catch (error) {
          console.error("Error during credentials auth:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token.accessToken = (user as any).userTkn;
        token.userID = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.userID;
      }
      return session;
    },
  },
};