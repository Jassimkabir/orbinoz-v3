import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (smaller), fall back to WebP.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires non-default qualities to be declared. 90 is used for
    // the full-bleed service imagery; 75 is the default elsewhere.
    qualities: [75, 90],
  },
};

export default nextConfig;
