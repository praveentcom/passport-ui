#!/usr/bin/env node

/**
 * Script to publish to GitHub Packages with scoped name
 * while maintaining the original name for npm
 */

import fs from 'fs/promises';
import { execSync } from 'child_process';
import path from 'path';
import process from 'process';

const PACKAGE_JSON_PATH = path.join(process.cwd(), 'package.json');
const BACKUP_PATH = path.join(process.cwd(), 'package.json.backup');

async function main() {
  try {
    console.log('📦 Starting GitHub Packages publish process...');
    
    // Read the original package.json
    const originalContent = await fs.readFile(PACKAGE_JSON_PATH, 'utf8');
    const packageJson = JSON.parse(originalContent);
    
    // Create backup
    await fs.writeFile(BACKUP_PATH, originalContent);
    console.log('✅ Created package.json backup');
    
    // Modify for GitHub Packages
    const modifiedPackageJson = {
      ...packageJson,
      name: '@praveentcom/passport-ui',
      publishConfig: {
        registry: 'https://npm.pkg.github.com',
        access: 'public'
      }
    };
    
    // Write modified package.json
    await fs.writeFile(PACKAGE_JSON_PATH, JSON.stringify(modifiedPackageJson, null, 2));
    console.log('✅ Updated package.json for GitHub Packages');
    
    // Publish to GitHub Packages
    console.log('🚀 Publishing to GitHub Packages...');
    execSync('npm publish --registry=https://npm.pkg.github.com', { 
      stdio: 'inherit',
      env: { ...process.env }
    });
    
    console.log('✅ Successfully published to GitHub Packages');
    
  } catch (error) {
    console.error('❌ Error during GitHub Packages publish:', error.message);
    process.exit(1);
  } finally {
    try {
      const backupExists = await fs.access(BACKUP_PATH).then(() => true).catch(() => false);
      if (backupExists) {
        const backupContent = await fs.readFile(BACKUP_PATH, 'utf8');
        await fs.writeFile(PACKAGE_JSON_PATH, backupContent);
        await fs.unlink(BACKUP_PATH);
        console.log('✅ Restored original package.json');
      }
    } catch (restoreError) {
      console.error('❌ Error restoring package.json:', restoreError.message);
    }
  }
}

main();
