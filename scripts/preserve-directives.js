#!/usr/bin/env node
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
import { join } from "path";

/**
 * Get all source files that have "use client" directive
 */
function getClientFiles() {
  const clientFiles = new Set();

  const directories = [
    "src/layouts",
    "src/providers",
    "src/components",
    "src/hooks",
    "src/composables",
    "src/motion-primitives",
  ];

  directories.forEach((dir) => {
    if (!existsSync(dir)) return;

    const items = readdirSync(dir);
    items.forEach((item) => {
      const itemPath = join(dir, item);
      if (statSync(itemPath).isDirectory()) {
        const componentFile = join(itemPath, "_.tsx");
        const indexFile = join(itemPath, "index.tsx");

        let filePath = null;
        if (existsSync(componentFile)) {
          filePath = componentFile;
        } else if (existsSync(indexFile)) {
          filePath = indexFile;
        }

        if (filePath) {
          const content = readFileSync(filePath, "utf8");
          if (
            content.startsWith('"use client"') ||
            content.startsWith("'use client'")
          ) {
            clientFiles.add(item);
          }
        }
      }
    });
  });

  return clientFiles;
}

/**
 * Add "use client" directive to built files
 */
function addUseClientDirective() {
  const clientFiles = getClientFiles();

  console.log(
    "🔍 Found client components:",
    Array.from(clientFiles).join(", ")
  );

  clientFiles.forEach((componentName) => {
    const files = [
      `dist/${componentName}.js`,
      `dist/${componentName}.mjs`,
      `dist/${componentName}.cjs`,
      `dist/${componentName}.esm.js`,
    ];

    files.forEach((filePath) => {
      if (existsSync(filePath)) {
        const content = readFileSync(filePath, "utf8");

        if (
          !content.startsWith('"use client"') &&
          !content.startsWith("'use client'")
        ) {
          const newContent = '"use client";\n' + content;
          writeFileSync(filePath, newContent, "utf8");
          console.log(`✅ Added "use client" to ${filePath}`);
        }
      }
    });
  });

  console.log("✨ Directive preservation complete!");
}

addUseClientDirective();
