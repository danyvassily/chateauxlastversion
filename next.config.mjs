/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour déploiement Vercel avec Next.js standard
  // Pas d'export statique pour bénéficier de l'ISR et de l'optimisation des images
  trailingSlash: true,
  
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  // Configuration images pour Vercel - Images locales uniquement
  images: {
    // Formats modernes pour optimisation automatique Vercel
    formats: ["image/avif", "image/webp"],
    // Tailles d'images pour responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Pas de remotePatterns nécessaires pour les images locales dans /public
    // Si vous avez des images distantes, décommenter et lister vos hôtes:
    // remotePatterns: [
    //   { protocol: "https", hostname: "cdn.votredomaine.com" },
    // ],
    // Cache TTL pour optimisation Vercel
    minimumCacheTTL: 60,
    // IMPORTANT: Ne pas utiliser unoptimized: true sur Vercel
    // Vercel optimise automatiquement les images via /_next/image
  },

  // Configuration pour le déploiement - désactivation temporaire des warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimisations performance
  compress: true,
  poweredByHeader: false,

  // Les headers sont gérés par vercel.json
  // Les redirections sont gérées par vercel.json
};

export default nextConfig;
