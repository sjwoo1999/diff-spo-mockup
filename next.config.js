/** @type {import('next').NextConfig} */
const nextConfig = {
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
  experimental: {
    typedRoutes: false,
  },
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 