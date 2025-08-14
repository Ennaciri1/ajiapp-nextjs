/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration pour éviter les erreurs de cache
  webpack: (config, { dev, isServer }) => {
    // Désactiver le cache en développement pour éviter les erreurs
    if (dev) {
      config.cache = false
    }
    
    // Optimisations pour éviter les conflits de résolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
    }
    
    // Optimiser le splitChunks en production seulement
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            enforce: true,
          },
        },
      }
    }
    
    // Ignorer certains modules pour éviter les warnings
    config.externals = [...(config.externals || []), 'canvas', 'jsdom']
    
    return config
  },
  
  // Configuration expérimentale (clés valides seulement)
  experimental: {
    // Optimiser CSS seulement en production
    optimizeCss: process.env.NODE_ENV === 'production',
    // Optimiser les imports de packages
    optimizePackageImports: ['react-slick', 'slick-carousel'],
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Compiler options (remplace swcMinify)
  compiler: {
    // Remove console.log en production seulement
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false,
  },
  
  // Headers pour performance et sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        // Cache statique pour les assets
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache pour les images
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Output configuration
  output: 'standalone',
  
  // TypeScript configuration
  typescript: {
    // Ignorer les erreurs TypeScript en dev si nécessaire
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  // ESLint configuration
  eslint: {
    // Ignorer pendant le build si problèmes de cache
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  
  // Variables d'environnement publiques (sans NODE_ENV)
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    // NODE_ENV est automatiquement géré par Next.js
  },
  
  // Configuration du serveur
  serverRuntimeConfig: {
    // Runtime config côté serveur
  },
  
  publicRuntimeConfig: {
    // Runtime config public
    staticFolder: '/assets',
  },
  
  // Redirections si nécessaire
  async redirects() {
    return []
  },
  
  // Rewrites si nécessaire
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },
  
  // Configuration trailing slash
  trailingSlash: false,
}

module.exports = nextConfig