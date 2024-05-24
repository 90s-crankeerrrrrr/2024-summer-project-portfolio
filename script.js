/*function syntax js*/
function toggleMenu() {
    /*const: declares variable that cannot be reassigned, immutable basically*/
    /*querySelector returns the first element specified to a CSS selector, so changes
    can be made to said selector (e.g changing its color), think of this line as like
    instantiating an object*/
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    /*classList references the given classes inside an element.
    toggle allows for them to be added and removed.*/
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}