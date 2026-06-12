# FitNova Website

Marketing website for the FitNova gym app, built with React + Vite.
Fully self-contained — this folder can be moved out of the Flutter
project and run on its own.

## Run locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
```

## Build for production

```bash
npm run build    # output in dist/
npm run preview  # preview the production build
```

## Structure

- `public/images/` — artwork copied from the Flutter app's assets
  (renamed to URL-safe names, e.g. `chest&triceps.png` → `chest-triceps.png`)
- `src/components/` — one component per page section
  (Navbar, Hero, Stats, Features, Programs, Muscles, HowItWorks,
  Testimonials, DownloadCTA, Footer)
- `src/index.css` — design system mirroring the app's
  `lib/config/app_theme.dart` (dark olive + neon lime, Poppins)
