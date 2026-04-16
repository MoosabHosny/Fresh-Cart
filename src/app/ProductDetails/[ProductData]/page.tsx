// import { getProductDetails } from "@/app/home.services";
// import { Star } from "lucide-react";

// // import { promises } from "dns"

// export default async function page({
//   params,
// }: {
//   params: Promise<{ ProductData: string }>;
// }) {
//   const { ProductData } = await params;
//   const productDetails = await getProductDetails(ProductData);
//   // console.log(productDetails)
//   const {
//     imageCover,
//     images,
//     title,
//     ratingsAverage,
//     ratingsQuantity,
//     category,
//     brand,
//     price,
//     priceAfterDiscount,
//     description,

//   } = productDetails;
//   return (
//     <div className="max-w-7xl mx-auto p-5">
//       <div className="grid grid-cols-12 gap-6">
//         <div className="col-span-12 md:col-span-4 lg:col-span-3">
//           <div className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm">
//             <img
//               src={imageCover}
//               alt={title}
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>
//         <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-3">
//           {/* التصنيفات - Badges */}
//           <div className="flex items-center gap-2 mb-1">
//             <span className="bg-[#f0fdf4] text-[#16a34a] text-xs font-medium px-3 py-1 rounded-full border border-[#dcfce7]">
//               {category?.name}
//             </span>
//             <span className="bg-[#f3f4f6] text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
//               {brand?.name}
//             </span>
//           </div>

//           {/* Title */}
//           <h2 className="text-3xl font-bold text-[#1a1c1e] tracking-tight leading-tight uppercase">
//             {title}
//           </h2>

//           {/*  Ratings */}
//           <div className="flex gap-3 items-center my-2">
//             <div className="flex">
//               {Array.from({ length: Math.floor(ratingsAverage) }).map(
//                 (e, i) => (
//                   <Star key={i} color="yellow" fill="yellow" />
//                 ),
//               )}
//               {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
//                 (e, i) => (
//                   <Star key={i} color="yellow" />
//                 ),
//               )}
//             </div>
//             <div className="">
//               {ratingsAverage} ({ratingsQuantity} reviews)
//             </div>
//           </div>

//           {/* Price & Discount */}
//           <div className="flex items-center gap-4 mt-2">
//             {priceAfterDiscount ? (
//               <>
//                 <span className="text-3xl font-bold text-black tracking-tighter">
//                   {priceAfterDiscount} EGP
//                 </span>
//                 <span className="text-xl text-gray-400 line-through decoration-1">
//                   {price} EGP
//                 </span>
//                 <span className="bg-[#ff3b3b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
//                   Save{" "}
//                   {Math.round(((price - priceAfterDiscount) / price) * 100)}%
//                 </span>
//               </>
//             ) : (
//               <span className="text-3xl font-bold text-black tracking-tighter">
//                 {price} EGP
//               </span>
//             )}
//           </div>

//           <div className="flex items-center gap-2 mt-2">
//             <div className="w-2 h-2 rounded-full bg-main-color"></div>
//             <span className="text-main-color font-medium text-sm">
//               In Stock
//             </span>
//           </div>

//           {/* Description */}
//           <div className="mt-6 pt-6 border-t border-gray-100">
//             <p className="text-gray-500 font-medium leading-relaxed">
//               {description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { getProductDetails } from "@/app/home.services";
import { Star, ShoppingCart, Zap, Heart, Share2 } from "lucide-react";
import AppButton from "@/Shared/AppButton/AppButton";
import QuantityCounter from "@/components/QuantityCounter/QuantityCounter";
import AddToCart from "@/components/AddToCart/AddToCart";

