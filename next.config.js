/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: { domains: ["res.cloudinary.com", "www.fnp.com"] },
};

module.exports = nextConfig;
