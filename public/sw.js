let cacheData = 'appv1'
const FALLBACK_HTML = '/offline.html';   // pre‑cache this in the install step

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/bundle.js',
                '/',
                '/service',
                '/aboutus',
                '/blog'
                
                // // you can add more Route that you want to store in cache
            ])
        })
    )
})

self.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp
                }
                //  return fetch(event.request);

                let requestUrl = event.request.clone()
                fetch(requestUrl)
            })
        )
    }
})

// sw.js
// const CACHE_NAME = 'app‑v1';


// self.addEventListener('fetch', event => {
//   // Never touch navigator.onLine inside the SW — use try/catch instead.
//   event.respondWith(
//     (async () => {
//       try {
//         // 1️⃣ Try the network first. If it works, put a fresh copy in cache.
//         const networkResp = await fetch(event.request);
//         const cache = await caches.open(CACHE_NAME);
//         cache.put(event.request, networkResp.clone());
//         return networkResp;
//       } catch (err) {
//         // 2️⃣ Network failed → try the cache.
//         const cachedResp = await caches.match(event.request);
//         if (cachedResp) return cachedResp;

//         // 3️⃣ Still nothing → fallback (HTML page, SVG, image, etc.).
//         if (event.request.mode === 'navigate') {
//           return caches.match(FALLBACK_HTML);
//         }

//         // 4️⃣ Last resort: a Response with a sensible status.
//         return new Response('Offline', { status: 503, statusText: 'Offline' });
//       }
//     })()
//   );
// });