export default async function page({
  params,
}: {
  params: Promise<{ ProductData: string }>;
}) {
  const { ProductData } = await params;
  const productDetails = await getProductDetails(ProductData);

  const {
    imageCover,
    images,
    title,
    ratingsAverage,
    ratingsQuantity,
    category,
    brand,
    price,
    priceAfterDiscount,
    description,
    quantity,
    _id
  } = productDetails;

  // console.log('productDetails=====>>>>>',productDetails);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sticky md:col-span-4 lg:col-span-3">
          <div className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <img
              src={imageCover}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex  mt-2">
            {images.map((e) => (
              <div>
                <img src={e} alt={title} />
              </div>
            ))}
          </div>
        </div>
        {/* col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-3 */}
        <div
          className="
        col-span-12 
  md:col-span-8 
  lg:col-span-9 
  flex flex-col 
  gap-6   
  p-6
  border
  border-gray-200
  rounded-2xl
        "
        >
          {/* Badges */}
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#f0fdf4] text-[#16a34a] text-xs font-medium px-3 py-1 rounded-full border border-[#dcfce7]">
              {category?.name}
            </span>
            <span className="bg-[#f3f4f6] text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
              {brand?.name}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-[#1a1c1e] tracking-tight leading-tight uppercase">
            {title}
          </h2>

          <div className="flex gap-3 items-center my-2">
            <div className="flex">
              {Array.from({ length: Math.floor(ratingsAverage) }).map(
                (_, i) => (
                  <Star key={i} size={18} color="#facc15" fill="#facc15" />
                ),
              )}
              {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
                (_, i) => (
                  <Star key={i} size={18} color="#facc15" />
                ),
              )}
            </div>
            <div className="text-gray-500 text-sm">
              {ratingsAverage} ({ratingsQuantity} reviews)
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            {priceAfterDiscount ? (
              <>
                <span className="text-3xl font-bold text-black tracking-tighter">
                  {priceAfterDiscount} EGP
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {price} EGP
                </span>
                <span className="bg-[#ff3b3b] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Save{" "}
                  {Math.round(((price - priceAfterDiscount) / price) * 100)}%
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-black tracking-tighter">
                {price} EGP
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-main-color"></div>
            <span className="text-main-color font-medium text-sm">
              In Stock
            </span>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-gray-500 font-medium leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Quantity
              </label>
              <QuantityCounter count={1} productId={_id}  />
            </div>

            <div className="bg-[#f8f9fa] p-4 rounded-xl flex justify-between items-center border border-gray-100">
              <span className="text-gray-600 font-medium">Total Price:</span>
              <span className="text-2xl font-black text-main-color">
                {priceAfterDiscount || price}.00 EGP
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* <AppButton className="flex-1 py-5 bg-main-color hover:bg-opacity-90 text-white font-bold  flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </AppButton> */}
              <AddToCart
                id={_id}
                className="
  flex-1 
  bg-main-color 
  hover:bg-opacity-90 
  text-white 
  font-bold 
  flex items-center justify-center gap-2
  w-129.5   
  h-13        
  rounded-[12px] 
  pt-3.5       
  pb-3.5      
  px-6      
"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </AddToCart>
              <AppButton
                className="  flex-1  
  hover:bg-opacity-90 
  text-white 
  font-bold 
  flex items-center justify-center gap-2
  w-129.5   
  h-13        
  rounded-[12px] 
  pt-3.5       
  pb-3.5      
  px-6   "
              >
                <Zap size={20} className="fill-white" />
                Buy Now
              </AppButton>
            </div>

            <div className="flex gap-2">
              <AppButton
                className=" flex-4 
            bg-white 
              text-gray-600 
              border border-gray-400 
              font-bold 
              flex items-center justify-center gap-2 
              transition-all duration-300
              hover:border-main-color 
              hover:text-main-color
              w-149       
              h-13       
              rounded-[12px]  
              pt-3      
              pb-3      
              px-4 
              "
              >
                <Heart size={18} />
                Add to Wishlist
              </AppButton>
              <AppButton
                className="
              flex-1 
              hover:border-main-color
               hover:text-main-color
                bg-white
                  hover:bg-opacity-90 
                  text-gray-600
                  border border-gray-400
                  font-bold 
                  flex items-center justify-center gap-2
                  w-129.5   
                  h-13        
                  rounded-[12px] 
                  pt-3.5       
                  pb-3.5      
                  px-6
                  group"
              >
                <Share2
                  size={18}
                  className="text-gray-600 group-hover:text-main-color"
                />
              </AppButton>
            </div>
          </div>
          {/* ============================================================ */}
        </div>
      </div>
    </div>
  );
}
