/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
    env: {
        GEOAPIFY_API: process.env.GEOAPIFY_API,
        OPENWEATHER_API: process.env.OPENWEATHER_API,
        UPSPLASH_API: process.env.UPSPLASH_API
      },
}

module.exports = nextConfig
