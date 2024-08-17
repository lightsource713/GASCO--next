const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
module.exports = withNextVideo({
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
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
      }
    ]
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
  images: {
    domains: ['data.its.sa'] // Add your allowed domains here
  }
};
