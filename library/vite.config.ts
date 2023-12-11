/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from 'path'

import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            formats: ['es'],
            entry: path.resolve(__dirname, 'lib/main.ts'),
            name: 'DineSykmeldteSidemeny',
            fileName: `dinesykmeldte-sidemeny`,
        },
        rollupOptions: {
            external: [
                'react',
                'react/jsx-runtime',
                'react-dom',
                '@navikt/ds-react/esm/typography',
                '@navikt/ds-react/esm/button',
                '@navikt/ds-react/esm/skeleton',
                '@navikt/ds-react/esm/accordion',
                '@navikt/aksel-icons',
                'clsx',
            ],
            output: {
                globals: {
                    clsx: 'cn',
                    react: 'React',
                    '@navikt/ds-react': 'ds-react',
                    '@navikt/aksel-icons': 'aksel-icons',
                },
            },
        },
    },
    plugins: [
        dts({
            tsconfigPath: './tsconfig.json',
            include: './lib',
        }),
    ],
})
