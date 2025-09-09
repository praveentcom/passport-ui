# Install Passport UI Site

This is the installation documentation site for Passport UI, built with Next.js and using the actual Passport UI components as a test bed.

## Development

From the root of the passport-ui repo:

```bash
# Install dependencies
npm run install-site:install

# Start development server
npm run install-site:dev
```

The site will be available at http://localhost:3000

## Build

```bash
# Build for production
npm run install-site:build
```

## Pages

- `/` - Installation guide and documentation
- `/colors` - Color system documentation

## Deployment

This site is configured for static export and can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

The build output will be in the `out/` directory after running `npm run build`.
