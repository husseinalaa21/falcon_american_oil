var list = document.getElementById("list")
var list_m = document.getElementById("listMobile");
var hussein_head = document.getElementById("hussein_head");
var typeShit = false

function disWhat() {
    list_m.classList.toggle("active");
    if (typeShit == false) {
        list.style.display = "block"
        hussein_head.style.backgroundColor = "#ebde25";
        typeShit = true
        return
    }
    typeShit = false
    hussein_head.style.backgroundColor = "transparent";
    list.style.display = "none"
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        hussein_head.style.backgroundColor = "#ebde25"; // Change to desired color
    } else {
        hussein_head.style.backgroundColor = "transparent"; // Default color
    }
});
const images = [
    "./hussein/1.jpg",
    "./hussein/2.jpg",
    "./hussein/3.jpg",
    "./hussein/4.jpg"
];

let index = 0; // Start from the first image
const mainShow = document.querySelector(".main_show");
const hairs = document.querySelectorAll(".hussein_hairs div");

var show_hussein = false

function show_this(na) {
    show_hussein = true
    // Add the active class to the current item to scale it up
    hairs.forEach((hair, i) => {
        hair.classList.remove("active");
    });
    hairs[na].classList.add("active");
    mainShow.style.setProperty("--next-bg", `url('${images[na]}')`);
    mainShow.style.setProperty("--current-bg", mainShow.style.backgroundImage);
    mainShow.style.backgroundImage = `url('${images[na]}')`;
}
function changeBackground() {
    if (show_hussein == true) {
        return false
    }
    // Add the active class to the current item to scale it up
    hairs.forEach((hair, i) => {
        if (i === index) {
            hair.classList.add("active");
        } else {
            hair.classList.remove("active");
        }
    });

    // Create the slide-in effect
    mainShow.classList.add("slide");

    // Set the new background in ::before
    mainShow.style.setProperty("--next-bg", `url('${images[index]}')`);
    mainShow.style.setProperty("--current-bg", mainShow.style.backgroundImage);

    // Wait for the animation to complete, then update the real background
    setTimeout(() => {
        mainShow.style.backgroundImage = `url('${images[index]}')`;
        mainShow.classList.remove("slide"); // Reset slide effect
        index = (index + 1) % images.length; // Move to next image
    }, 500); // Matches CSS transition duration
}

// Change background every 5 seconds
setInterval(changeBackground, 3000);