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