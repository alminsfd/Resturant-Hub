/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        pathname: '/images/media/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/food-details/:id',
        destination: '/foods/:id',
        permanent: true,
      },
    ]
  }

};





export default nextConfig;
