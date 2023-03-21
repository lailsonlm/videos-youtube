/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https'
      },
      {
        hostname: 'media.graphassets.com',
        protocol: 'https'
      },

    ]
  }
}

module.exports = nextConfig
