// "use client";
// import {
//   MapPin,
//   Home,
//   Phone,
//   Building2,
//   Wallet,
//   Banknote,
//   CheckCircle2,
//   CreditCard,
//   ShieldCheck,
// } from "lucide-react";
// import { forwardRef, useImperativeHandle, useState } from "react";
// import Visa from "@images/Visa.jpg";
// import Mastercard from "@images/Mastercard.jpg";
// import Amex from "@images/Amex.jpg";
// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { schema } from "./Cart.schema";

// interface Props {
//   onMethodChange: (method: string) => void;
// }

// export const ShippingAddressForm = forwardRef(({ onMethodChange }: Props, ref) => {
//   const { handleSubmit, control, getValues } = useForm({
//     defaultValues: {
//       // details: "",
//       phone: "",
//       city: "",
//       street: ""
//     },
//     resolver: zodResolver(schema),
//   });

//   const [method, setMethod] = useState("cash");

//   const handleMethodSelect = (selectedMethod: string) => {
//     setMethod(selectedMethod);
//     onMethodChange(selectedMethod);
//   };

//   useImperativeHandle(ref, () => ({
//     submitForm: () => {
//       const data = getValues();
//       return { ...data, paymentMethod: method };
//     },
//   }));

//   return (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//         <div className="bg-[#16a34a] p-4 flex items-center gap-2 text-white">
//           <Home size={20} fill="white" />
//           <h2 className="font-semibold text-lg">Shipping Address</h2>
//         </div>
//         <div className="p-6 space-y-6">
//           <Controller
//             name="city"
//             control={control}
//             render={({ field }) => (
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">City *</label>
//                 <div className="relative">
//                   <Building2
//                     className="absolute left-3 top-3 text-gray-400"
//                     size={18}
//                   />
//                   <input
//                     {...field}
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
//                     placeholder="e.g. Cairo, Alexandria, Giza"
//                   />
//                 </div>
//               </div>
//             )}
//           />
//           <Controller
//             name="street"
//             control={control}
//             render={({ field }) => (
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Street Address *</label>
//                 <div className="relative">
//                   <MapPin
//                     className="absolute left-3 top-3 text-gray-400"
//                     size={18}
//                   />
//                   <input
//                     {...field}
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
//                     placeholder="Street name, building number, floor, apartment..., Street..."
//                   />
//                 </div>
//               </div>
//             )}
//           />
//           <Controller
//             name="phone"
//             control={control}
//             render={({ field }) => (
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Phone Number *</label>
//                 <div className="relative">
//                   <Phone
//                     className="absolute left-3 top-3 text-gray-400"
//                     size={18}
//                   />
//                   <input
//                     {...field}
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
//                     placeholder="01xxxxxxxxx"
//                   />
//                 </div>
//               </div>
//             )}
//           />
//         </div>
//       </div>

//       <div className="mt-10 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm">
//         <div className="bg-[#108942] p-4 text-white">
//           <div className="flex items-center gap-2 mb-1">
//             <Wallet size={20} fill="currentColor" />
//             <h2 className="text-lg font-bold">Payment Method</h2>
//           </div>
//           <p className="text-sm opacity-90">Choose how you'd like to pay</p>
//         </div>

//         <div className="p-5 space-y-4">
//           <div
//             onClick={() => handleMethodSelect("cash")}
//             className={`relative flex items-center justify-between p-4 cursor-pointer rounded-xl border-2 transition-all ${
//               method === "cash"
//                 ? "border-[#22c55e] bg-[#f0fdf4] shadow-md"
//                 : "border-gray-100 bg-white hover:border-gray-200"
//             }`}
//           >
//             <div className="flex items-center gap-4">
//               <div
//                 className={`p-3 rounded-lg shadow-inner ${method === "cash" ? "bg-[#22c55e] text-white" : "bg-gray-100 text-gray-500"}`}
//               >
//                 <Banknote size={24} />
//               </div>
//               <div>
//                 <h3
//                   className={`font-bold ${method === "cash" ? "text-[#108942]" : "text-gray-800"}`}
//                 >
//                   Cash on Delivery
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   Pay when your order arrives at your doorstep
//                 </p>
//               </div>
//             </div>
//             {method === "cash" ? (
//               <CheckCircle2
//                 className="text-[#108942]"
//                 fill="currentColor"
//                 stroke="white"
//                 size={24}
//               />
//             ) : (
//               <div className="w-6 h-6 border-2 border-gray-200 rounded-full" />
//             )}
//           </div>

