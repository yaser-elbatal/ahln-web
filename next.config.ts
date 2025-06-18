import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.120"],
  images: {
    domains: ["ahln.ae"],
  },
};

export default nextConfig;
