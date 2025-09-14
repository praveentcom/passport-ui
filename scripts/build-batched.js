#!/usr/bin/env node
import { spawn, execSync } from "child_process";
import { existsSync, readdirSync, statSync } from "fs";
import { join } from "path";
import process from "process";

/**
 * Generate entry points for the project
 */
function generateEntryPoints() {
  const entryPoints = {};

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

/**
 * Run tsup command with specific entries
 */
function runTsup(entries, batchIndex, totalBatches) {
  return new Promise((resolve, reject) => {
    const entryArgs = Object.entries(entries)
      .map(([key, value]) => `--entry.${key}=${value}`)
      .join(" ");

    const cleanFlag = batchIndex === 0 ? "--clean" : "--no-clean";
    const dtsFlag = "--dts";
    const formatFlag = "--format=cjs,esm";
    const sourcemapFlag = "--sourcemap";
    const minifyFlag = "--minify";
    const targetFlag = "--target=node18";
    const tsconfigFlag = "--tsconfig=tsconfig.json";
    const externalFlags = [
      "--external=react",
      "--external=react-dom",
      "--external=tailwindcss",
      "--external=next",
      "--external=next/navigation",
      "--external=next/link",
      "--external=next-themes",
      "--external=@radix-ui/*",
      "--external=framer-motion",
      "--external=motion",
    ].join(" ");

    const cmd = `npx tsup ${entryArgs} ${cleanFlag} ${dtsFlag} ${formatFlag} ${sourcemapFlag} ${minifyFlag} ${targetFlag} ${tsconfigFlag} ${externalFlags}`;

    console.log(
      `\n🔨 Building batch ${batchIndex + 1}/${totalBatches} (${Object.keys(entries).length} entries):`
    );
    console.log(`   ${Object.keys(entries).join(", ")}`);

    const child = spawn(cmd, {
      shell: true,
      stdio: "inherit",
      env: { ...process.env, NODE_OPTIONS: "--max-old-space-size=8192" },
    });

    child.on("close", (code) => {
      if (code === 0) {
        console.log(`✅ Batch ${batchIndex + 1} completed successfully`);
        
        try {
          console.log(`🔧 Preserving "use client" directives...`);
          execSync("node scripts/preserve-directives.js", { stdio: "inherit" });
        } catch (error) {
          console.warn(`⚠️ Warning: Failed to preserve directives: ${error.message}`);
        }
        
        resolve();
      } else {
        reject(
          new Error(`Batch ${batchIndex + 1} failed with exit code ${code}`)
        );
      }
    });

    child.on("error", (error) => {
      reject(error);
    });
  });
}

/**
 * Split entries into batches
 */
function createBatches(entries, batchSize = 10) {
  const entryPairs = Object.entries(entries);
  const batches = [];

  for (let i = 0; i < entryPairs.length; i += batchSize) {
    const batch = {};
    const batchEntries = entryPairs.slice(i, i + batchSize);

    batchEntries.forEach(([key, value]) => {
      batch[key] = value;
    });

    batches.push(batch);
  }

  return batches;
}

/**
 * Main build function
 */
async function buildBatched() {
  console.log("🚀 Starting batched build process...");

  const allEntries = generateEntryPoints();
  const totalEntries = Object.keys(allEntries).length;

  console.log(`📦 Found ${totalEntries} entry points to build`);

  // Create batches of 8 entries each to avoid memory issues
  const batches = createBatches(allEntries, 8);

  console.log(`📊 Split into ${batches.length} batches`);

  try {
    for (let i = 0; i < batches.length; i++) {
      await runTsup(batches[i], i, batches.length);
    }

    console.log("\n🎉 All batches completed successfully!");
    console.log(
      `📦 Built ${totalEntries} components in ${batches.length} batches`
    );
  } catch (error) {
    console.error("\n❌ Build failed:", error.message);
    process.exit(1);
  }
}

// Run the batched build
buildBatched().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
