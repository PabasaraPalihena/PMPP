import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/PMPP" : "",
  assetPrefix: isProd ? "/PMPP/" : "",
  devIndicators: false,
};

export default nextConfig;