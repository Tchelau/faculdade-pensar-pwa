self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado');
  return self.clients.claim();
});