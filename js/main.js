//Make sure (sw  are supported
if(navigator.serviceWorker){
    console.log('Service Worker supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('../ServiceWorker.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log(`Service Worker: Error: ${err}`));
    })
}