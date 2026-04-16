import { NextAuthConfig } from "@/nextauth/nextauth";
import NextAuth from "next-auth";

const myRouteHandlerObject = NextAuth(NextAuthConfig);
export {myRouteHandlerObject as GET , myRouteHandlerObject as POST}


