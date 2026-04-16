import { toast } from "sonner";
import { signIn } from "next-auth/react";

export async function handleLogin(data: any) {

  const loginPromise = async () => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (!res || res.error) {
      throw new Error("Incorrect email or password");
    }

    return res;
  };

  toast.promise(loginPromise(), {
    loading: "Checking credentials...",
    success: () => {
      location.href = "/";
      return "Login successful";
    },
    error: "Incorrect email or password",
  });
}