/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: '/resume', destination: '/resume.html' }];
  },
  async redirects() {
    return [{ source: '/resume.html', destination: '/resume', permanent: true }];
  },
}

module.exports = nextConfig
