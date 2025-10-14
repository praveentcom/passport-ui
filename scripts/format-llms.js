#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const srcDir = join(rootDir, "src");
const llmsPath = join(rootDir, "docs/public/llms.txt");

const categories = [
  { dir: "components", name: "Components", sectionTitle: "### Components" },
  { dir: "layouts", name: "Layout Containers", sectionTitle: "### Layout Containers" },
  { dir: "providers", name: "Providers", sectionTitle: "### Providers" },
  { dir: "hooks", name: "Hooks", sectionTitle: "### Hooks" },
  { dir: "composables", name: "Composables", sectionTitle: "### Composables" },
  { dir: "motion-primitives", name: "Motion Primitives", sectionTitle: "### Motion Primitives" },
];

/**
 * Extract component information from definition.ts file
 */
function extractDefinitionInfo(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");
    
    // Extract name
    const nameMatch = content.match(/name:\s*["']([^"']+)["']/);
    if (!nameMatch) return null;
    
    // Extract description
    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    
    // Extract slug
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
    
    return {
      name: nameMatch[1],
      description: descMatch ? descMatch[1] : "",
      slug: slugMatch ? slugMatch[1] : null,
    };
  } catch (error) {
    console.warn(`Could not parse ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Scan a category directory for components
 */
function scanCategory(categoryDir) {
  const categoryPath = join(srcDir, categoryDir);
  try {
    const components = [];
    const componentDirs = readdirSync(categoryPath);

    for (const componentDir of componentDirs) {
      const componentPath = join(categoryPath, componentDir);
      try {
        const definitionPath = join(componentPath, "definition.ts");
        const info = extractDefinitionInfo(definitionPath);

        if (info) {
          const docUrl = `https://passportui.com/${categoryDir}/${componentDir}/`;
          components.push({
            name: info.name,
            description: info.description,
            docUrl,
          });
        }
      } catch (e) {
        // Not a directory or missing definition, ignore.
      }
    }

    components.sort((a, b) => a.name.localeCompare(b.name));
    return components;
  } catch (error) {
    console.warn(`Could not scan category ${categoryDir}:`, error.message);
    return [];
  }
}

/**
 * Generate component list markdown for a category
 */
function generateComponentListMarkdown(category) {
  const components = scanCategory(category.dir);
  if (components.length === 0) return "";

  const lines = [category.sectionTitle, ""];
  
  for (const component of components) {
    lines.push(`- [${component.name}](${component.docUrl}): ${component.description}`);
  }
  
  return lines.join("\n");
}

/**
 * Update llms.txt file with generated component lists
 */
function updateLlmsTxt() {
  let content = readFileSync(llmsPath, "utf8");
  
  // Split content at "## List of all available components"
  const listSectionMatch = content.match(/## List of all available components\s*\n/);
  
  if (!listSectionMatch) {
    console.error("Could not find '## List of all available components' section in llms.txt");
    return;
  }
  
  const beforeListSection = content.substring(0, listSectionMatch.index + listSectionMatch[0].length);
  
  // Generate all category sections
  const categorySections = [];
  
  for (const category of categories) {
    const markdown = generateComponentListMarkdown(category);
    if (markdown) {
      categorySections.push(markdown);
      categorySections.push(""); // Add blank line between sections
    }
  }
  
  // Remove trailing blank line
  if (categorySections[categorySections.length - 1] === "") {
    categorySections.pop();
  }
  
  // Construct new content
  const newContent = [
    beforeListSection.trim(),
    "",
    ...categorySections,
    ""
  ].join("\n");
  
  writeFileSync(llmsPath, newContent);
  
  const totalComponents = categories.reduce((sum, cat) => {
    return sum + scanCategory(cat.dir).length;
  }, 0);
  
  console.log(`✅ Updated llms.txt with ${totalComponents} components across ${categories.length} categories`);
}

console.log("ℹ️  Updating llms.txt with component information...");
updateLlmsTxt();

