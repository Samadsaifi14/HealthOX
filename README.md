# HealthOX (PWA)

Single-file Progressive Web App that scans food barcodes and fetches product data from Open Food Facts. Ratings are computed **on-device** (no API keys). All data stays on-device (IndexedDB + localStorage). Offline works for previously scanned products.

## Files

```
ai-health-advisor/
├── index.html
├── sw.js
├── manifest.json
└── README.md
```

## Run locally

Service workers require **HTTPS** or **localhost**.

### Option A: VS Code Live Server
1. Install the “Live Server” extension
2. Right-click `index.html` → “Open with Live Server”

### Option B: Python

```bash
python -m http.server 5173
```

Then open `http://localhost:5173/ai-health-advisor/`

## Deploying HealthOX (Free)

### Option 1: GitHub Pages (Recommended, Free Forever)
1. Create a new GitHub repo (public)
2. Upload `index.html`, `sw.js`, `manifest.json`, `README.md` (keep them in the repo root)
3. Go to Settings → Pages → Deploy from main branch
4. Your app is live at: `https://YOURUSERNAME.github.io/REPONAME`

### Option 2: Vercel (Also Free)
1. Go to vercel.com → New Project → Import from GitHub
2. Deploy as a static site (no framework)
3. Get a free `.vercel.app` URL instantly

## Cost Breakdown
- Hosting: $0 (GitHub Pages)
- Open Food Facts: $0 (always free)
- API keys: $0 (none)

## Push / Notifications
- This app uses **local notifications** (on-device) when you’re close to your daily calorie limit.
- The service worker includes a `push` handler so you *can* add true Web Push later, but **this project has no backend** (by design).

## Notes / Troubleshooting
- Camera permission: if you deny camera access, re-enable it in your browser site settings.
- iOS: camera + notifications work best when installed via “Add to Home Screen”.
- Offline: only previously scanned products are available offline (from IndexedDB cache).

