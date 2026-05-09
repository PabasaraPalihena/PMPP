import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   devIndicators: false,
   output: "export",
   basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
};

export default nextConfig;
