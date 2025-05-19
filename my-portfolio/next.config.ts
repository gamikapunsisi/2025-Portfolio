import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Stable Turbopack configuration (replaces experimental.turbo)
  turbopack: {
    // Add any Turbopack-specific configurations here
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig