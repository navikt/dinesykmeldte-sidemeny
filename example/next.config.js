/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ['@navikt/aksel-icons', '@navikt/ds-react'],
    },
    basePath: process.env.NODE_ENV === 'production' ? '/dinesykmeldte-sidemeny' : undefined,
}

module.exports = nextConfig
