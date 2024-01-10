/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "web-images.pixpa.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "api.slingacademy.com",
      // },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
