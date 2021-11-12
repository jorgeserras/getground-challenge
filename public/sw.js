const v = '0.0.1'
const staticCacheName = `s-v${v}`
const dynamicCacheName = `d-v${v}`
const assets = [
  '/',
  '/main.chunk.js',
  '/pwa.js',
  '/manifest.json',
  '/favicon.ico'
]
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      )
    })
  )
})
self.addEventListener('fetch', evt => {
  const u = evt.request.url
  evt.respondWith(
    caches.match(evt.request)
      .then(cacheRes => {
          return cacheRes || fetch(evt.request).then(fetchRes => { /* Will always retrieve from cache if possible */
            return caches.open(dynamicCacheName).then(cache => {
              if (u.indexOf('world.openfoodfacts.org') > -1) { // exclude BE from caching
              } else {
                if (u.indexOf('chunk') > -1 || u.indexOf('jpg') > -1 || u.indexOf('static') > -1 || u.indexOf('svg') > -1 || u.indexOf('png') > -1 || u.indexOf('jpeg') > -1) {
                  cache.put(u, fetchRes.clone()) /* Cache */
                }
              }
              return fetchRes
            })
          })
      }).catch(() => {
        console.log('Offline', u)
      })
  )
})
self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting')
    self.skipWaiting()
})