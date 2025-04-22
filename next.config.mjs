/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
import "dotenv/config"; 

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "www.freepik.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  env: {
    FEATURABLE_WIDGET: process.env.FEATURABLE_WIDGET_ID,
  },
};

export default withPlaiceholder(nextConfig);
