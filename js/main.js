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
  console.log('hello');
  if (navbar.className === "nav-bar" && mainnav.className === "main-nav") {
    navbar.className += " responsive";
    mainnav.className += " responsive";
  } else {
    navbar.className = "nav-bar";
    mainnav.className = "main-nav";
  }
}


var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.addEventListener("click", openModal);
  function openModal(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

document.getElementsByClassName("close")[0].addEventListener("click", closeModal);
function closeModal() {
  modal.style.display = "none";
}

//PRINTS
document.getElementById("prints").addEventListener("click", openNews);

function openNews() {
  document.querySelector('.print').classList.toggle('hide');
  // document.querySelector('.post').classList.toggle('hide');
}

// POST
document.getElementById("posts").addEventListener("click", openPosts);

function openPosts() {
  document.querySelector('.post').classList.toggle('hide');
//   document.querySelector('.print').classList.add('hide');
}