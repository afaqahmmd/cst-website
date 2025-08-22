import type { NextConfig } from "next";
const nextConfig:NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com","127.0.0.1", "localhost", "www.cortechsols.com","ui-avatars.com"],
  },
};

export default nextConfig;
