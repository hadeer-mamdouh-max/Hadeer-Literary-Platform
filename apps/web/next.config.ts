import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@hadeer/types'],
  reactStrictMode: true,
};

export default nextConfig;
