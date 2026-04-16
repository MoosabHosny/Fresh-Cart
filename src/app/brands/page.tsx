// import Image from "next/image";
// import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import PageBanner from "@/components/PageBanner/PageBanner";
// import { getAllBrands } from "./brands.action";

// export default async function Page() {
//   const CategoryList = await getAllBrands();
//   console.log('CategoryList-=0000>> ',CategoryList)

//   return (
//     <>
//       {/* <PageBanner
//         title="All Categories"
//         description="Browse our wide range of product categories"
//         breadcrumb="Categories"
//       /> */}
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 container mx-auto my-10">
//       {CategoryList.map((e) => (
//         <Card
//           key={e._id}
//           className="group flex flex-col items-center justify-center text-center w-full p-4 gap-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
//         >
//           {/* الصورة */}
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
//             <CardTitle className="text-sm md:text-base font-semibold transition-colors  group-hover:via-violet-600">
//               {e.name}
//             </CardTitle>

//             <div className="text-xs flex justify-center items-center gap-2 via-violet-600 opacity-0  group-hover:opacity-100  duration-300">
//               <Link href="Category">View Subcategories</Link>
//               <ArrowRight size={12} />
//             </div>
//           </CardHeader>
//         </Card>
//       ))}
//       </div>
//     </>
//   );
// }


import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Tags } from "lucide-react";
import PageBanner from "@/components/PageBanner/PageBanner";
import { getAllBrands } from "./brands.action";

export default async function Page() {
  const CategoryList = await getAllBrands();
  console.log('CategoryList-=0000>> ',CategoryList)

  return (
    <>
      {/* <Layers size={32} className="text-white md:w-[38px] md:h-[38px]" /> */}
      <PageBanner 
        title="Top Brands" 
        description="Shop from your favorite brands" 
        breadcrumb="Brands"
        icon={<Tags size={32} />}
        bgColor='#863DFF'
      />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 container mx-auto my-10">
      {CategoryList.map((e:any) => (
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
            <CardTitle className="text-sm md:text-base font-semibold transition-colors group-hover:text-violet-600">
              {e.name}
            </CardTitle>

            <div className="text-xs flex justify-center items-center gap-2 group-hover:text-violet-600 opacity-0  group-hover:opacity-100  duration-300">
              <Link href={`brands/${e._id}`}>View Products</Link>
              <ArrowRight size={12} />
            </div>
          </CardHeader>
        </Card>
      ))}
      </div>
    </>
  );
}