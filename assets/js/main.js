// humburger icon for mobile
const menu = document.getElementById("menu");
const mobile_menu_items = document.querySelector(".mobile_menu_items");
let count = 0;
menu.addEventListener("click", () => {
    menu.classList.toggle("openMenu");
    mobile_menu_items.classList.toggle("activeMenu");
    count++;
    if (count == 1) {
        disableScroll();
    } else {
        enableScroll();
        count = 0;
    }
});

// when the menu open then the scroll will be disable
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        // if any scroll is attempted, set this to the previous value
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });
}
// when menu close scroll will be enable
function enableScroll() {
    window.onscroll = function () { };
}
// accodian  function for mobile section

const mobileFooteritems = document.querySelectorAll(".mobile_accodian_item");

mobileFooteritems.forEach((item) => {
    const title = item.querySelector(".mobile_footer_ele_title");
    const content = item.querySelector(".mobile_accodian_list_wrap");
    const arrow =item.querySelector(".fa-chevron-up")
    title.addEventListener("click", () => {
        content.classList.toggle("activeAccodian");
        arrow.classList.toggle("rotateArrow");
    });
});
