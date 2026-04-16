"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppButton from "@/Shared/AppButton/AppButton";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { schemaLogin } from "./loginSchema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { handleLogin } from "./login.services";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schemaLogin),
    // resolver: zodResolver(schema),
  });
  async function sandUserLogin(data: any) {
    const response: any = await handleLogin(data);
    if (response?.message === "success") {
      router.push("/");
    }
  }
  // function sandUserLogin() {
  //   console.log("Login");
  // }

  return (
    <>
      {/* أزرار تسجيل الدخول الاجتماعي */}
      <div className="flex flex-col gap-4 mb-6">
        <AppButton
          type="button"
          variant="outline"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex justify-center border-2 rounded-[15px] hover:bg-green-100 hover:border-green-300 gap-2 py-3 w-full"
        >
          <FcGoogle size={20} />
          Continue with Google
        </AppButton>
        <AppButton
          variant="outline"
          className="flex justify-center border-2 rounded-[15px] hover:bg-green-100 hover:border-green-300 gap-2 py-3"
        >
          <FaFacebook color="#1877F2" size={20} />
          Continue with Facebook
        </AppButton>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200"></span>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-4 text-gray-400 font-medium uppercase">
            or CONTINUE WITH EMAIL
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(sandUserLogin)}>
        {/* Email */}
        <div className="mt-4">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email*</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  autoComplete="off"
                  type="email"
                  className="mb-0 pt-2 px-3 rounded-[15px] py-6 focus-visible:ring-[#8BD1A4]"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        {/* Password */}
        <div className="my-4">
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password*</FieldLabel>

                <div className="relative">
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    className="mb-0 pt-2 px-3 rounded-[15px] py-6 pr-14 focus-visible:ring-[#8BD1A4]"
                  />

                  <AppButton
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute! right-2 top-1/2 -translate-y-1/2 p-2 min-w-0 rounded-full bg-transparent hover:bg-transparent shadow-none"
                  >
                    {showPassword ? (
                      <EyeOff className="text-black" size={20} />
                    ) : (
                      <Eye className="text-black" size={20} />
                    )}
                  </AppButton>
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Checkbox */}
        {/* <div className="flex items-center space-x-3 py-2">
          <Controller
            name="agree"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-gray-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                />
                {fieldState.invalid && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error?.message}
                  </p>
                )}
              </>
            )}
          />

          <Label
            htmlFor="terms"
            className="text-[13px] text-gray-500 font-medium leading-tight"
          >
            Keep me signed in
          </Label>
        </div> */}

        <AppButton
          type="submit"
          className="w-full bg-[#16a34a] hover:bg-[#15803d] h-14 text-white
          font-bold text-lg rounded-xl shadow-sm gap-2 transition-all active:scale-[0.98]"
        >
          Sign In
        </AppButton>

        <div
          className="pt-10 text-center px-14 mt-3 border-t-2  border-gray-300
         text-sm text-gray-500 font-bold"
        >
          New to FreshCart?
          <Link
            href="/register"
            className="text-emerald-500 ms-2  font-bold hover:text-emerald-400"
          >
            Create an account
          </Link>
        </div>
      </form>
    </>
  );
}
