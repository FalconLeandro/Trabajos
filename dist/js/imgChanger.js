var arreglo=['dist/img/pexels-alex-conchillos-3888585.jpg','dist/img/pexels-veeterzy-39811.jpg','dist/img/fotoPerfil2.jpg']
var i = 0;

document.getElementById('fotoPerfil').addEventListener("click", function( event ) {
    
    document.getElementById('fotoPerfil').src=arreglo[i];
    i++;
    if (i==3) {
      i=0;
    }
    
    }, false);

  