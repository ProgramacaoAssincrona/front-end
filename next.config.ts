import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/app', permanent: true },
      {
        source: '/app',
        destination: '/app/home',
        permanent: true
      }
    ]
  }
}

export default nextConfig
