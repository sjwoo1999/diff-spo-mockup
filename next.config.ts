// next.config.js (전체 코드 다시 확인)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() { // 이 부분이 정확히 있는지 확인
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/login/onboarding',
        destination: '/auth/login/onboarding',
      },
    ];
  },
  experimental: {
    typedRoutes: false,
  }
};

export default nextConfig;