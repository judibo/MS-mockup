window.onscroll = function() {stickNavBar()};

var navbar = document.getElementById("navbar");
var mainnav = document.getElementById("mainnav");
var sticky = navbar.offsetTop;

function stickNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openMenu() {
  if (navbar.className === "nav-bar" && mainnav.className === "main-nav") {
    navbar.className += " responsive";
    mainnav.className += " responsive";
  } else {
    navbar.className = "nav-bar";
    mainnav.className = "main-nav";
  }
}