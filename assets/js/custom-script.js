(function ($) {


    
// ======================================================
// BANNER SLIDER START
// ======================================================

    if ($(".banner_slider_row").length) {

        new Swiper(".banner_slider_row", {
            slidesPerView: 1,
            loop: true,
            speed: 600,
            effect: "fade",
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });

    }

    if ($(".banner_cnt_sliding").length) {

        new Swiper(".banner_cnt_sliding", {
            slidesPerView: 1,
            direction: "vertical",
            loop: true,
            speed: 600,
            allowTouchMove: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            }
        });

    }

// ======================================================
// BANNER SLIDER END
// ======================================================


 
// ======================================================
// TRUSTED WORLDWIDE SAFE
// ======================================================

    const swapCols = document.querySelectorAll(".trusted_worldwide__col.is-swap");

    if (swapCols.length) {

        const animationDuration = 6000;
        const swapAt = animationDuration * 0.23;

        let showSecond = false;

        setTimeout(() => {

            showSecond = true;

            swapCols.forEach(col =>
                col.classList.add("show-second")
            );

        }, swapAt);


        swapCols.forEach(col => {

            col.addEventListener("animationiteration", () => {

                setTimeout(() => {

                    showSecond = !showSecond;

                    swapCols.forEach(c =>
                        c.classList.toggle("show-second", showSecond)
                    );

                }, swapAt);

            });

        });

    }
// ======================================================
// TRUSTED WORLDWIDE SAFE
// ======================================================

// ======================================================
// Explore Our Products Js start 
// ======================================================

    if ($('.accordion-item').length) {

        var accordionItems = $('.accordion-item');

        var currentIndex = 0;

        var duration = 8000;

        var accordionTimeout;


        function openAccordion(index) {

            clearTimeout(accordionTimeout);

            var $item = accordionItems.eq(index);

            var $header = $item.find('.accordion-header');

            var currentId = $header.data('id');


            $('.accordion-header').removeClass('active-a');

            $('.accordion-item').removeClass('is-active');

            $('.accordion-content').hide();

            $('.solution_img').removeClass('tab-active');


            $item.addClass('is-active');

            $header.addClass('active-a');

            $header.next('.accordion-content').slideDown(300);

            $('.solution_img[data-id="' + currentId + '"]').addClass('tab-active');


            accordionTimeout = setTimeout(function () {

                currentIndex++;

                if (currentIndex >= accordionItems.length) {

                    currentIndex = 0;

                }

                openAccordion(currentIndex);

            }, duration);

        }


        openAccordion(0);


        $('.accordion-header').on('click', function () {

            currentIndex = $(this).parent().index();

            openAccordion(currentIndex);

        });

    }
// ======================================================
// Explore Our Products Js start 
// ======================================================


// ======================================================
// WHY UPDAPT START
// ======================================================

    if ($(".why_updapt_slider").length) {

        new Swiper(".why_updapt_slider", {

            slidesPerView: 4,

            spaceBetween: 10,

            pagination: {

                el: ".swiper-pagination-why-updapt",

                clickable: true,

            },

            breakpoints: {

                0: { slidesPerView: 1 },

                600: { slidesPerView: 2 },

                992: { slidesPerView: 3 },

                1200: { slidesPerView: 4 }

            }

        });

    }
// ======================================================
// WHY UPDAPT END
// ======================================================


// ======================================================
// INSIGHT TAB SAFE START
// ======================================================

    if ($(".insight_drive_tab").length) {

        $(".insight_drive_tab").on("click", function () {

            var tabId = $(this).data("id");

            $(".insight_drive_tab").removeClass("active");

            $(this).addClass("active");

            $(".insight_drive_tab_detail").removeClass("tab-active");

            $(".insight_drive_tab_detail[data-id='" + tabId + "']").addClass("tab-active");

        });

    }



    if ($(".insight_drive_slides").length) {

        new Swiper(".insight_drive_slides", {

            slidesPerView: 3,

            spaceBetween: 28,

            pagination: {

                el: ".swiper-pagination-insight-drive",

                clickable: true,

            },

            breakpoints: {

                0: { slidesPerView: 1 },

                600: { slidesPerView: 2 },

                1200: { slidesPerView: 3 }

            }

        });

    }

// ======================================================
// INSIGHT TAB SAFE END
// ======================================================

// ======================================================
// Supported ESG Frameworks secton start
// ======================================================

$(".support_tab_autoplay").on("click", function () {
    var tabId = $(this).attr("data-id");

    $(".support_tab_autoplay").removeClass("active");
    $(this).addClass("active");

    $(".support_frameworks_tab_detail").removeClass("tab-active");
    $(".support_frameworks_tab_detail[data-id='" + tabId + "']").addClass("tab-active");
});


var tabIndex = 0;
var tabs = $(".support_tab_autoplay");
var totalTabs = tabs.length;

setInterval(function () {

    tabIndex++;

    if (tabIndex >= totalTabs) {
        tabIndex = 0;
    }

    tabs.removeClass("active");
    tabs.eq(tabIndex).addClass("active");

    var tabId = tabs.eq(tabIndex).attr("data-id");

    $(".support_frameworks_tab_detail").removeClass("tab-active");
    $(".support_frameworks_tab_detail[data-id='" + tabId + "']").addClass("tab-active");

}, 4000); 
    if ($(".support_frameworks_slider").length) {
        const filteritemSlider = new Swiper(".support_frameworks_slider", {
            slidesPerView: 8,
            spaceBetween: 10,
            loop: false,
            speed: 600,
            navigation: {
                nextEl: ".support_frameworks_next",
                prevEl: ".support_frameworks_prev",
            },

            breakpoints: {
                220: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                600: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 6,
                },
                1200: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },
            }
        });
    }
