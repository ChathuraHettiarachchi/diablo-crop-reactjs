/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pay-runs",
        permanent: true, // 301 redirect (permanent)
      },
    ];
  },
};

module.exports = nextConfig;
