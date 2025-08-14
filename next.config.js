/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Optimisations
  compress: true,
  poweredByHeader: false,
  
  // Pour le déploiement statique si nécessaire
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig
