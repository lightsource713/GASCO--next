const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
module.exports = withNextVideo({
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2j6dbq0eux0bg-cdn.ecwid.net',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'd2j6dbq0eux0bg.cloudfront.net',
        pathname: '/images/**'
      },
      {
        protocol: 'http',
        hostname: 'data.its.sa',
        pathname: '/images/**'
      },
      {
        protocol: 'http',
        hostname: 'data.its.sa',
        port: '3000',
        pathname: '/assets/images/**',
      }
    ],
    domains: ['data.its.sa']
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  }
});

module.exports = {
  // Add other configurations here
  devServer: {
    hot: process.env.NODE_ENV !== 'production', // Enable HMR only in development
  },
};