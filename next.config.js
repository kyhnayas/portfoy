/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['kayhanayas.com'],
  },
  // iframe'lerin yüklenmesi için X-Frame-Options kaldırılıyor (local dev)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
  // Subdomain routing için rewrites
  async rewrites() {
    return [
      // sites.kayhanayas.com → /sites
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sites.kayhanayas.com' }],
        destination: '/sites/:path*',
      },
      // design3d.kayhanayas.com → /design3d
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'design3d.kayhanayas.com' }],
        destination: '/design3d/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
