import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

const staticCache = 'static';
const dynamicCache = 'dynamic';
const revisionVersion = '1.0.0';

cleanupOutdatedCaches();

precacheAndRoute([
  { url: '/', revision: revisionVersion },
  { url: '/assets/scripts/index.js', revision: revisionVersion },
  { url: 'assets/css/main.css', revision: revisionVersion },
  { url: '/assets/images/bg.svg', revision: revisionVersion },
  { url: '/assets/images/favicon.ico', revision: revisionVersion },
  { url: '/assets/images/favicon.svg', revision: revisionVersion },
  { url: '/assets/images/apple-touch-icon.png', revision: revisionVersion },
  { url: '/assets/images/icon-72x72.png', revision: revisionVersion },
  { url: '/assets/images/icon-96x96.png', revision: revisionVersion },
  { url: '/assets/images/icon-128x128.png', revision: revisionVersion },
  { url: '/assets/images/icon-144x144.png', revision: revisionVersion },
  { url: '/assets/images/icon-152x152.png', revision: revisionVersion },
  { url: '/assets/images/icon-144x144.png', revision: revisionVersion },
  { url: '/assets/images/icon-192x192.png', revision: revisionVersion },
  { url: '/assets/images/icon-384x384.png', revision: revisionVersion },
  { url: '/assets/images/icon-512x512.png', revision: revisionVersion },
  { url: '/manifest.webmanifest', revision: revisionVersion }
]);

registerRoute(
  ({ request }) => request.destination == 'image',
  new CacheFirst({
    cacheName: staticCache,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
      })
    ]
  })
);

registerRoute(
  ({ request }) => request.destination == 'style',
  new CacheFirst({
    cacheName: staticCache,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
      })
    ]
  })
);

registerRoute(
  ({ request }) => request.destination == 'script',
  new StaleWhileRevalidate({
    cacheName: dynamicCache,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
      })
    ]
  })
);

registerRoute(
  ({ request }) => request.destination == 'document',
  new StaleWhileRevalidate({
    cacheName: dynamicCache,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
      })
    ]
  })
);
