var arreglo=['dist/img/6.mp4','dist/img/2.mp4','dist/img/3.mp4#t=0.5s','dist/img/4.mp4','dist/img/5.mp4','dist/img/1.mp4']
var i = 0;

document.getElementById('sk').addEventListener("click", function( event ) {
    
    document.getElementById('video').src=arreglo[i];
    i++;
    if (i==6) {
      i=0;
    }
    // document.body.style.overflowY='hidden';
    document.getElementById("header").style.visibility = 'hidden';
    window.location.href = "#soft-skills";
    document.getElementById("iconBack").style.display = "block";
  }, false);

  document.getElementById('iconBack').addEventListener("click", function( event ) {
    
    document.getElementById('video').src='/';
    
    document.body.style.overflowY='visible';
    document.getElementById("header").style.visibility = 'visible';
    document.getElementById("iconBack").style.display = "none";
  }, false);
  


  
  