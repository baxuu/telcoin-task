/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/backstage/:slug*',
      destination: 'https://sso-roland.vercel.app/:slug*',
      basePath: false,
    },
  ],
  images: {
    domains: ['cdn.pixabay.com', 'cdn-images-1.medium.com'],
  },
};

module.exports = nextConfig;
