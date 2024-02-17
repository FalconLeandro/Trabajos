//Script para cerrar el menu hamburguesa
const btn = document.querySelector('.menu-btn');
const links = document.querySelectorAll(".nav-link a");

function scrollMenu() {
  window.scrollTo(0, 330);
}
if (btn.checked) {
  console.log('check');
  scrollMenu();

}

console.log(btn.checked);

function doit() {

  btn.checked = false;

}
links.forEach(cbox => { cbox.addEventListener("click", doit); });


