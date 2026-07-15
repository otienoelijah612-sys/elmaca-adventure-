# Elmaca Adventure

Professional website for Elmaca Adventure, built with Next.js, React, TypeScript, and Tailwind CSS. Optimized for deployment on Cloudflare via the OpenNext adapter.

## Prerequisites

- Node.js 20 or later
- npm 10+ (or pnpm / yarn)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Copy environment files:

```bash
copy .env.local.example .env.local
copy .dev.vars.example .dev.vars
```

3. Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cloudflare deployment

This project uses [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) (the current recommended adapter for Next.js on Cloudflare, replacing the deprecated `@cloudflare/next-on-pages`).

### Local preview (Cloudflare runtime)

```bash
npm run preview
```

### Deploy to Cloudflare

```bash
npm run deploy
```

### Cloudflare Pages / Workers Git integration

When connecting this repo to Cloudflare, use these build settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Non-production branch deploy command | `npm run upload` |
| Node.js version | `20` or later |

Enable the `nodejs_compat` compatibility flag (already set in `wrangler.jsonc`).

## Project structure

```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable UI components
│   ├── layout/       # Header, Footer, Navigation
│   ├── ui/           # Button, Card, Input
│   ├── sections/     # Page sections (Hero, Features, CTA)
│   └── shared/       # Logo, SocialLinks
├── lib/              # Utilities and constants
├── types/            # TypeScript type definitions
└── data/             # Static content (adventures, etc.)
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Next.js development server |
| `npm run build` | Production build |
| `npm run preview` | Build and preview on Cloudflare runtime locally |
| `npm run deploy` | Build and deploy to Cloudflare |
| `npm run upload` | Build and upload (for preview branches) |
| `npm run lint` | Run ESLint |
| `npm run cf-typegen` | Generate Cloudflare binding types |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/adventures` | Adventures listing |
| `/adventures/[slug]` | Adventure detail |
| `/gallery` | Gallery |
| `/contact` | Contact |
