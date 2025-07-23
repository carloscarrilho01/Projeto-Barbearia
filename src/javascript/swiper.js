const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

const swiperpromotion = new Swiper('.swiper-promotion', {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});



