var arreglo=['dist/img/fotoPerfil2bis.jpg','dist/img/fotoPerfil2.png','dist/img/fotoPerfil3.jpg']
var i = 0;

document.getElementById('fotoPerfil').addEventListener("click", function( event ) {
    
    document.getElementById('fotoPerfil').src=arreglo[i];
    i++;
    if (i==3) {
      i=0;
    }
    
    }, false);

  