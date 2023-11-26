var swiper = new Swiper('.contenedor-carrusel-inicio', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: "true",
    // init: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        680: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        920: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1240: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },

});