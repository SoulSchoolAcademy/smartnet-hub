/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true } // harmless even though we’ll use JS files
};
module.exports = nextConfig;
