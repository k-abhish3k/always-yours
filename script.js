const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", () => {

const x = Math.random() * window.innerWidth;
const y = Math.random() * window.innerHeight;

noButton.style.left = x + "px";
noButton.style.top = y + "px";

});

function yesClicked(){
window.location.href="memories.html";
}