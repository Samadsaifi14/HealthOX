/* HealthOX - Service Worker
   - Offline cache for static assets + CDN libs
   - Network-first for API calls (Open Food Facts)
   - Push notification hooks (future server push support)
*/

const CACHE = "health-advisor-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://unpkg.com/@zxing/library@0.20.0/umd/index.min.js",
  "https://cdn.jsdelivr.net/npm/idb@8/build/umd.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => (k === CACHE ? Promise.resolve() : caches.delete(k))));
      await self.clients.claim();
    })()
  );
});

function isApiRequest(url) {
  return (url.origin === "https://world.openfoodfacts.org");
}

function isStaticAssetRequest(url) {
  // Cache-first for same-origin app shell and known libs/fonts if they end up cached.
  if (url.origin === self.location.origin) return true;
  if (url.origin === "https://unpkg.com") return true;
  if (url.origin === "https://cdn.jsdelivr.net") return true;
  if (url.origin === "https://fonts.googleapis.com") return true;
  if (url.origin === "https://fonts.gstatic.com") return true;
  return false;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Network-first for API calls (always freshest; offline handled by IndexedDB in app)
  if (isApiRequest(url)) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          return fresh;
        } catch (e) {
          // If offline, there's no safe cached API response to serve.
          return new Response(JSON.stringify({ error: "offline" }), {
            status: 503,
            headers: { "Content-Type": "application/json" }
          });
        }
      })()
    );
    return;
  }

  // Cache-first for static assets
  if (isStaticAssetRequest(url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(req, { ignoreSearch: true });
        if (cached) return cached;
        try {
          const res = await fetch(req);
          // Best-effort cache put (opaque responses may throw on some browsers).
          try { await cache.put(req, res.clone()); } catch (_) {}
          return res;
        } catch (e) {
          // App shell fallback
          if (url.origin === self.location.origin) {
            const fallback = await cache.match("./index.html");
            if (fallback) return fallback;
          }
          throw e;
        }
      })()
    );
  }
});

self.addEventListener("push", (event) => {
  const data = (() => {
    try { return event.data?.json?.() || {}; } catch (_) { return {}; }
  })();
  event.waitUntil(
    self.registration.showNotification(data.title || "Health Advisor", {
      body: data.body || "Open the app for details.",
      icon: data.icon || undefined,
      badge: data.badge || undefined,
      data
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    (async () => {
      const allClients = await clients.matchAll({ type: "window", includeUncontrolled: true });
      for (const c of allClients) {
        if ("focus" in c) return c.focus();
      }
      return clients.openWindow("./");
    })()
  );
});

// Periodic Background Sync hook (supported on Chrome Android; requires additional registration from page)
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "daily-reminder") {
    event.waitUntil(
      self.registration.showNotification("Meal log reminder", {
        body: "Remember to log your meals today.",
        tag: "health-advisor-reminder"
      })
    );
  }
});

