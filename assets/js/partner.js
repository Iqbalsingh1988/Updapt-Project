(function ($) {

// ======================================================
// Benefits of Partnering JS Start
// ======================================================
    if ($(".benefits_partnering_slider").length) {

        new Swiper(".benefits_partnering_slider", {

            slidesPerView: 3,

            spaceBetween: 10,

            pagination: {

                el: ".swiper-pagination-why-updapt",

                clickable: true,

            },

            breakpoints: {

                0: { slidesPerView: 1 },

                600: { slidesPerView: 2, spaceBetween: 15 },

                992: { slidesPerView: 2, spaceBetween: 15 },

                1200: { slidesPerView: 3 }

            }

        });

    }
// ======================================================
// Benefits of Partnering JS End
// ======================================================


// ======================================================
// Technology Partner JS Start
// ======================================================
  
    if ($(".technology_partner_tab").length) {

        $(".technology_partner_tab").on("click", function () {

            var tabId = $(this).data("id");

            $(".technology_partner_tab").removeClass("active");

            $(this).addClass("active");

            $(".technology_patners_details").removeClass("tab-active");

            $(".technology_patners_details[data-id='" + tabId + "']").addClass("tab-active");

        });

    }

// ======================================================
// Technology Partner JS End
// ======================================================



// ======================================================
// Form Country selected Start
// ======================================================

    $(".country_select").click(function (e) {
        e.stopPropagation();
        $(".dropdown").not($(this).find(".dropdown")).hide();
        $(this).find(".dropdown").toggle();
    });
    $(".country_select .option").click(function () {
        var flag = $(this).find("img").attr("src");
        var code = $(this).data("code");
        $(this).closest(".country_select")
            .find(".selected_option")
            .html('<img src="' + flag + '"> <span>' + code + '</span>');
    });
    $(document).click(function () {
        $(".dropdown").hide();
    });

// ======================================================
// Form Country selected End
// ======================================================



})(jQuery);