/* Orbit Personal service worker: cache the self-contained app for offline use. */
const CACHE_NAME = 'orbit-personal-v2.3.0-v2.4.1';
const CORE_FILES = [
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const urls = CORE_FILES.map((file) => new URL(file, self.registration.scope).href);
    await cache.addAll(urls);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith('orbit-personal-') && name !== CACHE_NAME).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      } catch (_) {
        const cached = await caches.match(request);
        if (cached) return cached;
        const appUrl = new URL('./index.html', self.registration.scope).href;
        return (await caches.match(appUrl)) || Response.error();
      }
    })());
    return;
  }

  if (url.pathname.endsWith('/manifest.webmanifest') || /\/icons\/icon-(192|512)\.png$/.test(url.pathname)) {
    event.respondWith((async () => (await caches.match(request)) || fetch(request))());
  }
});
