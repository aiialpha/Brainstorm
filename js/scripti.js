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
   // Get the element you want to animate
const element = document.querySelector('.animate-me');

// Function to add the 'animate' class when the element is in the viewport
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      element.classList.add('animate');
      observer.unobserve(element); // Stop observing once animation is triggered
    }
  });
}
// Create an Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2, // Adjust this value to control when the animation triggers
};
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the element
observer.observe(element);
