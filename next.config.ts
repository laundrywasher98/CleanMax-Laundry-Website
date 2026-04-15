import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
