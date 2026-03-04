# Sharnex ERP Website

A modern multi-page React application for a School Management / ERP platform UI.  
This project was built as an intern assignment with focus on visual consistency, responsive design, legal pages, and production-ready deployment on Vercel.

## Live Scope

Implemented pages:
- Home
- About Us
- Features
- Pricing
- Terms of Use
- Privacy Policy
- 404 Page

## Key Features

- Purple-gradient brand theme with improved visual hierarchy
- Sticky responsive navbar with active route highlighting
- Fully connected navigation (navbar + footer)
- Enhanced footer design with CTA, link groups, and contact section
- Modern card layouts with hover effects and subtle transitions
- Structured legal pages (headings, sections, bullets, table of contents anchors)
- Smooth scroll behavior
- Scroll-to-top floating action button
- Basic SEO meta tags and favicon
- SPA routing support for direct refresh via Vercel rewrite

## Tech Stack

- React
- React Router DOM
- Tailwind CSS (v4 style PostCSS integration)
- Material UI (MUI)
- Vite

## Project Structure

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── PrimaryButton.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── ScrollToTopButton.jsx
│   │   ├── SectionHero.jsx
│   │   ├── SiteFooter.jsx
│   │   └── SiteNavbar.jsx
│   ├── hooks/
│   │   └── useDocumentMeta.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   └── TermsPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 20+ (Node 24 compatible)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment (Vercel)

This project is configured for SPA routing on Vercel.

`vercel.json`:
- Rewrites all routes to `index.html`
- Prevents refresh 404 errors on nested routes (`/about`, `/pricing`, etc.)

Deployment steps:
1. Push the repo to GitHub.
2. Import repository in Vercel.
3. Framework preset: `Vite` (auto-detected).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Notes

- No backend/API is currently integrated.
- If needed , we can add APIs later, place environment variables in `.env` using `VITE_` prefix.

## License

This project includes a `LICENSE` file in the root directory.
