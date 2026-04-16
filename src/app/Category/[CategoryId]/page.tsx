import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GetAllSubCategoriesOnCategory,
  GetSpecificCategory,
} from "../Category.services";
import Link from "next/link";
import { ArrowRight, FolderClosed } from "lucide-react";
import PageBanner from "@/components/PageBanner/PageBanner";

export default async function page({
  params,
}: {
  params: Promise<{ CategoryId: string }>;
}) {
  const { CategoryId } = await params;
  const Category = await GetSpecificCategory(CategoryId);
  const CategoryList = await GetAllSubCategoriesOnCategory(CategoryId);
// console.log('CategoryList=-=-======== ',CategoryList)
  return (
    <>
      <PageBanner
        title={Category.name}
        description={`Choose a subcategory to browse products`}
        breadcrumb={Category.name}
        icon={
          <img src={Category.image} alt={Category.name} className="w-12 h-12" />
        }
      />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 container mx-auto my-10">
          {CategoryList.map((e) => (
            <div className="group max-w-sm p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-2xl mb-6">
                <FolderClosed className="w-8 h-8 text-green-500 fill-current" />
              </div>

              <div className="space-y-2">
                <h2 className="text-[25px] font-bold text-slate-800">
                  {e.name}
                </h2>

                <div className="flex items-center gap-2 text-green-500 opacity-0  group-hover:opacity-100  duration-300">
                  <Link href={`/Category/filter/${e._id}`}>Browse Products</Link>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
