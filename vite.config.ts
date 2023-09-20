import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "placeholder-lib-name",
      fileName: (format) => format == "es" ? `index.js` : `index.${format}.js`,
    },
    sourcemap: true,
  },
  test: {
    dir: "src"
  }
});