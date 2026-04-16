import * as zod from "zod";

export const schema = zod
  .object({
    name: zod.string().nonempty("*Please enter your name"),
    email: zod
      .string()
      .nonempty("*Please enter your email")
      .regex(
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        "*Invalid email address",
      ),
    password: zod
      .string()
      .nonempty("*Please enter your password")
      .regex(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
        "*Password must be at least 8 characters long",
      ),
    rePassword: zod.string().nonempty("*Please confirm your password"),
    phone: zod
      .string()
      .nonempty("*Please enter your phone number")
      .regex(/^01[0125][0-9]{8}$/, "*Only Egyptian phone numbers are allowed"),
    agree: zod.boolean().refine((val) => val === true, {
      message: "You must accept terms",
    }),
  })
  .refine(
    function (data) {
      return data.password === data.rePassword;
    },
    {
      path: ["rePassword"],
      error: "Passwords do not match",
    },
  );
