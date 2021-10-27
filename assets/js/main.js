// Search Box
$(document).ready(function(){ 
    $(".nav-icon i[class*='fa-search']").on("click", function () {
        $(".search-box").toggleClass("show-searchInput");
    });
});

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-navbar");

function mobileMenu() {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

hamburger.addEventListener('click', mobileMenu);