// import CategoryCard from "@/components/CategoryCard/CategoryCard";
// import { AllCategory } from "./Category.services";
// import Image from "next/image";
// import { Card, CardHeader, CardTitle } from "@/components/ui/card";

// export default async function page() {
//   const CategoryList = await AllCategory();

//   console.log(CategoryList)
//   return (

//         <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-8 container mx-auto mt-9">
//           {CategoryList.map((e) => (
//             // <CategoryCard key={e._id} prod={e} />
//                 <Card className="group flex flex-col items-center justify-center text-center w-full max-w-55 mx-auto p-4 gap-3 rounded-lg shadow-sm border-none transition-all duration-300 ">

//       <div className="w-[200] h-[200] flex items-center justify-center overflow-hidden rounded-2xl  bg-gray-100">
//         <Image
//           src={e.image}
//           alt={e.name}
//           width={200}
//           height={200}
//           className="object-contain transition-transform duration-300 "
//         />
//       </div>

//       <CardHeader className="p-0 w-full">
//         <CardTitle className="text-[16px] font-semibold">
//           {e.name}
//         </CardTitle>
//       </CardHeader>

//     </Card>
//           ))}
//         </div>
//   )
// }

// import { AllCategory } from "./Category.services";
// import Image from "next/image";
// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default async function Page() {
//   const CategoryList = await AllCategory();

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 container mx-auto mt-10">
//       {CategoryList.map((e) => (
//         <Card
//           key={e._id}
//           className="group flex flex-col items-center justify-center text-center w-full p-4 gap-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
//         >
//           <div className="w-37.5 h-37.5 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
//             <Image
//               src={e.image}
//               alt={e.name}
//               width={150}
//               height={150}
//               className="object-contain group-hover:scale-110 transition-transform duration-300"
//             />
//           </div>

//           <CardHeader className="p-0 w-full">
//             <CardTitle className="text-sm md:text-base font-semibold">
//               {e.name}
//             </CardTitle>
//             <div className="text-xs flex justify-center items-center gap-2 text-green-500">
//               <Link href="Category">View Subcategories</Link>
//               <ArrowRight size={12} />
//             </div>
//           </CardHeader>
//         </Card>
//       ))}
//     </div>
//   );
// }

import { AllCategory } from "./Category.services";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import PageBanner from "@/components/PageBanner/PageBanner";

export default async function Page() {
  const CategoryList = await AllCategory();

  return (
    <>
      <PageBanner
        title="All Categories"
        description="Browse our wide range of product categories"
        breadcrumb="Categories"
        icon={
          <Layers size={32} className="text-white md:w-[38px] md:h-[38px]" />
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 container mx-auto my-10">
        {CategoryList.map((e) => (
          <Card
            key={e._id}
            className="group flex flex-col items-center justify-center text-center w-full p-4 gap-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            {/* الصورة */}
            <div className="w-37.5 h-37.5 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={e.image}
                alt={e.name}
                width={150}
                height={150}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <CardHeader className="p-0 w-full">
              <CardTitle className="text-sm md:text-base font-semibold transition-colors  group-hover:text-green-500">
                {e.name}
              </CardTitle>

              <div className="text-xs flex justify-center items-center gap-2 text-green-500 opacity-0  group-hover:opacity-100  duration-300">
                {/* <Link href={`/Category/${e._id}`}>View Subcategories</Link> */}
                <Link href={`Category/${e._id}`}>
                  View Subcategories
                </Link>
                <ArrowRight size={12} />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
      {/* <div className="w-full"><ServiceCard/></div> */}
    </>
  );
}
