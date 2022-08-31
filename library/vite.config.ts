/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from 'path';

import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.ts'),
            name: 'DineSykmeldteSidemeny',
            fileName: (format) => `dinesykmeldte-sidemeny.${format}.js`,
        },
        rollupOptions: {
            external: ['react', '@navikt/ds-react', '@navikt/ds-icons'],
            output: {
                globals: { react: 'React', '@navikt/ds-react': 'ds-react', '@navikt/ds-icons': 'ds-icons' },
            },
        },
    },
    plugins: [
        dts({
            tsConfigFilePath: './tsconfig.json',
            include: './lib',
            exclude: './lib/typings.d.ts',
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setupTests.ts',
        css: true,
    },
});
