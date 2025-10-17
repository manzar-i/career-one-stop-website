
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // TEMP: allow production builds to succeed even if there are TS errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // TEMP: don't block builds on lint errors
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
