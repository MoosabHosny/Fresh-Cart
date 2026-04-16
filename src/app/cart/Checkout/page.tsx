// import { GetCart } from "../Cart.action";
// import CheckoutClientWrapper from "./CheckoutClientWrapper";

// export default async function Page() {
//   const {cartId} = await GetCart();
//   // console.log('data======>>>>>>>>0',cartId)
//   return (
//     <CheckoutClientWrapper cartId={cartId} />
//   );
// }


import { GetCart } from "../Cart.action";
import CheckoutClientWrapper from "./CheckoutClientWrapper";

export default async function Page() {
  const cartData = await GetCart();
  const cartId = cartData?.data?._id; 
// console.log('cartId -------',cartId)
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <CheckoutClientWrapper cartId={cartId} />
    </div>
  );
}