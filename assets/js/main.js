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

// Scroll Top
const btnScroll = document.querySelector('.btn-scroll');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }