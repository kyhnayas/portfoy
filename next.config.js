/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['kayhanayas.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  compress: true,
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
