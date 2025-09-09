# Deploying Storybook to passportui.com

This guide explains how to deploy the passport-ui Storybook to your custom domain using Cloudflare Pages.

## Prerequisites

- Domain `passportui.com` configured in Cloudflare DNS
- GitHub repository with the passport-ui code
- Cloudflare account with access to Pages

## Deployment Steps

### 1. Build Storybook for Production

```bash
npm run deploy-storybook
```

This command will:

- Build the Storybook static files
- Copy the deployment configuration files (`_headers` and `_redirects`) to the build output

### 2. Deploy to Cloudflare Pages

#### Option A: Git Integration (Recommended)

1. **Push to GitHub**: Make sure your code is pushed to your GitHub repository
2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages**
   - Click **Create a project**
   - Choose **Connect to Git**
   - Select your `passport-ui` repository
   - Configure build settings:
     - **Build command**: `npm run deploy-storybook`
     - **Build output directory**: `storybook-static`
     - **Node.js version**: `22.0.0` (or latest)

3. **Configure Custom Domain**:
   - After deployment, go to your project settings
   - Navigate to **Custom domains**
   - Add `passportui.com` and `www.passportui.com`
   - Cloudflare will automatically configure the DNS records

#### Option B: Direct Upload

1. **Build locally**: `npm run deploy-storybook`
2. **Upload to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Click **Upload assets**
   - Upload the entire `storybook-static` folder
   - Configure custom domain as above

### 3. DNS Configuration

If using Git integration, Cloudflare will automatically configure DNS. If you need manual setup:

1. Go to **Cloudflare Dashboard** → **DNS**
2. Add these records:
   - **Type**: `CNAME`, **Name**: `www`, **Content**: `your-project.pages.dev`
   - **Type**: `CNAME`, **Name**: `@`, **Content**: `your-project.pages.dev`

### 4. SSL/TLS Configuration

1. Navigate to **SSL/TLS** in Cloudflare
2. Set encryption mode to **Full**
3. Enable **Always Use HTTPS**
4. Enable **Automatic HTTPS Rewrites**

## Configuration Files

### `_headers`

Configures security headers and caching for optimal performance:

- Security headers (XSS protection, content type options)
- Cache control for static assets
- No caching for HTML files

### `_redirects`

Handles routing for the single-page application:

- Redirects all 404s to the main Storybook page
- Optional www to non-www redirect

## Future Deployments

Once set up with Git integration, future deployments are automatic:

1. Make changes to your Storybook
2. Push to GitHub
3. Cloudflare Pages automatically rebuilds and deploys

## Troubleshooting

### Build Fails

- Check Node.js version is 22.0.0 or higher
- Verify all dependencies are installed
- Check build logs in Cloudflare Pages dashboard

### Domain Not Working

- DNS propagation can take up to 24 hours
- Verify DNS records are correctly configured
- Check SSL certificate status in Cloudflare

### Storybook Not Loading

- Check browser console for errors
- Verify `_redirects` file is in the build output
- Check network requests in browser dev tools

## Local Testing

To test the build locally before deployment:

```bash
npm run deploy-storybook
cd storybook-static
python3 -m http.server 8080
```

Then visit `http://localhost:8080` to verify everything works correctly.
