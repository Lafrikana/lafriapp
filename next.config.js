/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cpanel',
        destination: 'https://host74.registrar-servers.com:2083',
        permanent: true,
      },
      {
        source: '/webmail',
        destination: 'https://host74.registrar-servers.com:2096',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
