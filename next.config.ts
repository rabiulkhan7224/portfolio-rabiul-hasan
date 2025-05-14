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


      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dg4jhba5c/image/upload/v1697032022/**",
      },
]},
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
