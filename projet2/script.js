// ciblage du DOM
const navbar = document.querySelector(".navbar");
const sections = $("section");
const navbarLinks = $(".navbar-link");
const progress = $(".progress-bar-wrapper");

// autres globales
const navbarOffsetTop = navbar.offsetTop;
const progressBarPercents = [97, 89, 75];

// écoute événementielle
window.addEventListener("scroll", main);

function main() {

  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

}

$(".progress-percent").each((i, el) => {
  el.style.width = progressBarPercents[i] + '%';

  // ciblage relatif
  $(el).prev().children("span").text(progressBarPercents[i])
})

