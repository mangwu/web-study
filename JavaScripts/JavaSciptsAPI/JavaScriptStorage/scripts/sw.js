self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/JavaScripts/JavaSciptsAPI/JavaScriptStorage/',
        '/JavaScripts/JavaSciptsAPI/JavaScriptStorage/JSServiceWork.html',
        '/JavaScripts/JavaSciptsAPI/JavaScriptStorage/styles/style.css',
        '/JavaScripts/JavaSciptsAPI/JavaScriptStorage/scripts/JSIDBServiceWorker.js'
      ]);
    })
  );
 });
 
self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});