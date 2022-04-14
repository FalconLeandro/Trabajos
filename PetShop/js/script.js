let logo = document.getElementById("sticky");
logo.style.display = "none";

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 1615) {
    logo.style.display = "block";
    logo.style.animation = "rolling-in 3s";
    logo.style.transform = "translateX(-53.5vw)";

    blocked();
  } else {
    logo.style.animation = "rolling-back 2s";
    logo.style.transform = "translate(-83vw, 500px)";
    logo.style.opacity = ".8";
    i = 0;
  }
});

let i = 0;
function blocked() {
  logo.addEventListener("click", function (e) {
    var a = i;
    if (a <= 0) {
      e.preventDefault();
      grow();
      i++;
    }
  });
}
function grow() {
  logo.style.transform = "translate(-53.5vw, -38vh) scale(2)";
  logo.style.transitionProperty = "all";
  logo.style.transitionDuration = "1s";
  logo.style.opacity = "1";
}
