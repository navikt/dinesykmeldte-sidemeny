/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from 'path'

import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.ts'),
            name: 'DineSykmeldteSidemeny',
            fileName: (format) => `dinesykmeldte-sidemeny.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@navikt/ds-react', '@navikt/aksel-icons', 'clsx'],
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
