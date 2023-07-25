const header = document.querySelector(".main-header");
const arrow = document.querySelector(".scroll-arrow");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  };
  if (scrollPos > 100) {
    arrow.style.opacity = '0';
  
  } else {
    arrow.style.opacity = '1';
  }
});

// arrow.addEventListener('click', () =>{
//   window.location.hash = "#about-me";
  
// });
const social = document.querySelector(".social");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10 && scrollPos < 3000 ) {
    social.style.transform = "translate(207px)";
    social.style.transition = "1s";
    social.style.opacity = "1";
    (social.style.transitionProperty = "transform"), "opacity";
  } else {
    // social.classList.add("social-footer");
    social.style.transform = "translate(250px)";
    social.style.transition = "1s";
    social.style.transitionProperty = "transform";
  }
});
