/** @type {import('next').NextConfig} */

// MODO DE DESPLIEGUE
// - "server"  → Vercel / Hostinger VPS / cualquier servidor Node.js (recomendado)
// - "static"  → Hostinger Shared Hosting (genera carpeta /out lista para FTP)
const DEPLOY_MODE = process.env.DEPLOY_MODE ?? 'server'

const nextConfig = {
  // Export estático para Hostinger Shared Hosting
  ...(DEPLOY_MODE === 'static' && {
    output: 'export',
    trailingSlash: true,
  }),

  images: {
    // En modo estático se requiere unoptimized porque no hay servidor de imágenes
    unoptimized: DEPLOY_MODE === 'static',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
