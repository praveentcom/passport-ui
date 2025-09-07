import { defineConfig } from "tsup";

export default defineConfig([
  // Server-compatible components (no "use client")
  {
    entry: { server: "src/server.ts" },
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom", "tailwindcss"],
  },
  // Client components (with "use client")
  {
    entry: { client: "src/client.ts" },
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    external: ["react", "react-dom", "tailwindcss"],
    banner: {
      js: '"use client";',
    },
  },
]);
