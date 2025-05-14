import type { NextConfig } from "next";

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
 
};

export default nextConfig;
