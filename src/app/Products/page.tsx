import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { getAllProducts } from "../home.services";
import PageBanner from "@/components/PageBanner/PageBanner";
import { Package } from "lucide-react";

export default async function page() {
  const ProductsList = await getAllProducts();
  // console.log(ProductsList.length)
  return (
    <>
      <PageBanner
        title="All Products"
        description="Explore our complete product collection"
        breadcrumb="All Products"
        icon={<Package size={32} />}
      />
      <div className="container mx-auto">
        <div className="pt-6">
          <p>Showing {ProductsList.length} products</p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-5 gap-8 container mx-auto mt-6">
          {ProductsList.map((e) => (
            <ProductsCard key={e._id} prod={e} />
          ))}
        </div>
      </div>
    </>
  );
}