//           <div
//             onClick={() => handleMethodSelect("online")}
//             className={`relative flex items-center justify-between p-4 cursor-pointer rounded-xl border-2 transition-all ${
//               method === "online"
//                 ? "border-[#22c55e] bg-[#f0fdf4] shadow-md"
//                 : "border-gray-100 bg-white hover:border-gray-200"
//             }`}
//           >
//             <div className="flex items-center gap-4">
//               <div
//                 className={`p-3 rounded-lg ${method === "online" ? "bg-[#22c55e] text-white" : "bg-gray-100 text-gray-400"}`}
//               >
//                 <CreditCard size={24} />
//               </div>
//               <div>
//                 <h3
//                   className={`font-bold ${method === "online" ? "text-[#108942]" : "text-gray-800"}`}
//                 >
//                   Pay Online
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   Secure payment with Credit/Debit Card via Stripe
//                 </p>
//                 <div className="flex gap-2 opacity-80">
//                   <img src={Visa.src} alt="Visa" className="h-5" />
//                   <img src={Mastercard.src} alt="Mastercard" className="h-5" />
//                   <img src={Amex.src} alt="Amex" className="h-5" />
//                 </div>
//               </div>
//             </div>
//             {method === "online" ? (
//               <CheckCircle2
//                 className="text-[#108942]"
//                 fill="currentColor"
//                 stroke="white"
//                 size={24}
//               />
//             ) : (
//               <div className="w-6 h-6 border-2 border-gray-200 rounded-full" />
//             )}
//           </div>

//           <div className="flex items-center gap-3 p-4 bg-[#f0fdf4] rounded-xl border border-[#dcfce7]">
//             <div className="p-2 bg-white rounded-full shadow-sm text-[#108942]">
//               <ShieldCheck size={20} />
//             </div>
//             <div>
//               <h4 className="text-sm font-bold text-[#108942]">
//                 Secure & Encrypted
//               </h4>
//               <p className="text-xs text-gray-600 font-medium">
//                 Your payment info is protected with 256-bit SSL encryption
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default ShippingAddressForm;

"use client";
import {
  MapPin,
  Home,
  Phone,
  Building2,
  Wallet,
  Banknote,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { forwardRef, useImperativeHandle, useState } from "react";
import Visa from "@images/Visa.jpg";
import Mastercard from "@images/Mastercard.jpg";
import Amex from "@images/Amex.jpg";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./Cart.schema";

interface Props {
  onMethodChange: (method: string) => void;
}

export const ShippingAddressForm = forwardRef<any, Props>(
  ({ onMethodChange }, ref) => {
    const { handleSubmit, control } = useForm({
      defaultValues: {
        phone: "",
        city: "",
        street: "",
      },
      resolver: zodResolver(schema),
    });

    const [method, setMethod] = useState("cash");

    const handleMethodSelect = (selectedMethod: string) => {
      setMethod(selectedMethod);
      onMethodChange(selectedMethod);
    };

    // ⭐ التصحيح المهم: تشغيل validation
    useImperativeHandle(ref, () => ({
      submitForm: () =>
        new Promise((resolve, reject) => {
          handleSubmit(
            (data) => resolve({ ...data, paymentMethod: method }),
            (errors) => reject(errors)
          )();
        }),
    }));

    return (
      <div className="space-y-6">
        {/* Shipping Address */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-[#16a34a] p-4 flex items-center gap-2 text-white">
            <Home size={20} fill="white" />
            <h2 className="font-semibold text-lg">Shipping Address</h2>
          </div>

          <div className="p-6 space-y-6">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  <label className="text-sm font-medium">City *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input {...field} className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>
              )}
            />

            <Controller
              name="street"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Street Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input {...field} className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input {...field} className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* Payment */}
        <div className="mt-10 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="bg-[#108942] p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <Wallet size={20} fill="currentColor" />
              <h2 className="text-lg font-bold">Payment Method</h2>
            </div>
          </div>

          <div className="p-5 space-y-4">
            {/* Cash */}
            <div
              onClick={() => handleMethodSelect("cash")}
              className={`flex items-center justify-between p-4 cursor-pointer rounded-xl border-2 ${
                method === "cash" ? "border-green-500 bg-green-50" : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <Banknote size={24} />
                <h3 className="font-bold">Cash on Delivery</h3>
              </div>
              {method === "cash" && <CheckCircle2 size={24} />}
            </div>

            {/* Online */}
            <div
              onClick={() => handleMethodSelect("online")}
              className={`flex items-center justify-between p-4 cursor-pointer rounded-xl border-2 ${
                method === "online" ? "border-green-500 bg-green-50" : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <CreditCard size={24} />
                <div className="flex gap-2">
                  <img src={Visa.src} className="h-5" />
                  <img src={Mastercard.src} className="h-5" />
                  <img src={Amex.src} className="h-5" />
                </div>
              </div>
              {method === "online" && <CheckCircle2 size={24} />}
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border">
              <ShieldCheck size={20} />
              <p className="text-sm font-medium">256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);