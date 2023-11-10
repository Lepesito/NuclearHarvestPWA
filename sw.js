// almacenamiento en cache de los elementos de JadeSprouts 

const CACHE_NAME = 'PWA de JADE SPROUTS';
self.addEventListener('install', event =>{
    event.waitUntil((async() =>{
        const cache = await caches.open(CACHE_NAME);
        cache.addAll([
            '/',
            '/script.js',
            '/style.css',
            '/images/aplicacion1.png',
            '/images/aplicacion2.png',
            '/images/aplicacion3.png',
            '/images/BobbyNHInfo.png',
            '/images/features-icon-1.png',
            '/images/features-icon-2.png',
            '/images/features-icon-3.png',
            '/images/features-icon-4.png',
            '/images/FondoFinal.jpg',
            '/images/footer-form-bg.png',
            '/images/footer-form-pattern.svg',
            '/images/footerFondo.jpg',
            '/images/form-pattern.png',
            '/images/img-pattern.png',
            '/images/JadeSlogoSimple.png',
            '/images/logo_icono.ico',
            '/images/logo.png',
            '/images/LogoNH.png',
            '/images/separator.svg',
            '/images/separator1.png',
            '/images/slider-1.jpg',
            '/images/slider-2.jpg',
            '/images/slider-3.jpg',
            '/images/avatar1.jpg',
            '/images/about-abs-image.png',
            '/images/about-banner',
            '/images/footer.bg.jpg',
            '/images/hero-slider-1',
            '/images/hero-slider-2',
            '/images/hero-slider-3',
            '/images/service-1.png',
            '/images/service-2.png',
            '/images/service-3.png',
            '/images/special-dish-banner.png',
            '/images/testi-avatar.jpg',
            '/images/testimonial-bg.jpg',
        ]);
    })());
});

self.addEventListener('fetch', event =>{
    event.respondWith((async() =>{
        const cache = await caches.open(CACHE_NAME);
        // obtiene los recursos desde el cache // 
        const cachedResponse = await cache.match(event.request);
        if(cachedResponse){
            return cachedResponse;
        }else{
            try{
                // si los recursos no estan en el cache, lo intenta en la red //
                const fetchResponse = await fetch(event.request);
                // guarda los recursos en la cache y lo regresa //
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
            }catch(e){
                // la red falló //
            }
        }
    })());
});

