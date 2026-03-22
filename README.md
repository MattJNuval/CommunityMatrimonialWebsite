# Nepali Matrimony Website

A modern, responsive community matrimonial website for a Nepali cultural organization.

## Features

- **Home Page**: Welcoming landing page with hero section, features, and testimonials
- **About Page**: Mission, values, process, and statistics
- **Submission Form**: Comprehensive profile submission form
- Responsive design (desktop + mobile)
- Cultural color palette inspired by Nepali traditions
- Clean typography with serif headings and sans-serif body text

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS v4
- React Router 7
- Vite

## Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm run dev
```

3. Build for production:
```bash
pnpm run build
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository**:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Navigate to **Pages** in the left sidebar
   - Under **Build and deployment**:
     - Source: Select **GitHub Actions**
   
3. **Automatic Deployment**:
   - The website will automatically deploy when you push to the `main` branch
   - The GitHub Action workflow will build and deploy your site
   - Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
pnpm run build

# The built files will be in the 'dist' directory
# You can then manually upload these to GitHub Pages or any static hosting service
```

### Custom Domain (Optional)

To use a custom domain:
1. Go to repository **Settings** > **Pages**
2. Enter your custom domain under **Custom domain**
3. Add a `CNAME` record in your domain's DNS settings pointing to `YOUR-USERNAME.github.io`

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Root.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   └── SubmissionForm.tsx
│   │   ├── App.tsx
│   │   └── routes.ts
│   └── styles/
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── vite.config.ts
└── package.json
```

## Color Palette

- **Primary (Deep Red)**: #8B1538
- **Maroon**: #A61C3C
- **Gold**: #D4AF37
- **Gold Light**: #F4D03F
- **Cream**: #FDF8F3
- **Cream Dark**: #F5EDE4

## Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## License

© 2026 Nepali Matrimony. All rights reserved.
