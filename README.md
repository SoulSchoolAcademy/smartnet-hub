# SmartNET HUB v17 — Next.js Starter

This repo is a **drop-in starter** for the SmartNET Hub screen (v17 polish). It matches the layout and UI tokens we finalized.

## Run locally
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy flow (GitHub → Vercel)
1. Create a **new GitHub repo** and push this project.
2. In **Vercel**, click *New Project* → Import the repo.
3. Framework is detected as Next.js. Keep build defaults.
4. (Optional) Add **Environment Variables** for your APIs.
5. Click **Deploy**. Every push to `main` → production. Every PR → preview URL.

## Project structure
- `/app/page.tsx` — the Hub screen (client component, contains the UI & demo logic).
- `/styles/tokens.css` — **design tokens** (Light/Dark/NAYA + borders/contrast rules).
- `/styles/globals.css` — base styles + tokens import.

## Routing plan (next screens)
- `/hub` or `/` — the Hub (this screen)
- `/mail`, `/affiliates`, `/crm`, `/scheduler`, `/contacts`, `/world`, `/feeds`, `/wallet`, `/analytics`, `/academy`, `/soulschool`
  - Each page imports **tokens.css** and reuses the same button/sidebar/tab classes.

## Theming
We use a `data-theme` attribute on `<html>` (`dark`, `light`, `naya`). The NAYA rule: black surfaces + white borders for all interactive elements.

---
**Note:** Icons are emoji placeholders. Swap to your **SVG set** (monotone `currentColor`, 22–24px) when ready.
