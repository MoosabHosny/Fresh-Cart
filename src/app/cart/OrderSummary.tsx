// "use client";
// import { useCart } from "@/Shared/context/CartContext";

// export default function OrderSummary() {
//   const { cartCount } = useCart();
//   return (
//     <>
//   <div className="max-w-[400px] bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm font-sans">
//     {/* Header */}
//     <div className="bg-[#0f172a] p-6">
//       <h2 className="text-white text-xl font-bold">Order Summary</h2>
//     </div>

//     {/* Content */}
//     <div className="p-6 space-y-6">
//       {/* Price Details */}
//       <div className="space-y-4">
//         <div className="flex justify-between items-center text-gray-600">
//           <span>Subtotal ({cartCount} items)</span>
//           <span className="font-semibold text-gray-800">149 EGP</span>
//         </div>
//         <div className="flex justify-between items-center text-gray-600">
//           <span>Shipping</span>
//           <span className="text-green-600 font-medium">
//             Calculated at checkout
//           </span>
//         </div>
//       </div>

//       <hr className="border-gray-100" />

//       {/* Total */}
//       <div className="flex justify-between items-center">
//         <span className="text-xl font-bold text-gray-800">
//           Estimated Total
//         </span>
//         <span className="text-xl font-bold text-green-600">149 EGP</span>
//       </div>

//       {/* Action Button */}
//       <div className="space-y-4">
//         <AppButton className="w-full bg-matext-main-color hover:bg-[#15803d] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//             />
//           </svg>
//           Login to Checkout
//         </App>

//         <p className="text-center text-sm text-gray-400">
//           Don't have an account?{" "}
//           <span className="text-green-600 font-semibold cursor-pointer">
//             Sign up
//           </span>
//         </p>
//       </div>

//       <hr className="border-gray-100" />

//       {/* Features List */}
//       <ul className="space-y-3 text-sm text-gray-500 pb-2">
//         <li className="flex items-center gap-2">
//           <span className="text-gray-400">✓</span> Your cart items will be
//           saved
//         </li>
//         <li className="flex items-center gap-2">
//           <span className="text-gray-400">✓</span> Track your orders easily
//         </li>
//         <li className="flex items-center gap-2">
//           <span className="text-gray-400">✓</span> Access exclusive member
//           deals
//         </li>
//       </ul>
//     </div>
//       </div>

