import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ─── Image Optimization ─── */
  images: {
    // Enable modern image formats for better performance and Core Web Vitals
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images (srcset generation)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Image sizes for the sizes attribute
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shift by keeping aspect ratios
    minimumCacheTTL: 31536000, // 1 year cache for static images
  },

  /* ─── Bundle Optimization ─── */
  experimental: {
    // Tree-shake heavy packages to reduce JS bundle size
    optimizePackageImports: ["framer-motion"],
  },

  /* ─── Security + SEO Headers ─── */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing (security + crawl quality)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Control referrer info sent in requests
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Enable DNS prefetching for faster navigation
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Permissions policy — disable unnecessary browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Long-term cache for static assets
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
