import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate package.json exports based on the built files in dist/
 */
async function generateExports() {
  const distDir = path.join(__dirname, "../dist");
  const packageJsonPath = path.join(__dirname, "../package.json");

  if (!fs.existsSync(distDir)) {
    console.error("dist/ directory not found. Please run build first.");
    return;
  }

  // Read current package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  // Get all .js files from dist (these are our entry points)
  const jsFiles = fs
    .readdirSync(distDir)
    .filter((file) => file.endsWith(".js") && !file.includes(".map"))
    .map((file) => file.replace(".js", ""));

  console.log(`📦 Found ${jsFiles.length} JavaScript entry points`);

  // Generate exports object
  const exports = {};

  jsFiles.forEach((name) => {
    const hasTypes = fs.existsSync(path.join(distDir, `${name}.d.ts`));

    exports[`./${name}`] = {
      ...(hasTypes && { types: `./dist/${name}.d.ts` }),
      import: `./dist/${name}.js`,
      require: `./dist/${name}.cjs`,
    };
  });

  // Add static exports
  exports["./styles.css"] = "./src/styles.css";
  exports["./hljs-themes.css"] = "./src/hljs-themes.css";
  exports["./tailwind-colors.css"] = "./src/tailwind-colors.css";
  exports["./components.json"] = "./components.json";

  // Update package.json
  packageJson.exports = exports;

  // Write back to package.json
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n"
  );

  const withTypes = Object.values(exports).filter((exp) => exp.types).length;
  console.log(
    `✅ Generated ${Object.keys(exports).length} exports in package.json`
  );
  console.log(`📦 ${withTypes} exports include TypeScript declarations`);
}

generateExports().catch(console.error);
