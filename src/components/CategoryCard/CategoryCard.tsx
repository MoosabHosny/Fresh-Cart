
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { AllCategoryData } from "@/app/Category/Category";

export default function CategoryCard({ prod }: { prod:AllCategoryData }) {
    const { image, name } = prod;

  return (
    <Card className="group flex flex-col items-center justify-center text-center w-full max-w-55 mx-auto p-4 gap-3 rounded-lg shadow-sm border-none transition-all duration-300 ">
      
      <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-full bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-contain transition-transform duration-300 "
        />
      </div>

      <CardHeader className="p-0 w-full">
        <CardTitle className="text-[16px] font-semibold">
          {name}
        </CardTitle>
      </CardHeader>

    </Card>
  );
}