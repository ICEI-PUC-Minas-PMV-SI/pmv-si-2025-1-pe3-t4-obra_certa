/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/dashboard',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
