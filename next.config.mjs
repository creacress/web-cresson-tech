const nextConfig = {
  swcMinify: true,
  images: {
    formats: ['image/webp'], // Active l'optimisation pour les images WebP
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

export default nextConfig;
