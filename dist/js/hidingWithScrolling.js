// ocultamientos al hacer scroll:

//menu header
const header = document.querySelector(".main-header");
//flecha de desplazamiento
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


//menu lateral - entra y sale en diferentes posiciones segun el tamaño de la pantalla
const social = document.querySelector(".social");
window.addEventListener("scroll", () => {

  var mediaQSocial = window.matchMedia("(min-width: 760px)");
  const scrollPos = window.scrollY;
  if (mediaQSocial.matches) {
    console.log('mayor a 780px');
    if (scrollPos > 10 && scrollPos < 3000) {
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

  } else {
    console.log('menor a 780px');

    if (scrollPos > 10 && scrollPos < 2500) {
      social.style.transform = "translateY(-60px)";
      social.style.transition = "1s";
      social.style.opacity = "1";
      (social.style.transitionProperty = "transform"), "opacity";
    } else {
      // social.classList.add("social-footer");
      social.style.transform = "translateY(0px)";
      social.style.transition = "1s";
      social.style.transitionProperty = "transform";
    }
  }

});
