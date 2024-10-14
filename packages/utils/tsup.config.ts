import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.ts"],
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  external: ["react"],
  ...options,
}));
