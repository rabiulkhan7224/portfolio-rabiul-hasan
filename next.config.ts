import type { NextConfig } from "next";
import { types } from "util";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",         
        pathname: "/dg4jhba5c/image/upload/**",
  },

// https://img.icons8.com/?size=100&id=108784&format=png&color=000000
     
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

 
      

 
eslint: {
  // Only run ESLint on the "pages" and "components" directories during production builds (next build)
  ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
 
},
typescript: {
  // Ignore TypeScript errors during production builds
  ignoreBuildErrors: true, // Ignore TypeScript errors during production builds
},
}

export default nextConfig;
