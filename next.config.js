/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com'],
  }
  // Removed experimental.appDir as it's now stable in Next.js 14
}

module.exports = nextConfig