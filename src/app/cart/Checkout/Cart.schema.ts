import * as zod from "zod";

export const schema = zod
  .object({
    city: zod.string().nonempty("*City name must be at least 2 characters"),
    street: zod.string().nonempty("*Address details must be at least 10 characters"),
    phone: zod
      .string()
      .nonempty("*Please enter your phone number")
      .regex(/^01[0125][0-9]{8}$/, "*Only Egyptian phone numbers are allowed"),
  })
