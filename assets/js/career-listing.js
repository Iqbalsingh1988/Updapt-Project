(function ($) {

// ======================================================
//Life at updapt section js start
// ======================================================

 if ($(".life_updapt_slider").length) {

        new Swiper(".life_updapt_slider", {

            slidesPerView: 2.5,

            spaceBetween: 16,

            pagination: {

                el: ".swiper-pagination-life-updapt",

                clickable: true,

            },

            breakpoints: {

                0: { slidesPerView: 1 },

                600: { slidesPerView: 2.2 },

                992: { slidesPerView: 2.2 },

                1200: { slidesPerView: 2.5 }

            }

        });

    }

// ======================================================
//Life at updapt section js end
// ======================================================

})(jQuery);
