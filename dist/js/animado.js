let animado = document.querySelectorAll(".animado");
function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado < scrollTop) {
      animado[i].style.opacity = 1;
    }
  }
}
window.addEventListener("scroll", mostrarScroll);
