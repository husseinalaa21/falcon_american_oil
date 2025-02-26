var list = document.getElementById("list")
var list_m = document.getElementById("listMobile");
var typeShit = false

function disWhat() {
    list_m.classList.toggle("active");
    if (typeShit == false) {
        list.style.display = "block"
        typeShit = true
        return
    }
    typeShit = false
    list.style.display = "none"
}