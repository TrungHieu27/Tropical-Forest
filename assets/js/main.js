// Search Box
$(document).ready(function(){ 
    $(".nav-icon i[class*='fa-search']").on("click", function () {
        $(".search-box").toggleClass("show-searchInput");
    });
});

// Mobile Menu
const iconMenu = document.querySelector(".icon-menu");
const navMenu = document.querySelector(".nav-navbar");

function mobileMenu() {
    navMenu.classList.toggle("active");
}

iconMenu.addEventListener('click', mobileMenu);