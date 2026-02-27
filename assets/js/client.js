(function ($) {

// ======================================================
//cLIENT DROPDOWN BUTTON JS START
// ======================================================

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
dropdown.querySelector(".dropdown-label")
.addEventListener("click", (e) => {
e.stopPropagation();
dropdowns.forEach(item => {
if(item !== dropdown){
item.classList.remove("active");
}
});
dropdown.classList.toggle("active");
});
});
window.addEventListener("click", () => {
dropdowns.forEach(dropdown => {
dropdown.classList.remove("active");
});
});

// ======================================================
//cLIENT DROPDOWN BUTTON JS END
// ======================================================



})(jQuery);
