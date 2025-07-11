/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática
  output: 'export',
  // Desabilita otimização de imagens para exportação estática
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
