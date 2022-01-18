var temp = 0;
const showBTN = document.getElementById("pop-btn");
const hideBTN = document.getElementById("close-btn");
const modal_container = document.getElementById("pop");

showBTN.addEventListener("click",(e)=>{
    e.preventDefault();
    modal_container.style.display = 'block';
});

hideBTN.addEventListener("click",(e)=>{
    e.preventDefault();
    modal_container.style.display = 'none';
});