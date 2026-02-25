/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "DineSykmeldteSidemeny",
      fileName: `dinesykmeldte-sidemeny`,
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "@navikt/ds-react",
        "@navikt/aksel-icons",
        "clsx",
      ],
      output: {
        globals: {
          clsx: "cn",
          react: "React",
          "@navikt/ds-react": "ds-react",
          "@navikt/aksel-icons": "aksel-icons",
        },
      },
    },
  },
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
      include: "./lib",
      exclude: ["**/*.test.*"],
    }),
  ],
});
