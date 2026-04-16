import Link from "next/link";
import { PackageOpen } from "lucide-react"; // أيقونة قريبة جداً من اللي في الصورة

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center  px-4 text-center min-h-50">
      
      <div className="bg-slate-100 p-6 rounded-full mb-6">
        <PackageOpen size={48} className="text-slate-400" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">
        No Products Found
      </h3>
      <p className="text-slate-500 mb-8 text-sm">
        No products match your current filters.
      </p>

      <Link 
        href="/Products" 
        className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-2.5 rounded-lg font-medium transition-colors duration-200"
      >
        View All Products
      </Link>
      
    </div>
  );
}