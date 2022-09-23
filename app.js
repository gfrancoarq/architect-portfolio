const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-elements");
const links = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    nav.classList.toggle('slide');
    hamburger.classList.toggle('slide');
    body.classList.toggle('overflow');
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove('slide');
        hamburger.classList.remove('slide');
        body.classList.toggle('overflow');
    });
});