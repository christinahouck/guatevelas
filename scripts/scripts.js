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
    var thumbnailSwiper = new Swiper(".thumbnail-image-swiper", {
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
    var imageSwiper = new Swiper(".main-image-swiper", {
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        slidesPerView: 1,
        direction: 'horizontal',
        navigation: {
            nextEl: '.main-image-swiper .swiper-button-next',
            prevEl: '.main-image-swiper .swiper-button-prev',
        },
        thumbs: {
            swiper: thumbnailSwiper,
        },
    });
}