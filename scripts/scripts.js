window.onload = function() {
    initCarousel();
}


function initCarousel() {
    // const swiper = new Swiper('.product-image__container .swiper-container', {
    //     // Optional parameters
    //     direction: 'vertical',
    //     loop: false,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   });

    var swiper = new Swiper(".thumbnail-image-swiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
      });
      var swiper2 = new Swiper(".main-image-swiper", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
}