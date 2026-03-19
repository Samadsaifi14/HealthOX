# HealthOX (PWA)

Single-file Progressive Web App that scans food barcodes and fetches product data from multiple free databases. Ratings are computed **on-device** (no API keys). All data stays on-device (IndexedDB + localStorage). Offline works for previously scanned products.

## Files

```
ai-health-advisor/
├── index.html
├── sw.js
├── manifest.json
└── README.md
```

## Lookup Strategy — Maximum Global Coverage

HealthOX cascades through **5 free databases** (no API keys, no payment) in order:

| Priority | Database | Covers |
|---|---|---|
| 1 | **Open Food Facts** (v3 → v2 fallback) | 3M+ food products worldwide |
| 2 | **Open Products Facts** | General consumer goods / non-food |
| 3 | **Open Beauty Facts** | Cosmetics, personal care, hygiene |
| 4 | **Open Pet Food Facts** | Pet food & treats |
| 5 | **UPC Item DB** (100 free/day) | Broad global product catalog |
| Fallback | **Google Search link** | Opens browser — no API required |

**On-device safety checks (no network):**
- **FDA GRAS Database** — 80+ common additives cross-checked against E-numbers from the product data. Color-coded: ✔ GRAS / ⚠ Watch / 🚫 Banned.
- **Open Food Facts Additives Database** — additive tags (`en:e621` etc.) are returned with every OFF product and cross-checked on-device.

## Run locally

Service workers require **HTTPS** or **localhost**.

### Option A: VS Code Live Server
1. Install the "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Option B: Python

```bash
python -m http.server 5173
```

Then open `http://localhost:5173/`

## Deploying HealthOX (Free)

### Option 1: GitHub Pages (Recommended, Free Forever)
1. Create a new GitHub repo (public)
2. Upload all 4 files to the repo root
3. Go to Settings → Pages → Deploy from main branch
4. Your app is live at: `https://YOURUSERNAME.github.io/REPONAME`

### Option 2: Vercel (Also Free)
1. Go to vercel.com → New Project → Import from GitHub
2. Deploy as a static site (no framework)
3. Get a free `.vercel.app` URL instantly

## Cost Breakdown
- Hosting: $0 (GitHub Pages)
- Open Food Facts / Products / Beauty / Pet Food: $0 (always free, open-source)
- UPC Item DB: $0 (100 free lookups/day on trial tier)
- FDA GRAS check: $0 (embedded on-device lookup table)
- API keys: $0 (none required)

## UPC Item DB limits
The trial tier allows 100 lookups per day from the same IP. This is plenty for personal use. If you need more, sign up for a free or paid UPC Item DB account and pass your key in the URL (`?apikey=YOUR_KEY`) — no code changes needed.

## Push / Notifications
- This app uses **local notifications** (on-device) when you're close to your daily calorie limit.
- The service worker includes a `push` handler so you *can* add true Web Push later, but **this project has no backend** (by design).

## Notes / Troubleshooting
- Camera permission: if you deny camera access, re-enable it in your browser site settings.
- iOS: camera + notifications work best when installed via "Add to Home Screen".
- Offline: only previously scanned products are available offline (from IndexedDB cache).
- If a product isn't found after all 5 sources are tried, use the **Google Search** link in the app to look it up, then fill in the manual entry form.


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

