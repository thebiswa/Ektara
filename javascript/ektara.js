/* Every section starts with a section name like A B ..... Sections are devided into sub-sections line A1 A2 */
/* Problems are denoted like Problem(1) Problem(2) ............... */





/* SECTION A */

/* These two functions will know the screen size the user is using and update the userdevice attribute in body tag. */

/* SECTION A1 */
/* This function will be called when the page relodes or loads for the first time */
function knowscreenSizeonload() {
  var w = window.outerWidth;
  let sizeoftheScreen = document.getElementById('body');
  device = sizeoftheScreen.getAttribute('userdevice');
  if(w>650) {
      sizeoftheScreen.setAttribute("userdevice",'desktop');
      console.log('The user is using a desktop( wider screen >650px)');
  }
  else {
      sizeoftheScreen.setAttribute("userdevice",'mobile');
      console.log('The user is is using mobile(smaller screen width <=650px)');
  }
  //console.log(device);
}

/* SECTION A2 */
/* This function will be called when the user changes the screen orientation or resize the screen */

function screenSizeonresizewindow() {
  var w = window.outerWidth;
  let sizeoftheScreen = document.getElementById('body');
  device = sizeoftheScreen.getAttribute('userdevice');
  if(w>650) {
      sizeoftheScreen.setAttribute("userdevice",'desktop');
      console.log('The user has made the screen wider(screen width >650px)');

      var staticnavbar = document.getElementById("navbar");
      staticnavbar.classList.add("staticnav");

    /* This section is the solution of the problem Problem(1)*/
    const navMenu = document.querySelector(".navmenu");
    const visibility = navMenu.getAttribute('data-visible');
      if(visibility ==="true") {
        var element = document.getElementById("body");
        element.classList.remove("noscroll");
      }
    /* This section is the solution of the problem Problem(1) End*/
  }
  else {
      sizeoftheScreen.setAttribute("userdevice",'mobile');
      console.log('The user has made the screen narrower(screen width <=650px)');

    /* This section is the solution of the problem Problem(1)*/
    const navMenu = document.querySelector(".navmenu");
    const visibility = navMenu.getAttribute('data-visible');
      if(visibility ==="true") {
        element.classList.remove("noscroll");
      }
    /* This section is the solution of the problem Problem(1) End*/

  }
  //console.log(device);
}

/* SECTION A ends*/


/* SECTION B */

/* Sticky navigation bar only for mobile view/// Static navigation bar for desktop */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var w = window.outerWidth;
    if(w<=650) {
      var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
    }
}

/* SECTION B ends*/

/* SECTION C */

  /* Animated hamburger menu*/
function myFunction(x) {
    x.classList.toggle("change");
  }

/* SECTION C ends */


/* SECTION D */

/* In mobile view - Open and close the sidebar using hamburger menu option */
const navMenu = document.querySelector(".navmenu");
const toggleButton = document.querySelector(".togglebutton")

toggleButton.addEventListener("click",() => {
  const visibility = navMenu.getAttribute('data-visible');

  console.log(device);

  /* Block scroll when sidebar is open ( This section has a problem: Problem(1).
  It alone creates a problem but the problem is solved above SECTION A2) */

  var element = document.getElementById("body");
  element.classList.toggle("noscroll");
  /*  Problem(1) ---->
  when sidebar is opened and the mobile phonne is set in auto rotate mode
  and the orientation of the phone changes as the user tilts his/her phone, the screen becomes horizontally bigger and acts as
  a desktop screen. and the sidebar is hidden and navbar is visible. but as the bosy is set to no scroll, user cannot
  scroll the page anymore. To solve this problem using the screen resize function*/

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

/* SECTION D ends*/






