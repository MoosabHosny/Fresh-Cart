import { ReactNode } from "react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  description: string;
  breadcrumb: string;
  icon: ReactNode;
  bgColor?: string;
}

export default function PageBanner({
  title,
  description,
  breadcrumb,
  icon,
  bgColor = "#2ecc71",
}: PageBannerProps) {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="w-full py-10 md:py-14 px-4 md:px-6 text-white shadow-sm"
    >
      <div className="container mx-auto">
        <nav className="flex items-center gap-2 text-xs md:text-sm mb-6 opacity-90">
          <Link href="/" className="hover:font-bold transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="font-bold">{breadcrumb}</span>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          {/* icon */}
          <div className="bg-white/20 p-3 md:p-4 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105">
            {icon}
          </div>

          {/* text */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              {title}
            </h1>
            <p className="text-white/90 text-sm md:text-lg font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}