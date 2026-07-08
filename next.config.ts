import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (smaller), fall back to WebP.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
