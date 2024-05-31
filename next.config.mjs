import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "bst393o16jrclv3y.public.blob.vercel-storage.com",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default withNextIntl(nextConfig);
