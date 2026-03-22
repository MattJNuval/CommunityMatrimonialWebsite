# GitHub Pages Deployment Guide

This guide will help you deploy the Nepali Matrimony website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and pnpm installed

## Quick Start Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `nepali-matrimony`)
4. Choose "Public" (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Nepali Matrimony website"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top navigation)
3. Click on **Pages** in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. That's it! GitHub Actions will automatically build and deploy your site

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be live!

### Step 5: Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example, if your username is `johndoe` and repository is `nepali-matrimony`:
```
https://johndoe.github.io/nepali-matrimony/
```

## Updating Your Website

Whenever you make changes and want to deploy them:

```bash
# Make your changes to the code

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update: Description of your changes"

# Push to GitHub
git push origin main
```

The GitHub Action will automatically rebuild and redeploy your site!

## Testing the Build Locally

Before pushing to GitHub, you can test the production build locally:

```bash
# Build with the correct base path (replace 'your-repo-name' with your actual repository name)
VITE_BASE_PATH=/your-repo-name/ pnpm run build

# Preview the production build
pnpm run preview
```

This ensures your build will work correctly on GitHub Pages.

## Custom Domain (Optional)

If you want to use a custom domain (e.g., www.nepalimatrimony.com):

1. Go to your repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain name
3. Click **Save**
4. In your domain registrar's DNS settings, add a CNAME record:
   - **Host**: `www` (or `@` for apex domain)
   - **Points to**: `YOUR-USERNAME.github.io`
   - **TTL**: 3600 (or default)

5. Wait for DNS propagation (can take up to 48 hours)

## Troubleshooting

### Build Fails

If the GitHub Action fails:
1. Check the **Actions** tab for error messages
2. Common issues:
   - Missing dependencies: Make sure all packages are in `package.json`
   - Build errors: Test locally with `pnpm run build`

### Blank Page or Module Loading Errors

If you see a blank page or errors like "Loading module failed":
1. Make sure you've pushed the latest changes to GitHub
2. Check that the GitHub Action completed successfully (Actions tab)
3. The configuration now automatically detects your repository name
4. Wait a few minutes and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. Check browser console for specific errors (F12)

### 404 on Routes

If you get 404 errors when navigating to routes:
1. This is expected with GitHub Pages and React Router
2. Users should navigate from the home page
3. Or implement a 404.html redirect (advanced)

## Local Testing

Before deploying, always test locally:

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the [Vite documentation](https://vitejs.dev/)
3. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)

## Security Notes

- Never commit sensitive information (API keys, passwords, etc.)
- Use environment variables for sensitive data
- The `.gitignore` file is configured to exclude sensitive files
- This is a static website - suitable for public information only

---

**Happy Deploying! 🚀**