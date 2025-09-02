// let cacheData = 'appv1'
// const FALLBACK_HTML = '/offline.html';   // pre‑cache this in the install step

// self.addEventListener('install',(event)=>{
//     event.waitUntil(
//         caches.open(cacheData).then((cache)=>{
//             cache.addAll([
//                 '/static/js/main.chunk.js',
//                 '/static/js/0.chunk.js',
//                 '/static/bundle.js',
//                 '/',
//                 '/service',
//                 '/aboutus',
//                 '/blog'
                
//                 // // you can add more Route that you want to store in cache
//             ])
//         })
//     )
// })

// self.addEventListener("fetch",(event)=>{
//     if(!navigator.onLine){
//         event.respondWith(
//             caches.match(event.request).then((resp)=>{
//                 if(resp){
//                     return resp
//                 }
//                 //  return fetch(event.request);

//                 let requestUrl = event.request.clone()
//                 fetch(requestUrl)
//             })
//         )
//     }
// })

// sw.js
const CACHE_NAME = 'app-v1';
const FALLBACK_HTML = '/offline.html';

// Pre-cache only real build assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',                 // root
        '/index.html',       // entry point
        FALLBACK_HTML,       // offline fallback
        '/static/js/bundle.js',
        '/static/js/vendors~main.chunk.js',
        '/static/js/main.chunk.js',
        '/static/css/main.chunk.css',
      ]).catch(err => {
        console.error('Failed to pre-cache:', err);
      });
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      try {
        // Try network first
        const networkResp = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, networkResp.clone());
        return networkResp;
      } catch (err) {
        // Fallback to cache
        const cachedResp = await caches.match(event.request);
        if (cachedResp) return cachedResp;

        // If it's a navigation request, fallback to offline.html
        if (event.request.mode === 'navigate') {
          return caches.match(FALLBACK_HTML);
        }

        return new Response('Offline', { status: 503, statusText: 'Offline' });
      }
    })()
  );
});
