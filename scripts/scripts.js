window.onload = function() {
    initCarousel();
}

window.addEventListener('resize', handleViewportChange); 

function handleViewportChange() {
    setTimeout(function(){
        initCarousel();
    }, 100);
}

function initCarousel() {
    var swiper = new Swiper(".thumbnail-image-swiper", {
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                direction: 'horizontal', 
            },
            600: {
                direction: 'vertical'
            }
        }
    });
}