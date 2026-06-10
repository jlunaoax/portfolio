# Javier Luna - Portfolio Website

Modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export (compatible with any hosting)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Build for Production

```bash
npm run build
```

This generates a static site in the `out/` folder, ready to deploy anywhere (Vercel, Netlify, AWS S3 + CloudFront, GitHub Pages).

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with metadata/SEO
│   └── page.tsx         # Main page composition
├── components/
│   ├── Header.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Landing section with certifications
│   ├── Skills.tsx       # Technical skills grid
│   ├── Experience.tsx   # Work experience timeline
│   ├── Projects.tsx     # Portfolio projects showcase
│   ├── Education.tsx    # Education cards
│   ├── Contact.tsx      # Contact CTA section
│   └── Footer.tsx       # Footer
└── data/
    └── resume.ts        # All portfolio content (easy to update)
```

## Customization

All content lives in `src/data/resume.ts`. Update your:
- Personal info & links
- Skills
- Work experience
- Projects (add GitHub links when ready)
- Education

## Deployment Options

### Vercel (Recommended - free)
```bash
npx vercel
```

#### Deploy to Vercel:

- Go to https://vercel.com and sign up with your GitHub account (free)
- Click "Add New Project"
- Import your jlunaoax/portfolio repository
- Framework will auto-detect as Next.js — just click "Deploy"
- Done! You'll get a live URL in about 30 seconds


### Netlify
Drag & drop the `out/` folder after running `npm run build`.

### AWS S3 + CloudFront
Upload `out/` to S3 bucket with static website hosting enabled.

### GitHub Pages
Push `out/` folder contents to a `gh-pages` branch.
