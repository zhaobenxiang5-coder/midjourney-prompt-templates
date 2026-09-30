/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/midjourney-prompt-templates',
  assetPrefix: '/midjourney-prompt-templates/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
