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

You can use pnpm, Yarn, or npm to run this project locally. Pick the tool you prefer.

Using pnpm (project default):

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

Using Yarn (recommended for this system):

1. If you don't have Yarn, enable Corepack and activate Yarn (recommended):
```bash
corepack enable
corepack prepare yarn@stable --activate
```

2. From the project root, install dependencies:
```bash
yarn install
# or simply
yarn
```

3. NOTE: `react` and `react-dom` are listed as `peerDependencies` in `package.json` and will NOT be installed automatically. Add them with:
```bash
yarn add react@18.3.1 react-dom@18.3.1
```

4. Start the dev server:
```bash
yarn dev
```

Using npm:

1. Install dependencies:
```bash
npm install
```

2. Add peer deps if needed:
```bash
npm install react@18.3.1 react-dom@18.3.1
```

3. Start development:
```bash
npm run dev
```

Notes and gotchas

- Peer dependencies: `react` and `react-dom` are intentionally declared as peer deps. If you'd prefer `yarn install` (or `npm install`) to be sufficient, move them into `dependencies` in `package.json` and commit the change. I can make that edit for you if you'd like.
- Yarn versions: Yarn Berry (v2+) uses Plug'n'Play by default. To keep the familiar node_modules layout, either use the above Corepack-activated Yarn (classic behavior) or configure Yarn with `nodeLinker: "node-modules"` in a `.yarnrc.yml` file.
- The repository includes a `pnpm.overrides` field in `package.json`; Yarn will ignore it (harmless).

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
