(()=>{
    "use strict";

new ue(".cases-studies-section__swiper",{
    watchSlidesProgress: !0,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2
        },
        1220: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3
        }
    },
    navigation: {
        prevEl: ".cases-studies-section__swiper-btn-prev",
        nextEl: ".cases-studies-section__swiper-btn-next"
    },
    pagination: {
        el: ".cases-studies-section__swiper-pagination"
    }
}),
new ue(".testimonials__swiper",{
    watchSlidesProgress: !0,
    centeredSlides: !0,
    navigation: {
        prevEl: ".testimonials__swiper-btn-prev",
        nextEl: ".testimonials__swiper-btn-next"
    },
    pagination: {
        el: ".testimonials__swiper-pagination"
    }
})
}
)();
//# sourceMappingURL=app.min.js.map
