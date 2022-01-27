// Register Pop-up
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


// Active register
const logBTN = document.querySelectorAll(".log-btn");
const signBTN = document.querySelectorAll(".sign-btn");
const logCon = document.getElementById("log-in");
const signCon = document.getElementById("sign-up");
const activeLog = document.getElementById("active-log");
const activeSign = document.getElementById("active-sign");
signCon.style.display = 'none';

activeLog.classList.add("hr");


logBTN.forEach(element => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    logCon.style.display = 'inline-flex';
    signCon.style.display = 'none';
    activeLog.classList.add("hr");
    activeSign.classList.remove("hr");
  });
});


signBTN.forEach(element => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    logCon.style.display = 'none';
    signCon.style.display = 'inline-flex';
    activeLog.classList.remove("hr");
    activeSign.classList.add("hr");
  });
});


// Header list
const open_list = document.getElementById("open-list");
const close_list = document.getElementById("close-list");
const list_con = document.querySelector(".top-bar")

open_list.addEventListener("click", (e) => {
  e.preventDefault();
  list_con.style.display = 'block';
  close_list.style.display = 'block';
});

close_list.addEventListener("click", (e) => {
  e.preventDefault();
  list_con.style.display = 'none';
  close_list.style.display = 'block';
});

// Slider
const offer_dot = document.querySelectorAll(".offer-dots span");
var slideIndex = 1;
showSlides(slideIndex);

function changeImg(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides.forEach(element => {
    element.style.display = "none";
  });

  offer_dot.forEach(element => {
    element.classList.remove("active-dot");
  });

  slides[slideIndex - 1].style.display = "block";
  offer_dot[slideIndex - 1].classList.add("active-dot");
}

// Slider Dots

//Search
const search = document.getElementById("search");
const books_con = document.querySelectorAll(".book");

search.addEventListener('keyup', function (e) {
  books_con.forEach(element => {
    if (element.textContent.includes(search.value)) {
      element.style.display = "inline-flex";
    }
    else {
      element.style.display = "none";
    }
  });
});

// Basket Counter
const cart_btn = document.querySelectorAll(".book .icons .round");
const basket_counter = document.getElementById("cart-counter");

var counter = 0;
cart_btn.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    counter++;
    basket_counter.innerText = counter;
  });
});

// Multi Language

function lange() {
  const lang = document.getElementsByTagName('link')[0];
  if (lang.getAttribute('href') == 'css/ar.css') {
    lang.setAttribute('href', 'css/en.css');
  }
  else {
    lang.setAttribute('href', 'css/ar.css');
  }
}


//Books Scroll Slider
const booksize = document.querySelector('.slider .book').clientWidth;
const buttonRight = document.querySelectorAll('.slideRight');
const buttonLeft = document.querySelectorAll('.slideLeft');

buttonRight.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    element.parentElement.querySelector('.slider').scrollLeft += (booksize+30);
  });
});

buttonLeft.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    element.parentElement.querySelector('.slider').scrollLeft -= (booksize+30);
  });
});