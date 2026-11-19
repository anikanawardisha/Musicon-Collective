/*//Her kan i skrive jeres egen JS kode
const MENU_ITEMS = document.querySelectorAll("nav a")

MENU_ITEMS.forEach(function(element){
    element.addEventListener("click", function(evt){
        evt.preventDefault()
        alert("Hvis jeg ikke var doven ville dette link nok føre til en side der hed " + element.innerHTML)
    })
})*/

//Her kan i skrive jeres egen JS kode
const MENU_ITEMS = document.querySelectorAll("nav a")

MENU_ITEMS.forEach(function(element){
    // Let real pages (like 3dmodel.html) open normally
    if (element.getAttribute("href").endsWith(".html")) return

    element.addEventListener("click", function(evt){
        evt.preventDefault()
        alert("Hvis jeg ikke var doven ville dette link nok føre til en side der hed " + element.innerHTML)
    })
})