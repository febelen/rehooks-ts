import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  dts: true,
  minify: true,
  splitting: false,
  cjsInterop: true,
  ...options,
}));
