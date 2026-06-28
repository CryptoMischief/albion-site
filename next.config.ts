import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Silence Turbopack's lockfile-detection warning by anchoring the workspace
  // root explicitly to this project.
  turbopack: {
    root: __dirname,
  },
}

export default withNextIntl(nextConfig)
