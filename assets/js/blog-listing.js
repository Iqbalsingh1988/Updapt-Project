(function ($) {

// ======================================================
//  Blog Listing Banner Section Start
// ======================================================

if ($(".listing_banner_slider").length) {
    const bannerSlider = new Swiper(".listing_banner_slider", {
        slidesPerView: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },

        pagination: {

                el: ".swiper-pagination-banner-slides",

                clickable: true,

            },

        breakpoints: {
            220: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
        }
    });
}

// ======================================================
//  Blog Listing Banner Section End
// ======================================================


// ======================================================
//  Blog Listing Blogs Setion Start
// ======================================================

if ($(".insight_blog_slider").length) {
    const blogSlider = new Swiper(".insight_blog_slider", {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: false,
        speed: 600,
        navigation: {
            nextEl: ".blog_listing_next",
            prevEl: ".blog_listing_prev",
        },

        breakpoints: {
            220: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }
    });
}

// ======================================================
//  Blog Listing Blogs Setion End
// ======================================================

})(jQuery);