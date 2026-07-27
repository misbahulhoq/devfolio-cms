import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs"], // CommonJS output for NestJS (Vite reads src/index.ts directly)
  dts: true,
});
