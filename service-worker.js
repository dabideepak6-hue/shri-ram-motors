/* ==========================================
   SHRI RAM MOTORS
   Service Worker
   Version 1.0
========================================== */

const CACHE_NAME = "shri-ram-motors-v1";

const urlsToCache = [
    "./",
    "./index.html",

    "./css/style.css",
    "./js/script.js",

    "./manifest.json",

    "./images/logo.png",
    "./images/hero-bg.jpg",
    "./images/showroom.jpg",

    "./images/splendor-plus.jpg",
    "./images/hf-deluxe.jpg",
    "./images/xtreme125r.jpg",
    "./images/xtreme250r.jpg",

    "./images/icon-72.png",
    "./images/icon-96.png",
    "./images/icon-128.png",
    "./images/icon-144.png",
    "./images/icon-152.png",
    "./images/icon-192.png",
    "./images/icon-384.png",
    "./images/icon-512.png"
];

/* ==========================
   Install
========================== */

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))

    );

    self.skipWaiting();

});

/* ==========================
   Activate
========================== */

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});

/* ==========================
   Fetch
========================== */

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response || fetch(event.request)

            .then(networkResponse => {

                const clone = networkResponse.clone();

                caches.open(CACHE_NAME)

                .then(cache => {

                    cache.put(event.request, clone);

                });

                return networkResponse;

            })

            .catch(() => {

                return caches.match("./index.html");

            });

        })

    );

});
