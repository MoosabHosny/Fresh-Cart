import { Card, CardContent } from "@/components/ui/card";
import { Headset, RotateCcw, ShieldHalf, Truck } from "lucide-react";

export default function ServiceCard() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <Card className="w-full">
          <CardContent className="flex gap-3 items-center">
            <span className="flex justify-center items-center bg-blue-100 p-3 rounded-full">
              <Truck size={30} className="text-blue-500" />
            </span>
            <div>
              <h3 className="text-black font-bold">Free Shipping</h3>
              <p>On orders over 500 EGP</p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardContent className="flex gap-3 items-center">
            <span className="flex justify-center items-center bg-emerald-100 p-3 rounded-full">
              <ShieldHalf size={30} className="text-emerald-500" />
            </span>
            <div>
              <h3 className="text-black font-bold">Secure Payment</h3>
              <p>100% secure transactions</p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardContent className="flex gap-3 items-center">
            <span className="flex justify-center items-center bg-orange-100 p-3 rounded-full">
              <RotateCcw className="text-orange-500 w-6 h-6 stroke-[2.5px]" />
            </span>
            <div>
              <h3 className="text-black font-bold">Easy Returns</h3>
              <p>14-day return policy</p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardContent className="flex gap-3 items-center">
            <span className="flex justify-center items-center bg-purple-100 p-3 rounded-full">
              <Headset size={30} className="text-purple-500" />
            </span>
            <div>
              <h3 className="text-black font-bold">24/7 Support</h3>
              <p>Dedicated support team</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}