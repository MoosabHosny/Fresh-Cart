import * as zod from "zod";

export const schemaLogin = zod.object({
    // email: zod.string().regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, 'Enter Valid Email'),
        email: zod
          .string()
          .nonempty("*Please enter your email")
          .regex(
            /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
            "*Invalid email address",
          ),
    // password: zod.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/, 'Enter Valid Password'),
        password: zod
          .string()
          .nonempty("*Please enter your password")
          .regex(
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
            "*Password must be at least 8 characters long",
          ),
   

})