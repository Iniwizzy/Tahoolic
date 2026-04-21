# Tahoolic Landing Page

Modern, responsive food-brand landing page for Tahoolic (tahu bakso topping) built with Vite + React, Tailwind CSS, and Framer Motion.

## Stack

- Vite + React (JavaScript)
- Tailwind CSS (via `@tailwindcss/vite`)
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Production Build

Build static files to `dist`:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy to GitHub Pages

The project is configured with the `gh-pages` package and deploy scripts.

1. Update `homepage` in `package.json` with your GitHub username/repository.
2. If your repository name is not `Tahoolic`, update `base` in `vite.config.js`.
3. Run deploy:

```bash
npm run deploy
```

This runs `predeploy` (`npm run build`) and publishes the `dist` folder to the `gh-pages` branch.
