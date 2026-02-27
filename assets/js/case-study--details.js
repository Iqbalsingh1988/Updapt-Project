(function ($) {


// ======================================================
// WHY UPDAPT START
// ======================================================

    if ($(".project_objective_slider").length) {

        new Swiper(".project_objective_slider", {

            slidesPerView: 3,

            spaceBetween: 10,

            pagination: {

                el: ".swiper-pagination-project-objective",

                clickable: true,

            },

            breakpoints: {

                0: { slidesPerView: 1 },

                600: { slidesPerView: 2 },

                992: { slidesPerView: 2 },

                1200: { slidesPerView: 3 }

            }

        });

    }
// ======================================================
// WHY UPDAPT END
// ======================================================


})(jQuery);