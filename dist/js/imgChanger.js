//protipo de cambiador de fotos de la section about me (no esta en funcionamiento)
var fotoPerfil = document.getElementById("img");
var mQ = window.matchMedia("(min-width: 1024px)");

if (mQ.matches) {
    fotoPerfil.innerHTML= `<img id="fotoPerfil" src="dist/img/fotoPerfil2bis.jpg" alt="fotoPerfil" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="300" data-aos-duration="500">`;
} else {
    fotoPerfil.innerHTML= `<img id="fotoPerfil" src="dist/img/fotoPerfil2bis.jpg" alt="fotoPerfil" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="200" data-aos-duration="500"></img>`
}



  