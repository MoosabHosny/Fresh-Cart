import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function EmptyCart() {
  return (
    <>
      <div className="flex  flex-col items-center justify-center min-h-[50vh] px-4 text-center">
        <div className="relative mb-5 p-10 bg-slate-100/50 rounded-full">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              className="w-full h-full text-slate-300"
            >
              <path
                d="M10 30L50 10L90 30V40L50 60L10 40V30Z"
                fill="currentColor"
                fillOpacity="0.3"
              />
              <path
                d="M10 40L50 60L90 40V70L50 90L10 70V40Z"
                fill="currentColor"
              />
            </svg>
            <div className="absolute inset-0 bg-slate-100 rounded-full scale-125 opacity-20 animate-pulse" />
          </div>
        </div>

        <div className="max-w-md mx-auto ">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Your cart is empty
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Looks like you haven't added anything to your cart yet. Start
            exploring our products!
          </p>
        </div>

        <Link href="/">
          <button className="flex items-center gap-2.5 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl shadow-lg shadow-green-600/20 transition-all duration-200 active:scale-95 group">
            Start Shopping
            <MoveRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </Link>

        <div className="mt-20 pt-10 border-t border-slate-100 w-full max-w-4xl">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Popular Categories
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/Category"
              className="p-2 rounded-2xl bg-gray-100 hover:bg-green-100 hover:text-green-600"
            >
              Electronics
            </Link>
            <Link
              href="/Category"
              className="p-2 rounded-2xl bg-gray-100 hover:bg-green-100 hover:text-green-600"
            >
              Fashion
            </Link>
            <Link
              href="/Category"
              className="p-2 rounded-2xl bg-gray-100 hover:bg-green-100 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              href="/Category"
              className="p-2 rounded-2xl bg-gray-100 hover:bg-green-100 hover:text-green-600"
            >
              Beauty
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
