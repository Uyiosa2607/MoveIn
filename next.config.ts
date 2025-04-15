/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nxpajdblixcctgjynbty.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
