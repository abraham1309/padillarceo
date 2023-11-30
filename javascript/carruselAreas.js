var swiper = new Swiper('.contenedor-carrusel-areas', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: "false",
    // init: false,
    autoplay: {
        delay: 100000,
        disableOnInteraction: false,
    },

    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        920: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },

});