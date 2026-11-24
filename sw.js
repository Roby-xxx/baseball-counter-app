const CACHE_NAME = 'bca-v2';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './Scoreboard.html',
  './PitchCounter.html',
  './SimpleStrikeCounter.html',
  './AdvancedStrikeCounter.html',
  './readme.html',
  './tailwind.js',
  './manifest.json',
  './icon.png',
  './wakelock.js',
  './app-ui.css',
  './fonts.css',
  './fonts/inter-400.ttf',
  './fonts/inter-600.ttf',
  './fonts/inter-700.ttf',
  './fonts/inter-900.ttf',
  './fonts/roboto-mono-700.ttf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
