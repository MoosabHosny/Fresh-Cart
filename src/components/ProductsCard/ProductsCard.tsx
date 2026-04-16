import { AllProductData } from "@/app/home";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Star, Heart, RefreshCw, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductsCard({ prod }: { prod: AllProductData }) {
  const {
    id,
    imageCover,
    category,
    price,
    title,
    ratingsAverage,
    ratingsQuantity,
    priceAfterDiscount,
  } = prod;

  const discountPercentage = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;

  return (
    <Card className="relative group overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl pt-0 flex flex-col">
      {priceAfterDiscount && (
        <Badge className="absolute top-3 left-3 z-30 bg-[#ff3b3b] hover:bg-[#ff3b3b] text-white font-bold rounded-md px-2 py-1 border-none text-xs">
          -{discountPercentage}%
        </Badge>
      )}

      <div className="absolute top-3 right-3 z-30 flex flex-col gap-2 transition-all duration-300">
        <button className="bg-white p-2 rounded-full shadow-md text-slate-600 hover:text-red-500 transition-colors border border-gray-50 active:scale-90">
          <Heart size={18} />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md text-slate-600 hover:text-blue-500 transition-colors border border-gray-50 active:scale-90">
          <RefreshCw size={18} />
        </button>
        <Link
          href={`/ProductDetails/${id}`}
          className="bg-white p-2 rounded-full shadow-md text-slate-600 hover:text-green-500 transition-colors border border-gray-50 active:scale-90"
        >
          <Eye size={18} />
        </Link>
      </div>

      <div>
        <div className="relative h-64 bg-[#ffffff] flex items-center justify-center m-0 p-0 overflow-hidden w-full">
          <Image fill src={imageCover} alt={title} className="object-contain" />
        </div>

        <CardHeader className="p-4 space-y-1">
          <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
            {category.name}
          </span>

          <Link href={`/ProductDetails/${id}`}>
            <CardTitle className="text-[15px] font-semibold text-slate-800 line-clamp-2  leading-snug">
              {title}
            </CardTitle>
          </Link>

          <div className="flex items-center gap-2 pt-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={
                    i < Math.floor(ratingsAverage) ? "currentColor" : "none"
                  }
                  className={
                    i < Math.floor(ratingsAverage)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">
              {ratingsAverage} ({ratingsQuantity})
            </span>
          </div>

          <div className="flex items-center justify-between pt-3">
            <div className="flex flex-col">
              {priceAfterDiscount ? (
                <div className="flex items-center gap-1">
                  <span className="text-main-color text-xl font-bold tracking-tight">
                    {priceAfterDiscount} EGP
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {price} EGP
                  </span>
                </div>
              ) : (
                <span className="text-slate-900 text-xl font-bold tracking-tight">
                  {price} EGP
                </span>
              )}
            </div>
            <AddToCart id={id} className="bg-main-color text-white rounded-full w-10 h-10 p-0 flex items-center justify-center transition-transform active:scale-90 shadow-lg border-none"> 
              <Plus size={24} strokeWidth={2.5} />
            </AddToCart>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}