// ======================================================
// Supported ESG Frameworks secton END
// ====================================================== 

// ======================================================
// Customer Proof Section Start
// ====================================================== 
    // 
    if ($(".customer_proof_slider").length) {
        const filteritemSlider = new Swiper(".customer_proof_slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 600,

            pagination: {
                el: ".swiper-pagination-customer-proof",
                clickable: true,
            },

            breakpoints: {
                220: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 1,
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
// Customer Proof Section end
// ====================================================== 

    


// ======================================================
// INDUSTRY SWIPER SAFE START
// ======================================================

    if (document.querySelector(".industry_tailored_swiper")) {

        var industrySwiper = new Swiper(".industry_tailored_swiper", {

            direction: "vertical",

            slidesPerView: 5,

            spaceBetween: 12,

            speed: 800,

            mousewheel: true,

            navigation: {

                nextEl: ".industry_tailored_button_next",

                prevEl: ".industry_tailored_button_prev",

            },

            breakpoints: {

                0: {

                    direction: "horizontal",

                    slidesPerView: 1,

                },

                576: {

                    direction: "horizontal",

                    slidesPerView: 3,

                },

                768: {

                    direction: "horizontal",

                    slidesPerView: 3,

                },

                992: {

                    direction: "vertical",

                    slidesPerView: 5,

                },

            }

        });

    }

// ======================================================
// INDUSTRY SWIPER SAFE END
// ======================================================


    // ======================================================
    // SPLIDE SAFE INIT
    // ======================================================

    let splideInstances = [];

    if (document.querySelector(".industry_tailored_logo_slider")) {

        document.querySelectorAll('.industry_tailored_logo_slider').forEach(function (el) {

            const splide = new Splide(el, {

                type: 'loop',

                perPage: 5,

                gap: '1.875rem',

                arrows: false,

                pagination: false,

                drag: false,

                autoScroll: {

                    speed: 1,

                },

            });

            splide.mount(window.splide.Extensions);

            splideInstances.push(splide);

        });

    }



    // ======================================================
    // TABBING SAFE
    // ======================================================

    if ($('.industry_tailored_left_cnt').length) {

        $('.industry_tailored_left_cnt').on('click', function () {

            var tabId = $(this).data('id');

            $('.industry_tailored_left_cnt').removeClass('active');

            $(this).addClass('active');


            $('.industry_tailored_detail')

                .removeClass('tab-active')

                .hide();


            var activeTab = $('.industry_tailored_detail[data-id="' + tabId + '"]');

            activeTab

                .css('display', 'flex')

                .hide()

                .fadeIn(300)

                .addClass('tab-active');



            setTimeout(function () {

                splideInstances.forEach(function (splide) {

                    splide.refresh();

                });

            }, 300);

        });

    }


    // ======================================================
// img add in background start
// ======================================================
if ($('.bg_img').length) {
    $('.bg_img').each(function(){

        const el = $(this),
        src = el.attr('src'),
        parent = el.parent();

        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': '50% 50%',
            'background-repeat': 'no-repeat',
        });

        el.hide();

    });
}   
// ======================================================
// img add in background end
// ======================================================



})(jQuery);