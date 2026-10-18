// Offline: Netzwerk zuerst, sonst Cache
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(r => { const c = r.clone(); caches.open('v1').then(cache => cache.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request))
  );
});
