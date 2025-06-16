self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("banda-seva-cache-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/manifest.json",
        "/icons/icon-192.png",
        "/icons/icon-512.png",
        "/script.js"
        // यहाँ पर सभी HTML और JS फाइलें जो आपने बनाई हैं, उनकी लिस्ट डाल दें
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
