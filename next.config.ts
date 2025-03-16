import type { NextConfig } from 'next'
import { i18n } from './next-i18next.config'

const nextConfig: NextConfig = {
  i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,
}

export default nextConfig
