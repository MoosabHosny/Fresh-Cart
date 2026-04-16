"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import AppButton from "@/Shared/AppButton/AppButton";
import { UserPlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { SedUserData } from "./register.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./register.schema";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      agree: false,
    },
    resolver: zodResolver(schema),
  });

  return (
    <>
      {/* أزرار تسجيل الدخول الاجتماعي */}
      <div className="flex justify-around gap-4 mb-6">
        <AppButton
          type="button"
          variant="outline"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex-1 flex justify-center border-2 rounded-[15px] hover:bg-gray-100 gap-2 py-3 ">
          <FcGoogle size={20} /> Google
        </AppButton>
        <AppButton
          variant="outline"
          className="flex-1 flex justify-center border-2 rounded-[15px] hover:bg-gray-100 gap-2 py-3"
        >
          <FaFacebook size={20} color="#1877F2" /> Facebook
        </AppButton>
      </div>
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200"></span>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-4 text-gray-400 font-medium">or</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(SedUserData)}>
        {/* Name */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Name*</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Ali"
                autoComplete="off"
                type="text"
                className="mb-5 pt-2 px-3 rounded-[6px] focus-visible:ring-[#8BD1A4]"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email */}
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
                placeholder="ali@example.com"
                autoComplete="off"
                type="email"
                className="mb-5 pt-2 px-3 rounded-[6px] focus-visible:ring-[#8BD1A4]"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password*</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="create a strong password"
                autoComplete="off"
                type="password"
                className="mb-5 pt-2 px-3 rounded-[6px] focus-visible:ring-[#8BD1A4]"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Confirm Password*</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="confirm your password"
                autoComplete="off"
                type="password"
                className="mb-5 pt-2 px-3 rounded-[6px] focus-visible:ring-[#8BD1A4]"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone Number*</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="+1 234 567 8900"
                autoComplete="off"
                type="text"
                className="mb-5 pt-2 px-3 rounded-[6px] focus-visible:ring-[#8BD1A4]"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Checkbox */}
        <div className="flex items-center space-x-3 py-2">
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
            I agree to the{" "}
            <Link href="" className="text-emerald-500 hover:text-emerald-400">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="" className="text-emerald-500 hover:text-emerald-400">
              Privacy Policy
            </Link>{" "}
            *
          </Label>
        </div>

        <AppButton
          type="submit"
          className="w-full bg-[#16a34a] hover:bg-[#15803d] h-14 text-white flex justify-center items-center
          font-bold text-lg rounded-xl shadow-sm gap-2 transition-all active:scale-[0.98]"
        >
          <UserPlus size={20} fill="white" /> Create My Account
        </AppButton>

        <div
          className="pt-10 text-center px-14 mt-3 border-t-2  border-gray-300
         text-sm text-gray-500"
        >
          Already have an account?
          <Link
            href="/login"
            className="text-emerald-500 font-medium hover:text-emerald-400"
          >
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
}