//       <div className="max-w-[400px] bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm font-sans pb-6">
//         {/* Header - Green Background */}
//         <div className="bg-[#16a34a] p-6 text-white">
//           <div className="flex items-center gap-2 mb-1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.119-1.243l1.263-12c.056-.522.51-.923 1.035-.923h13.076c.525 0 .979.401 1.035.923Z"
//               />
//             </svg>
//             <h2 className="text-xl font-bold">Order Summary</h2>
//           </div>
//           <p className="text-sm opacity-90">12 items in your cart</p>
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-5">
//           {/* Free Shipping Banner */}
//           <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-4 flex items-center gap-4">
//             <div className="bg-[#dcfce7] p-2 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="#16a34a"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.605-8.125-8.125-8.125H11.25m9.75 13.5H12m0 0V11.25"
//                 />
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-[#16a34a] font-bold">Free Shipping!</h4>
//               <p className="text-[#16a34a] text-xs opacity-80">
//                 You qualify for free delivery
//               </p>
//             </div>
//           </div>

//           {/* Pricing */}
//           <div className="space-y-3">
//             <div className="flex justify-between text-[#475569]">
//               <span>Subtotal</span>
//               <span className="font-semibold text-[#1e293b]">21,447 EGP</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-[#475569]">Shipping</span>
//               <span className="text-[#16a34a] font-bold uppercase">Free</span>
//             </div>
//           </div>

//           <hr className="border-dashed border-gray-200" />

//           {/* Total */}
//           <div className="flex justify-between items-end">
//             <span className="text-lg font-bold text-[#1e293b]">Total</span>
//             <div className="text-right">
//               <span className="text-2xl font-black text-[#1e293b]">21,447</span>
//               <span className="text-xs text-gray-400 ml-1">EGP</span>
//             </div>
//           </div>

//           {/* Promo Code Button */}
//           <AppButton className="w-full border-2 border-dashed border-gray-200 text-gray-500 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-5 h-5 rotate-90"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 0 0 3.182 0l4.318-4.318a2.25 2.25 0 0 0 0-3.182L10.58 3.659A2.25 2.25 0 0 0 8.97 3Z"
//               />
//             </svg>
//             Apply Promo Code
//           </App>

//           {/* Checkout Button */}
//           <AppButton className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100 transition-all">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
//               />
//             </svg>
//             Secure Checkout
//           </AppButton>

//           {/* Footer Links */}
//           <div className="flex justify-center items-center gap-6 text-[11px] text-gray-400 font-medium">
//             <span className="flex items-center gap-1">🛡️ Secure Payment</span>
//             <span className="w-[1px] h-3 bg-gray-200"></span>
//             <span className="flex items-center gap-1">🚚 Fast Delivery</span>
//           </div>

//           {/* Continue Shopping */}
//           <AppButton className="w-full text-center text-[#16a34a] font-bold text-sm hover:underline mt-2">
//             ← Continue Shopping
//           </AppButton>
//         </div>
//           </div>

//     </>
//   );
// }

"use client";

import { useCart } from "@/Shared/context/CartContext";
import { ShieldHalf, Truck } from "lucide-react";
import Link from "next/link";

export default function OrderSummary({
  totalCartPrice,
}: {
  totalCartPrice: number;
}) {
  const { cartCount } = useCart();

  return (
    <>
      <div className="max-w-110 bg-white border border-gray-200 rounded-[1rem] overflow-hidden shadow-sm font-sans pb-6">
        {/* Header - Green Background */}
        <div className="bg-main-color p-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="text-xl font-bold">Order Summary</h2>
          </div>
          <p className="text-sm opacity-90">{cartCount} items in your cart</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Free Shipping Banner */}
          <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-[#dcfce7] p-2 rounded-full">
              <Truck
                size={20}
                color="var(--color-main-color)"
                fill="var(--color-main-color)"
              />
            </div>
            <div>
              <h4 className="text-main-color font-bold">Free Shipping!</h4>
              <p className="text-main-color text-xs opacity-80">
                You qualify for free delivery
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-3">
            <div className="flex justify-between text-[#475569]">
              <span>Subtotal</span>
              <span className="font-semibold text-[#1e293b]">
                {totalCartPrice} EGP
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#475569]">Shipping</span>
              <span className="text-main-color font-bold uppercase">Free</span>
            </div>
          </div>

          <hr className="border-dashed border-gray-200" />

          {/* Total */}
          <div className="flex justify-between items-end">
            <span className="text-lg font-extrabold text-[#1e293b]">Total</span>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-[#1e293b]">
                {totalCartPrice}
              </span>
              <span className="text-xs  text-gray-400 ml-1">EGP</span>
            </div>
          </div>

          {/* Promo Code Button */}
          <div className="w-full border-2 border-dashed border-gray-200 text-gray-500 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            Apply Promo Code
          </div>

          {/* Checkout Button */}
          <Link
            href="cart/Checkout"
            className="w-full bg-main-color hover:bg-[#15803d] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                clip-rule="evenodd"
              />
            </svg>
            Secure Checkout
          </Link>

          {/* Footer Links */}
          <div className="flex justify-center items-center gap-6 text-[11px] text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <ShieldHalf
                size={18}
                color="var(--color-main-color)"
                fill="var(--color-main-color)"
              />
              Secure Payment
            </span>
            <span className="w-px h-3 bg-gray-200"></span>
            <span className="flex items-center gap-1">
              <Truck
                size={18}
                color="var(--color-blue-500)"
                fill="var(--color-blue-500)"
              />{" "}
              Fast Delivery
            </span>
          </div>

          {/* Continue Shopping */}
          <div className=" flex justify-center">
            <Link
              href="/"
              className="w-full text-center text-main-color font-bold text-sm hover:underline mt-2"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
