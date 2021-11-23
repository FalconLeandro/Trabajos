window.addEventListener('scroll',function(){
  let animacion = document.getElementsByClassName('animado');
  let posicionObj1 = animacion.getBoundingClientRect().top;
  console.log(posicionObj1);
  let tamañoDePantalla = window.innerHeight/2;
for (let i = 0; i < animacion.length; i++) {
  if (posicionObj1 < tamañoDePantalla) {
    animacion.style.animation = 'mover 4s';
    animacion.style.opacity = '1';
  }else{
    animacion.style.animation = 'none';
    animacion.style.opacity = '0';
  }
  
}
  
})
