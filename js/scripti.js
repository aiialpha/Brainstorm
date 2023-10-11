let menu = document.querySelector("#menu");
let navmenu = document.querySelector("ul");
let navHead = document.querySelector("#nav")

 menu.onclick = () => {
// Toggle the "bx-menu" and "bx-x" classes on the menu icon
   menu.querySelector("i").classList.toggle("bx-menu");
  menu.querySelector("i").classList.toggle("bx-x");


// Toggle the "open" class on the navigation menu
   navmenu.classList.toggle("open");
   navHead.classList.toggle("color")
   };