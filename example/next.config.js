/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/dinesykmeldte-sidemeny' : undefined,
};

module.exports = nextConfig;
