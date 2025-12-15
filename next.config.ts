import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "vfv2pt7z-8000.inc1.devtunnels.ms",
      "images.unsplash.com",
      "127.0.0.1",
      "localhost",
      "www.cortechsols.com",
      "ui-avatars.com",
      "vfv2pt7z-7000.inc1.devtunnels.ms",
      "vfv2pt7z-7000.inc1.devtunnels.ms",
      "marlin-welcome-goat.ngrok-free.app",
      "solsbackend.cortechsocial.com",
      "192.168.18.199"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "solsbackend.cortechsocial.com",
      },
      {
        protocol: "http",
        hostname: "solsbackend.cortechsocial.com",
      },
    ],
  },
};
export default nextConfig;
