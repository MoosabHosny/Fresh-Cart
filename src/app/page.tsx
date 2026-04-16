import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { getAllProducts } from "./home.services";
import Slider from "@/components/Slider/Slider";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import { AllCategory } from "./Category/Category.services";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import { getUserToken } from "./myUtil";

export default async function page() {
  // console.log(process.env.NEXT_PUBLIC_BASE_URL)
// getUserToken()
  const ProductsList = await getAllProducts();
  const CategoryList = await AllCategory();
  // console.log(CategoryList);
  return (
    <>
      <HomeSlider />

      <ServiceCard />


      <div className=" container mx-auto p-8 m-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 mt-6 ">
            <div className="w-1.5 h-8 bg-linear-to-r from-[#00997A] to-[#88dbcb]  rounded-lg"></div>
            <h2 className="text-3xl font-bold">
              Shop By <span className="text-[#00997A]">Category</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-green-500">
            <Link href='Category'>View All Categories</Link>
            <ArrowRight size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-8 container mx-auto mt-9">
          {CategoryList.map((e) => (
            <CategoryCard key={e._id} prod={e} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-5 gap-8 container mx-auto mt-6">
        {ProductsList.map((e) => (
          <ProductsCard key={e._id} prod={e} />
        ))}
      </div>
      {/* <Footer/> */}
    </>
  );
}
