const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", openHamburgerMenu);

function openHamburgerMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
