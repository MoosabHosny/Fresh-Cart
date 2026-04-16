import { getAllProducts } from "@/app/home.services";
import EmptyState from "@/components/EmptyState/EmptyState";
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { Filter, FolderClosed, Tags, X } from "lucide-react";
import Link from "next/link";
import { GetSpecificCategory, GetSpecificSubCategory } from "../../Category.services";
import PageBanner from "@/components/PageBanner/PageBanner";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>; 
    }) {
    
  const { id } = await params;
  const bb = await GetSpecificSubCategory(id);
    console.log('bb-----------  ',bb)
  const getBrandProducts = await getAllProducts(undefined,id);
// console.log("getBrandProducts===---=>> ", getBrandProducts);
  return (
    <>
      {bb && (
        <PageBanner
          title={bb.name}
          description={`Browse  ${bb.name} products`}
          breadcrumb={bb.name}
          icon={<FolderClosed className="w-8 h-8  fill-current" />}
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
              className="flex gap-2 items-center text-green-500 py-1.5 px-3 rounded-full bg-green-200/10 border border-green-400/20 hover:bg-green-400/20 transition-all"
            >
              <FolderClosed size={14} fill="var(--color-green-500)" color="var(--color-green-500)" />

              <span className="text-xs font-bold uppercase tracking-wider">
                {bb.name}
              </span>

              <X
                size={14}
                color="var(--color-green-500)"
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
