/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-images.pixpa.com",
      },
    ],
  },
};

module.exports = nextConfig;
