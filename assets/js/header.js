(function ($) {

 // ======================================================
// NAV TOGGLER SAFE START
// ======================================================

    const toggler = document.querySelector(".nav_toggler");
    const navbarWrap = document.querySelector(".navbar_wrap");

    if (toggler && navbarWrap) {

        toggler.addEventListener("click", function () {

            navbarWrap.classList.toggle("active");

            document.body.classList.toggle("no-scroll");

        });

    }
 // ======================================================
// NAV TOGGLER SAFE END
// ======================================================


// ======================================================
// SELECT DROPDOWN SAFE START
// ======================================================
const selectBtn = document.querySelector(".nav_select_btn");

    const dropdown = document.querySelector(".nav_select_dropdown");


    if (selectBtn && dropdown) {

        const options = dropdown.querySelectorAll("li");


        // toggle dropdown

        selectBtn.addEventListener("click", function (e) {

            e.stopPropagation();

            dropdown.style.display =
                dropdown.style.display === "block" ? "none" : "block";

        });


        // option click

        options.forEach(function (option) {

            option.addEventListener("click", function () {

                const img = option.querySelector("img");

                const text = option.getAttribute("data-lang");


                if (img) {

                    selectBtn.querySelector("img").src = img.src;

                }


                if (text) {

                    selectBtn.querySelector("span").innerText = text;

                }


                dropdown.style.display = "none";

            });

        });


        // outside click close

        document.addEventListener("click", function (e) {

            if (!selectBtn.contains(e.target) &&
                !dropdown.contains(e.target)) {

                dropdown.style.display = "none";

            }

        });

    }
// ======================================================
// SELECT DROPDOWN SAFE END
// ======================================================
})(jQuery);