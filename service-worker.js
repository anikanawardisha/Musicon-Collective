
const CACHE_NAME = "musicon-app-v1";

const FILES_TO_CACHE = [
    "./",
    "./styles.css",
    "./script.js",
    "./images/hero.jpg",
    "./images/legepladsen.png",
    "./images/lokale.png",
    "./images/sharebox.png",
    "./images/arrengementer.jpg",
    "./images/icon-192.png",
    "./images/icon-512.png"
];

// Install service worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting();
});

// Activate service worker
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );

    self.clients.claim();
});

// Fetch cached files
self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    const url = new URL(event.request.url);

    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then(cachedFile => {
            return cachedFile || fetch(event.request);
        })
    );
});
