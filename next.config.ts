import type { NextConfig } from "next";

// CO6: Build Systems, Testing, CI/CD & Deployment Engineering - image caching, compression, and tree-shaking live in build config.
const nextConfig: NextConfig = {
  // Compress responses with gzip (brotli via reverse proxy recommended)
  compress: true,

  images: {
    minimumCacheTTL: 2678400,
    // Use modern formats for smaller image payloads
    formats: ["image/avif", "image/webp"],
    // Limit generated device sizes to reduce build variants
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
        pathname: "/wiki/Special:FilePath/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },


  // Enable production source maps for debugging without shipping them to users
  productionBrowserSourceMaps: false,

  // Opt into stricter React mode for catching issues early
  reactStrictMode: true,

  // Powered-by header is unnecessary overhead
  poweredByHeader: false,
};

export default nextConfig;
