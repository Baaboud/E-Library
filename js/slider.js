// Books slider Pop-up
const openBTN = document.getElementById("open-books");
const closeBTN = document.getElementById("close-books");
const con = document.getElementById("book-slider");

openBTN.addEventListener("click", (e) => {
  e.preventDefault();
  con.style.display = "block";
});

closeBTN.addEventListener("click", (e) => {
  e.preventDefault();
  con.style.display = "none";
});


// Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Slider Transform translate