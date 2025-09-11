import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  splitting: true,
  treeshake: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "next",
    "next/navigation",
    "next/link",
    "next-themes",
    "@radix-ui/*",
  ],
});
