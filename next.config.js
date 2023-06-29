/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
    env: {
        GEOAPIFY_API: process.env.GEOAPIFY_API,
        OPENWEATHER_API: process.env.OPENWEATHER_API,
        UPSPLASH_API: process.env.UPSPLASH_API
      },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**'
        }
      ],
    },
}

module.exports = nextConfig
