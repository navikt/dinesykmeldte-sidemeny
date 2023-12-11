/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/dinesykmeldte-sidemeny' : undefined,
}

module.exports = nextConfig
