(function ($) {
// ======================================================
//  Blog Details Scroll Setion Start
// ======================================================

 $('.table_list_tabbing li a').on('click', function (e) {

        e.preventDefault();

        var target = $(this).attr('href');

        $('.table_list_tabbing li a').removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 160
        }, 800);

        $(".blog_details_sticky_row_col").removeClass("active");
    });

    $(window).on('scroll', function () {

        var scrollPos = $(window).scrollTop() + 200;

        $('.blog_details_txt h2[id]').each(function () {

            var id = $(this).attr('id');

            if ($(this).offset().top <= scrollPos) {

                $('.table_list_tabbing li a').removeClass('active');

                $('.table_list_tabbing li a[href="#' + id + '"]').addClass('active');

            }

        });

    });

// ======================================================
//  Blog Details Scroll Setion End
// ======================================================


// ======================================================
//  Blog Details Slider Setion Start
// ======================================================

if ($(".blog_details_sliders").length) {
    const blogSlider = new Swiper(".blog_details_sliders", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
        speed: 600,

        // Pagination added
        pagination: {
            el: ".swiper-pagination-blog-details",
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
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        }
    });
}

// ======================================================
//  Blog Details Slider Setion End
// ======================================================


    var sidebar = $(".blog_details_sidebar");
    var rightInner = $(".blog_details_right_inner");

    sidebar.hide();

    sidebar.click(function () {
        $(".blog_details_sticky_row_col").toggleClass("active");
    });

    $(window).on("scroll", function () {

        if ($(window).width() <= 991) {

            var scrollTop = $(window).scrollTop();

            var containerTop = $(".blog_details_left").offset().top;
            var containerBottom = containerTop + $(".blog_details_left").outerHeight();

            var sidebarHeight = sidebar.outerHeight();

            var start = containerTop + 40;
            var end = containerBottom - sidebarHeight;

            // right_inner position from top
            var rightInnerTop = rightInner.offset().top;

            // hide trigger point
            var hidePoint = rightInnerTop - 300;

            if (scrollTop >= start && scrollTop <= end && scrollTop <= hidePoint) {

                sidebar.stop(true,true).fadeIn();

            } else {

                sidebar.stop(true,true).fadeOut();

            }

        } else {

            sidebar.hide();

        }

    });


})(jQuery);
