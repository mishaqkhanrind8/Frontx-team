const CACHE_NAME = "v1";
const ASSETS_TO_CACHE = [
  "/",               // Home page
  "/index.html",
  "/styles.css",
  "/script.js",
  "/assets/android-chrome-192x192.png",
  "/assets/android-chrome-512x512.png",
];

// Helper: cache assets safely
async function cacheAssetsSafely(cache, assets) {
  for (const asset of assets) {
    try {
      await cache.add(asset);
      console.log(`Cached: ${asset}`);
    } catch (err) {
      console.warn(`Failed to cache ${asset}:`, err);
    }
  }
}

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cacheAssetsSafely(cache, ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Fetch Handler
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => caches.match("/index.html"));
    })
  );
});
