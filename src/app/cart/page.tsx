// import CartItemCard from "./CartItemCard";
// import { GetCart } from "./GetCart.action";

// export default async function page() {
//   const cart = await GetCart();
//   if (!cart?.data) {
//     return <h1 className="text-center mt-20">Cart is empty</h1>;
//   }

//   const products = cart.data.products;
//   const totalCartPrice = cart.data.totalCartPrice;
//   return (
//     <div className="container mx-auto  space-y-5">
//       {products.map((item: any) => (
//         <CartItemCard key={item.product._id} item={item} />
//       ))}
//     </div>
//   );
// }

import CartItemCard from "./CartItemCard";
import { GetCart } from "./Cart.action";
import EmptyCart from "./EmptyCart";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import OrderSummary from "./OrderSummary";
import DeleteItemButton from "@/components/DeleteItemButton/DeleteItemButton";

export default async function page() {
  const cart = await GetCart();

  if (!cart?.data || cart.data.products.length === 0) {
    return <EmptyCart />;
  }

  const products = cart.data.products;
  const totalCartPrice = cart.data.totalCartPrice;

  return (
    <div>
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-[13px] md:text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400 font-medium tracking-wide">
              Shopping Cart
            </span>
          </nav>

          <div className="flex flex-col  gap-2">
            <div className=" flex items-center gap-2">
              <div className="bg-green-600 p-2.5 md:p-3 rounded-xl shadow-lg shadow-green-200">
                <ShoppingCart size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#001d3d] tracking-tight">
                Shopping Cart
              </h2>
            </div>

            <div className="">
              <p className="text-slate-500 text-sm md:text-base font-medium mt-0.5">
                You have{" "}
                <span className="text-green-600 font-bold">1 item</span> in your
                cart
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div>
              <div className="container mx-auto space-y-5">
                {products.map((item: any) => (
                  <CartItemCard key={item.product._id} item={item} />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <Link
                href="/products"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                <ArrowLeft size={18} />
                <span>Continue Shopping</span>
              </Link>

              <DeleteItemButton isAll={true} />
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-6">
            <OrderSummary totalCartPrice={totalCartPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}
