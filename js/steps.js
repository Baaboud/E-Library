// show & hide steps

const openSteps = document.getElementById("cart-btn");
const stepsContainer = document.getElementById("front");
const hideSteps = document.getElementById("hideSteps");

openSteps.addEventListener("click", function () {
    stepsContainer.style.display = "block";
});

hideSteps.addEventListener("click", (e) => {
    e.preventDefault();
    stepsContainer.style.display = 'none';
  });

// Steper contents
const cards = document.querySelectorAll(".steps");

cards.forEach(element => {
    element.style.display = "none";
});

cards[0].style.display = "inline-flex";

// Steper Navigation Functionality
const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");
const progress = document.getElementById("progress");
const steps = document.querySelectorAll(".circle");
const line = document.getElementById("line");
let index = 1;
if (index == 1) {
    prev.style.visibility = "hidden";
}
next.addEventListener("click", function () {

    index++;
    if (index >= steps.length) {
        index = steps.length;
    }
    
    cards.forEach(element => {
        element.style.display = "none";
    });
    chstats();
})
prev.addEventListener("click", function () {
    index--;
    if (index <= 0) {
        index = 1;
    }
    cards.forEach(element => {
        element.style.display = "none";
    });
    chstats();
})
function chstats() {
    
    cards[index-1].style.display = "inline-flex";

    steps.forEach((items, i) => {
        if (i < index) {
            items.classList.add("active");
            var wid = i * (100 / (steps.length - 1));
            line.style.width = wid + "%";
        }
        else {
            items.classList.remove("active");
        }
    }
    )

    

    if (index <= 1) {
        prev.style.visibility = "hidden";
    }
    else if(index >= steps.length)
    {
        next.style.visibility = "hidden";
    }
    else {
        prev.style.visibility = "visible";
        next.style.visibility = "visible";
    }
}