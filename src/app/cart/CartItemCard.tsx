// "use client";

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Minus, Plus, Trash2 } from "lucide-react";

// export default function CartItemCard() {
//   return (
//     <Card className="mx-auto w-full max-w-3xl p-4 shadow-sm border rounded-2xl">
//       <CardContent className="p-0">
//         <div className="flex items-center justify-between gap-5">

//           {/* LEFT SIDE */}
//           <div className="flex items-center gap-4">
//             {/* صورة المنتج */}
//             <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
//               <Image
//                 src="/boots.png" // حط صورة المنتج هنا
//                 alt="product"
//                 width={70}
//                 height={70}
//               />
//             </div>

//             {/* بيانات المنتج */}
//             <div className="flex flex-col gap-1">
//               <h3 className="font-semibold text-lg">
//                 Orca Leather Boots Anthracite
//               </h3>

//               <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full w-fit">
//                 Men's Fashion
//               </span>

//               <span className="text-green-600 font-bold text-lg">
//                 3,064 EGP
//               </span>

//               {/* عداد الكمية */}
//               <div className="flex items-center gap-3 mt-2">
//                 <div className="flex items-center border rounded-lg overflow-hidden">
//                   <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
//                     <Minus size={16} />
//                   </button>

//                   <span className="px-4 font-semibold">1</span>

//                   <button className="px-3 py-1 bg-green-600 text-white hover:bg-green-700">
//                     <Plus size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex flex-col items-end gap-3">
//             <div className="text-right">
//               <p className="text-sm text-gray-400">Total</p>
//               <p className="font-bold text-lg">3,064 EGP</p>
//             </div>

//             <Button
//               size="icon"
//               variant="destructive"
//               className="rounded-lg w-10 h-10"
//             >
//               <Trash2 size={18} />
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// "use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import QuantityCounter from "@/components/QuantityCounter/QuantityCounter";
import DeleteItemButton from "@/components/DeleteItemButton/DeleteItemButton";

export default function CartItemCard({ item }: any) {
  const product = item.product;


  return (
    <Card className="mx-auto w-full max-w-3xl p-4 shadow-sm border rounded-2xl">
      <CardContent className="p-0">
        <div className="flex items-center justify-between gap-5">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
              <Image
                src={product.imageCover}
                alt={product.title}
                width={70}
                height={70}
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">{product.title}</h3>

              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full w-fit">
                {product.category.name}
              </span>

              <span className="text-green-600 font-bold text-lg">
                {item.price} EGP
              </span>

              {/* quantity */}
              <div className="flex items-center gap-3 mt-2">
                <QuantityCounter count={item.count} productId={product._id} />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">
            <div className="text-right">
              <p className="text-sm text-gray-400">Total</p>
              <p className="font-bold text-lg">{item.price * item.count} EGP</p>
            </div>

            <DeleteItemButton
              productName={product.title}
              id={product.id}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
