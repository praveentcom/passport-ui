import { existsSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { defineConfig } from "tsup";

/**
 * This function will scan for all components available
 * for export and return the entry points for the project.
 *
 * Directories supported:
 * 1. src/components
 * 2. src/composables
 * 3. src/motion-primitives
 * 4. src/layouts
 * 5. src/providers
 * 6. src/hooks
 *
 * @returns The entry points for the project
 */
function generateEntryPoints(): Record<string, string> {
  const entryPoints: Record<string, string> = {};

  const directories = [
    { path: "src/components", prefix: "" },
    { path: "src/composables", prefix: "" },
    { path: "src/motion-primitives", prefix: "" },
    { path: "src/layouts", prefix: "" },
    { path: "src/providers", prefix: "" },
    { path: "src/hooks", prefix: "" },
  ];

  directories.forEach(({ path, prefix }) => {
    if (existsSync(path)) {
      const items = readdirSync(path);

      items.forEach((item) => {
        const itemPath = join(path, item);
        const indexPath = join(itemPath, "index.ts");

        if (statSync(itemPath).isDirectory() && existsSync(indexPath)) {
          const entryName = prefix ? `${prefix}${item}` : item;
          entryPoints[entryName] = indexPath;
        }
      });
    }
  });

  if (existsSync("src/lib/utils.ts")) {
    entryPoints["utils"] = "src/lib/utils.ts";
  }

  return entryPoints;
}

const entrypoints = generateEntryPoints();

export default defineConfig({
  entry: entrypoints,
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
    "framer-motion",
  ],
  minify: true
});
