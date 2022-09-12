/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  },
};

module.exports = nextConfig;
