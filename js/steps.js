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
}