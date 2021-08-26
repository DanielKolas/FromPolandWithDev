// VARIABLES 
let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let nav = document.getElementById("nav");
let navItem = document.querySelector(".navigation-item");

// EVENT LISTENERS 
openMenu.addEventListener("click", () => {
    openMenu.classList.add("hidden");
    closeMenu.classList.remove("invisible");
    nav.classList.add("nav-mobile")
    navItem.classList.add("navigation-item-mobile");
});

closeMenu.addEventListener("click", () => {
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("invisible");
    nav.classList.remove("nav-mobile");
    navItem.classList.remove("navigation-item-mobile");
});