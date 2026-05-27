# PDMS – Prakash Dredging & Marine Services

A production-ready React + TypeScript + Tailwind CSS website for PDMS.

## Tech Stack

- **React 18** with TypeScript
- **Vite** – fast dev server and build tool
- **Tailwind CSS** – utility-first styling
- **Lucide React** – icons
- **Vercel** – hosting with custom domain support

## Project Structure

```
pdms-website/
├── public/               ← static images served as-is
│   ├── logoCreator_imagetologo.jpg
│   ├── marine.png
│   └── ... (all dredger photos)
├── src/
│   ├── components/       ← one file per section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Clients.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── index.ts      ← all static content (clients, services, etc.)
│   ├── App.tsx           ← root component
│   ├── main.tsx          ← entry point
│   └── index.css         ← Tailwind base styles
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── vercel.json           ← SPA rewrite rule for Vercel
└── package.json
```

## Local Development

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run typecheck  # TypeScript type checking
npm run lint       # ESLint
```

## Deploying to Vercel

### Option A – Vercel CLI (fastest)

```bash
# Install Vercel CLI globally (one-time)
npm i -g vercel

# From the project root:
vercel

# Follow the prompts. For subsequent deploys:
vercel --prod
```

### Option B – GitHub + Vercel Dashboard

1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/pdms-website.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Vite. Click **Deploy**.

### Custom Domain

1. In the Vercel dashboard, open your project → **Settings → Domains**.
2. Add your domain (e.g. `pdms.co.in`).
3. Copy the DNS records Vercel shows you and add them in your domain registrar's DNS panel.
4. Vercel provisions an SSL certificate automatically.

## Updating Content

All text content lives in **`src/data/index.ts`** – edit there to update:
- Navigation links
- Products list and images
- Services lists
- Gallery items
- Clients
- Contact info
- "Why Choose Us" bullets

Images live in the **`public/`** folder. Drop in a new image and reference it as `/filename.jpg`.
