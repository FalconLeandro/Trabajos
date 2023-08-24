// var arreglo=['dist/img/fotoPerfil2bis.jpg','dist/img/fotoPerfil2.png','dist/img/fotoPerfil3.jpg']
// var i = 0;

var fotoPerfil = document.getElementById("img");
console.log(fotoPerfil);
var mQ = window.matchMedia("(min-width: 1024px)");

if (mQ.matches) {
    console.log(mQ.matches);
    fotoPerfil.innerHTML= `<img id="fotoPerfil" src="dist/img/fotoPerfil2bis.jpg" alt="fotoPerfil" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="400" data-aos-duration="500">`;
} else {
    fotoPerfil.innerHTML= `<img id="fotoPerfil" src="dist/img/fotoPerfil2bis.jpg" alt="fotoPerfil" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="200" data-aos-duration="500"></img>`
}



  