/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/telecom",
        destination: "/digital-communications",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
