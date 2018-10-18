const staticCachesName = 'haifahrul-mws.firebaseapp.com';
const fileToCaches = [
  '/index.html',
  '/header.html',
  '/header-back.html',
  '/footer.html',
  '/404.html',
  '/manifest.json',
  '/css/main.css',
  '/js/app.min.js',
  '/images/avatar.png',
  '/images/logo.png',
  '/project1/css/project1.css',
  '/project1/index.html',
  '/project2/css/project2.css',
  '/project2/index.html',
  '/public/my-course/index.html',
  '/public/my-course/css-grid/task/index.html',
  '/public/my-course/css-grid/task/css/main.css',
  '/public/my-course/css-grid/tutorial/index.html',
  '/public/my-course/css-grid/tutorial/css/main.css'
];

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCachesName).then((cache) => {
      return cache.addAll(fileToCaches)
    })
  )
})

self.addEventListener('activate', () => {
  console.log('Active')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if(response) {
          return response;
        }
        return fetch(event.request).then(response => {
          return caches.open(staticCachesName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch(error => {
        console.log(error)
      })
  )
})