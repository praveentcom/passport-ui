#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
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
  { dir: "layouts", name: "Layouts" },
  { dir: "providers", name: "Providers" },
  { dir: "components", name: "Components" },
  { dir: "hooks", name: "Hooks" },
  { dir: "composables", name: "Composables" },
  { dir: "motion-primitives", name: "Motion Primitives" },
];

/**
 * Extract title from storybook stories and generate documentation link
 */
function extractStoryInfo(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");

    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (!titleMatch) return null;

    const title = titleMatch[1];
    const parts = title.split("/");
    if (parts.length !== 2) return null;

    const [category, componentName] = parts.map((part) => part.trim());

    // Generate Storybook documentation URL
    const storyId = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\//g, "-");
    const docUrl = `https://passportui.com/?path=/docs/${storyId}`;

    return {
      category,
      componentName,
      docUrl,
    };
  } catch (error) {
    console.warn(`Could not parse ${filePath}:`, error.message);
    return null;
  }
}

function scanCategory(categoryDir, categoryName) {
  const categoryPath = join(srcDir, categoryDir);

  try {
    const components = [];
    const componentDirs = readdirSync(categoryPath);

    for (const componentDir of componentDirs) {
      const componentPath = join(categoryPath, componentDir);
      try {
        const files = readdirSync(componentPath);
        const storyFile = files.find((file) => file.endsWith(".stories.tsx"));

        if (storyFile) {
          const storyPath = join(componentPath, storyFile);
          const info = extractStoryInfo(storyPath);

          if (
            info &&
            info.category.toLowerCase().replace(/\s+/g, " ") ===
              categoryName.toLowerCase()
          ) {
            components.push({
              name: info.componentName,
              docUrl: info.docUrl,
            });
          }
        }
      } catch (e) {
        // Not a directory, ignore.
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

      for (const { name: componentName, docUrl } of components) {
        output += `- [\`${componentName}\`](${docUrl})\n`;
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
        "## Available Components"
      );

    if (availableComponentsIndex === -1) {
      console.error(
        'Could not find "## Available Components" section in README.md'
      );
      return;
    }

    const beforeComponents = readmeContent.substring(
        0,
        availableComponentsIndex
      ),
      componentsSection = generateComponentsSection(),
      newReadmeContent = beforeComponents + componentsSection + "\n";

    writeFileSync(readmePath, newReadmeContent);

    console.log(
      "✅ README.md has been updated with current component information"
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
  }
}

updateReadme();
