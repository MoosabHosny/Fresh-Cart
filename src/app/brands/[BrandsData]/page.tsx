// import ProductsCard from "@/components/ProductsCard/ProductsCard";
// import { GetSpecificBrand } from "../brands.action";
// import { getAllProducts } from "@/app/home.services";

// export default async function Page({
//   params,
// }: {
//   params: { BrandsData: string };
//     }) {
//     const { BrandsData } = await params;

//     const GetBrand = await getAllProducts(BrandsData);

//   return (
//     <>
//         {
//       if(GetBrand) {
//           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 container mx-auto mt-6">
//       {GetBrand.map((e: any) => (
//         <ProductsCard key={e._id} prod={e} />
//       ))}
//     </div>
//       }}
//     </>
//   );
// }

import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { getAllProducts } from "@/app/home.services";
// import EmptyCart from "@/app/cart/EmptyCart";
import PageBanner from "@/components/PageBanner/PageBanner";
import { Filter, Tags, X } from "lucide-react";
import { GetSpecificBrand } from "../brands.action";
import Link from "next/link";
import EmptyState from "@/components/EmptyState/EmptyState";

export default async function Page({
  params,
}: {
  params: Promise<{ BrandsData: string }>; 
}) {
  const { BrandsData } = await params;
  const Brand = await GetSpecificBrand(BrandsData);
  // console.log("Brand===---=>> ", Brand);
  const getBrandProducts = await getAllProducts(BrandsData);

  return (
    <>
      {Brand && (
        <PageBanner
          title={Brand.data.name}
          description={`Shop ${Brand.data.name} Products`}
          breadcrumb={Brand.data.name}
          icon={
            <img
              src={Brand.data.image}
              alt={Brand.data.name}
              className="w-12 h-12"
            />
          }
        />
      )}
      <div className="container mx-auto mt-6">
        <div className="pb-5">
          <div className="flex gap-3 items-center">
            <span className="flex gap-1 justify-center items-center">
              <Filter size={16} fill="currentColor" />
              Active Filters:
            </span>
            <Link
              href="/Products"
              className="flex gap-2 items-center text-[#863DFF] py-1.5 px-3 rounded-full bg-[#863DFF]/10 border border-[#863DFF]/20 hover:bg-[#863DFF]/20 transition-all"
            >
              <Tags size={14} fill="#863DFF" color="#863DFF" />

              <span className="text-xs font-bold uppercase tracking-wider">
                {Brand.data.name}
              </span>

              <X
                size={14}
                color="#863DFF"
                className="cursor-pointer hover:scale-110"
              />
            </Link>
            <Link href="/Products">Clear all</Link>
          </div>
          <div className="pt-6 text-gray-500">
            <p>Showing {getBrandProducts.length} products</p>
          </div>
        </div>
        {getBrandProducts && getBrandProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {getBrandProducts.map((product: any) => (
              <ProductsCard key={product._id} prod={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <EmptyState/>
          </div>
        )}
      </div>
    </>
  );
}
