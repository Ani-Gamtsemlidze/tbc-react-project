import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st3.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "bst393o16jrclv3y.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default withNextIntl(nextConfig);
