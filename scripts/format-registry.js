#!/usr/bin/env node
import { access, readdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import process from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateRegistry() {
  const srcDir = join(__dirname, "../src");
  const registryPath = join(__dirname, "../src/registry.ts");

  // Define all categories to scan
  const categories = [
    { name: "layouts", path: "layouts" },
    { name: "providers", path: "providers" },
    { name: "components", path: "components" },
    { name: "hooks", path: "hooks" },
    { name: "composables", path: "composables" },
    { name: "motion-primitives", path: "motion-primitives" },
  ];

  try {
    const allDefinitions = [];

    // Process each category
    for (const category of categories) {
      const categoryDir = join(srcDir, category.path);

      try {
        const categoryDirs = await readdir(categoryDir, {
          withFileTypes: true,
        });
        const categoryItems = categoryDirs
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name)
          .sort();

        // Filter items that have definition.ts files
        const validItems = [];
        for (const itemName of categoryItems) {
          const definitionPath = join(categoryDir, itemName, "definition.ts");
          try {
            await access(definitionPath);
            validItems.push({ name: itemName, category: category.path });
          } catch {
            console.log(
              `⚠️  Skipping ${category.name}/${itemName} - no definition.ts file found`
            );
          }
        }

        allDefinitions.push(...validItems);
        console.log(
          `📁 Found ${validItems.length} ${category.name}: ${validItems.map((item) => item.name).join(", ")}`
        );
      } catch (error) {
        console.log(`⚠️  Category ${category.name} not found or inaccessible`);
      }
    }

    // Generate imports grouped by category
    const layoutImports = allDefinitions
      .filter((item) => item.category === "layouts")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `import { definition as ${camelCaseName}Definition } from "./layouts/${item.name}/definition";`;
      })
      .join("\n");
    const componentImports = allDefinitions
      .filter((item) => item.category === "components")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `import { definition as ${camelCaseName}Definition } from "./components/${item.name}/definition";`;
      })
      .join("\n");

    const providerImports = allDefinitions
      .filter((item) => item.category === "providers")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `import { definition as ${camelCaseName}Definition } from "./providers/${item.name}/definition";`;
      })
      .join("\n");

    const hookImports = allDefinitions
      .filter((item) => item.category === "hooks")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `import { definition as ${camelCaseName}Definition } from "./hooks/${item.name}/definition";`;
      })
      .join("\n");

    const composableImports = allDefinitions
      .filter((item) => item.category === "composables")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `import { definition as ${camelCaseName}Definition } from "./composables/${item.name}/definition";`;
      })
      .join("\n");

    const motionImports = allDefinitions
      .filter((item) => item.category === "motion-primitives")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `import { definition as ${camelCaseName}Definition } from "./motion-primitives/${item.name}/definition";`;
      })
      .join("\n");

    // Generate array items grouped by category
    const componentArrayItems = allDefinitions
      .filter((item) => item.category === "components")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `  ${camelCaseName}Definition,`;
      })
      .join("\n");

    const hookArrayItems = allDefinitions
      .filter((item) => item.category === "hooks")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `  ${camelCaseName}Definition,`;
      })
      .join("\n");

    const layoutArrayItems = allDefinitions
      .filter((item) => item.category === "layouts")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `  ${camelCaseName}Definition,`;
      })
      .join("\n");

    const providerArrayItems = allDefinitions
      .filter((item) => item.category === "providers")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `  ${camelCaseName}Definition,`;
      })
      .join("\n");

    const composableArrayItems = allDefinitions
      .filter((item) => item.category === "composables")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `  ${camelCaseName}Definition,`;
      })
      .join("\n");

    const motionArrayItems = allDefinitions
      .filter((item) => item.category === "motion-primitives")
      .map((item) => {
        const camelCaseName = item.name
          .split("-")
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

        return `  ${camelCaseName}Definition,`;
      })
      .join("\n");

    // Generate the complete registry file
    const allImports = [
      componentImports,
      providerImports && `\n// Provider definitions\n${providerImports}`,
      hookImports && `\n// Hook definitions\n${hookImports}`,
      layoutImports && `\n// Layout definitions\n${layoutImports}`,
      composableImports && `\n// Composable definitions\n${composableImports}`,
      motionImports && `\n// Motion primitives definitions\n${motionImports}`,
    ]
      .filter(Boolean)
      .join("");

    const allArrayItems = [
      componentArrayItems,
      layoutArrayItems && `  // Layout definitions\n${layoutArrayItems}`,
      providerArrayItems && `  // Provider definitions\n${providerArrayItems}`,
      hookArrayItems && `  // Hook definitions\n${hookArrayItems}`,
      composableArrayItems &&
        `  // Composable definitions\n${composableArrayItems}`,
      motionArrayItems &&
        `  // Motion primitives definitions\n${motionArrayItems}`,
    ]
      .filter(Boolean)
      .join("\n");

    const registryContent = `import type { ComponentDefinition } from "./types/definition";

// Auto-generated component definitions - DO NOT EDIT MANUALLY
// Run 'npm run generate-registry' to update this file
${allImports}

export const definitions: ComponentDefinition[] = [
${allArrayItems}
];
`;

    await writeFile(registryPath, registryContent, "utf8");
    console.log(
      `✅ Registry generated with ${allDefinitions.length} total definitions`
    );

    // Log summary by category
    categories.forEach((category) => {
      const categoryCount = allDefinitions.filter(
        (item) => item.category === category.path
      ).length;
      if (categoryCount > 0) {
        const items = allDefinitions
          .filter((item) => item.category === category.path)
          .map((item) => item.name);
        console.log(
          `📁 ${category.name}: ${categoryCount} items (${items.join(", ")})`
        );
      }
    });

    // If running in git hooks context, stage the updated registry file
    if (process.env.HUSKY || process.env.GIT_HOOKS) {
      const { exec } = await import("child_process");
      const { promisify } = await import("util");
      const execAsync = promisify(exec);

      try {
        await execAsync("git add src/registry.ts");
        console.log("📝 Staged updated registry.ts for commit");
      } catch (gitError) {
        console.log("ℹ️  Could not stage registry.ts (not in git context)");
      }
    }
  } catch (error) {
    console.error("❌ Error generating registry:", error);
    process.exit(1);
  }
}

generateRegistry();
