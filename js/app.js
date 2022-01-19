// Register Pop-up
var temp = 0;
const showBTN = document.getElementById("pop-btn");
const hideBTN = document.getElementById("close-btn");
const modal_container = document.getElementById("pop");

showBTN.addEventListener("click", (e) => {
  e.preventDefault();
  modal_container.style.display = 'block';
});

hideBTN.addEventListener("click", (e) => {
  e.preventDefault();
  modal_container.style.display = 'none';
});


// Slider
var slideIndex = 1;
showSlides(slideIndex);

function changeImg(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  slides.forEach(element => {
    element.style.display = "none";
  });
  slides[slideIndex - 1].style.display = "block";
}