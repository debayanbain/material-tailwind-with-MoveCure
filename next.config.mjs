/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
    reactStrictMode: true,
    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
        },
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        },
        {
            protocol: "https",
            hostname: 'ik.imagekit.io',
        },
        {
            protocol: "https",
            hostname: 'www.freepik.com',
        },
        {
            protocol: "https",
            hostname: 'lh3.googleusercontent.com',
        }
    ]
  },
};

export default withPlaiceholder(nextConfig);
