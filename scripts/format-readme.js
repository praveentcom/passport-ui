#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const srcDir = join(rootDir, "src");
const readmePath = join(rootDir, "README.md");

/**
 * List of categories to scan
 */
const categories = [
  { dir: "components", name: "Components" },
  { dir: "motion-primitives", name: "Motion Primitives" },
  { dir: "composables", name: "Composables" },
  { dir: "providers", name: "Providers" },
  { dir: "containers", name: "Containers" },
];

/**
 * Extract title & description using regex from storybook stories
 */
function extractStoryInfo(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");

    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (!titleMatch) return null;

    const title = titleMatch[1];
    const parts = title.split(" / ");
    if (parts.length !== 2) return null;

    const [category, componentName] = parts;

    const descMatch = content.match(
      /docs:\s*\{[\s\S]*?description:\s*\{[\s\S]*?component:\s*["']([^"']+)["']/,
    );
    const description = descMatch ? descMatch[1] : `${componentName} component`;

    return {
      category,
      componentName,
      description,
    };
  } catch (error) {
    console.warn(`Could not parse ${filePath}:`, error.message);
    return null;
  }
}

function scanCategory(categoryDir, categoryName) {
  const categoryPath = join(srcDir, categoryDir);

  try {
    const files = readdirSync(categoryPath);
    const storyFiles = files.filter((file) => file.endsWith(".stories.tsx"));

    const components = [];

    for (const storyFile of storyFiles) {
      const storyPath = join(categoryPath, storyFile);
      const info = extractStoryInfo(storyPath);

      if (
        info &&
        info.category.toLowerCase().replace(/\s+/g, " ") ===
          categoryName.toLowerCase()
      ) {
        components.push({
          name: info.componentName,
          description: info.description,
        });
      }
    }

    components.sort((a, b) => a.name.localeCompare(b.name));

    return components;
  } catch (error) {
    console.warn(`Could not scan category ${categoryDir}:`, error.message);
    return [];
  }
}

function generateComponentsSection() {
  let output = "## Available Components\n\n";

  for (const { dir, name } of categories) {
    const components = scanCategory(dir, name);

    if (components.length > 0) {
      output += `### ${name}\n\n`;

      for (const { name: componentName, description } of components) {
        output += `- \`${componentName}\` - ${description}\n`;
      }

      output += "\n";
    }
  }

  return output.trim();
}

function updateReadme() {
  try {
    const readmeContent = readFileSync(readmePath, "utf8"),
      availableComponentsIndex = readmeContent.indexOf(
        "## Available Components",
      );

    if (availableComponentsIndex === -1) {
      console.error(
        'Could not find "## Available Components" section in README.md',
      );
      return;
    }

    const beforeComponents = readmeContent.substring(
        0,
        availableComponentsIndex,
      ),
      componentsSection = generateComponentsSection(),
      newReadmeContent = beforeComponents + componentsSection + "\n";

    writeFileSync(readmePath, newReadmeContent);

    console.log(
      "✅ README.md has been updated with current component information",
    );

    console.log("\nComponents found:");
    for (const { dir, name } of categories) {
      const components = scanCategory(dir, name);
      if (components.length > 0) {
        console.log(`  ${name}: ${components.length} components`);
      }
    }
  } catch (error) {
    console.error("Error updating README: ", error.message);
    process.exit(1);
  }
}

updateReadme();
