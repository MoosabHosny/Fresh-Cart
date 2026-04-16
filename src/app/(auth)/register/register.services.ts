// // import { toast } from "sonner";
// import { Toaster } from "@/components/ui/sonner";
// import {UserDataType } from "./register";
// import { handleUserData } from "./register.action";
// import { toast } from "sonner";

// export async function SedUserData(UserData: UserDataType) {
//     const response = await handleUserData(UserData);
//     if (response === true) {
//         toast.success("Account created successfully", {
//             position:"top-right"
//         })
//     } else {
//         toast.error(response, {
//             position:"top-right"
//         })
//     }

// }


import { UserDataType } from "./register";
import { handleUserData } from "./register.action";
import { toast } from "sonner";

export async function SedUserData(UserData: UserDataType) {
  const response = await handleUserData(UserData);

  if (response === true) {
    toast.success("Account created successfully");
    setTimeout(() => {
      location.href = "/login";
    });
  } else {
    toast.error(response);
  }
}
