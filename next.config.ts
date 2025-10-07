import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "@clerk/shared": "@clerk/shared/dist/index.js",
      },
    },
  },
  webpack: (config, { isServer }) => {
    // Add alias to resolve swr import issues
    config.resolve.alias = {
      ...config.resolve.alias,
      'swr': require.resolve('swr/dist/index.js'),
    };
    return config;
  },
};

export default nextConfig;
