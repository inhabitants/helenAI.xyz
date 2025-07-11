/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações padrão (SSR/SSG)
  // Desabilita otimização de imagens para exportação estática
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
