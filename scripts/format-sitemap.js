#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const srcDir = join(rootDir, "src");
const sitemapPath = join(rootDir, "install-site/app/sitemap.ts");

const categories = [
  { dir: "layouts", name: "Layout Containers" },
  { dir: "providers", name: "Providers" },
  { dir: "components", name: "Components" },
  { dir: "hooks", name: "Hooks" },
  { dir: "composables", name: "Composables" },
  { dir: "motion-primitives", name: "Motion Primitives" },
];

function extractStoryInfo(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (!titleMatch) return null;

    const title = titleMatch[1];
    const parts = title.split("/");
    if (parts.length !== 2) return null;

    const [category, componentName] = parts.map((part) => part.trim());

    return {
      category,
      componentName,
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
            const docUrl = `/${categoryDir}/${componentDir}/`;
            components.push({
              name: info.componentName,
              docUrl,
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

function generateSitemap() {
  const componentUrls = [];
  for (const { dir, name } of categories) {
    const components = scanCategory(dir, name);
    if (components.length > 0) {
      for (const { docUrl } of components) {
        componentUrls.push(`{
      url: \`\${baseUrl}${docUrl}\`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    }`);
      }
    }
  }

  const sitemapContent = `import { MetadataRoute } from "next";
import { SITE_CONFIG } from "../constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: \`\${baseUrl}/colors\`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/fonts\`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ${componentUrls.join(",\n    ")}
  ];
}
`;

  writeFileSync(sitemapPath, sitemapContent);
  console.log("✅ Sitemap generated successfully.");
}

console.log("ℹ️  Generating sitemap...");
generateSitemap();
