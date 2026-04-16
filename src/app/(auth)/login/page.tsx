
import { Truck, Shield, Clock } from "lucide-react";
import LoginForm from "./LoginForm";
import image from "@images/fresh vegetables and fruits shopping cart illustration, modern clean style, green theme.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="container max-w-7xl pe-5 ps-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-2xl">
        <div className="space-y-8">
          <div className="space-y-6">
            <Image src={image} alt="" />
          </div>

          {/* جزء التقييم (Testimonial) */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 italic text-gray-600">
            <div className="flex flex-col items-center justify-center gap-5 mb-2">
              <h2 className="text-2xl mt-2 text-center font-bold text-gray-900">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h2>
              <p className="text-center">
                Join thousands of happy customers who trust FreshCart for their
                daily grocery needs
              </p>
              <div className="flex justify-center items-center gap-6">
                <p className="flex gap-1.5 items-center">
                  <Truck size={20} fill="green" className="text-green-600" />
                  Free Delivery</p>
                <p className="flex gap-1.5 items-center">
                  <Shield size={20} fill="green" className="text-white" />
                  Secure Payment</p>
                <p className="flex gap-1.5 items-center">
                  <Clock size={20} fill="green" className="text-white" />
                  24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* الجزء الأيمن: الفورم */}
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg">
          <div className="text-center my-6 flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-gray-900">
              <span className="text-main-color">Fresh</span>Cart
            </h1>
            <p className="text-2xl mt-2 font-bold text-gray-900">
              Welcome Back!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sign in to continue your fresh shopping experience
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
