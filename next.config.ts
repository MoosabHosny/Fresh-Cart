import type { NextConfig } from "next";
//https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns: [{
      protocol: 'https',
      hostname: 'ecommerce.routemisr.com',
      pathname: '/Route-Academy-products/**'
    },
    // https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg
      {
      protocol: 'https',
      hostname: 'ecommerce.routemisr.com',
      pathname: '/Route-Academy-categories/**'
      },
    // https://ecommerce.routemisr.com/Route-Academy-brands/1678286824747.png
      {
      protocol: 'https',
      hostname: 'ecommerce.routemisr.com',
      pathname: '/Route-Academy-brands/**'
    }
    ]
  }
};

export default nextConfig;
