// Service worker minimal pour rendre le site installable (PWA).
// Il ne fait pas de cache agressif : les données JSONBin doivent
// toujours être rechargées en direct pour rester synchronisées.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// On laisse passer toutes les requêtes normalement (pas de mode hors-ligne),
// ce fichier sert uniquement à satisfaire la condition "service worker" des PWA.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
