/* Sticky navigation bar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


  /* Animated hamburger menu*/
function myFunction(x) {
    x.classList.toggle("change");
  }




/* In mobile view - Open and close the sidebar using hamburger menu option */
const navMenu = document.querySelector(".navmenu");
const toggleButton = document.querySelector(".togglebutton")

toggleButton.addEventListener("click",() => {
  const visibility = navMenu.getAttribute('data-visible');

  /* Block scroll when sidebar is open */
  var element = document.getElementById("body");
  element.classList.toggle("noscroll");
  /* Block scroll when sidebar is open */
  
  if(visibility ==="false") {
    navMenu.setAttribute("data-visible",true);
  }
  else if(visibility === "true") {
    navMenu.setAttribute("data-visible",false);
  }

  console.log(visibility)
} );
/* In mobile view - Open and close the sidebar using hamburger menu option */



