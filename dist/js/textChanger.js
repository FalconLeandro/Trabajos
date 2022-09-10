const hi=`<h2 id="hi">Hi! I am Lea</h2>`;

const p1=`<p>Here is an enthusiast of new technologies, nature, 
design and the balance between them. I am creative, curious and a 
fan of puzzles. I consider myself convinced of self-design. I found 
in programming a great environment to put together the parts I am
made of and develop new ones.</p>`;

const p2=`<p>I am currently studying a Bachelor of Computer Science 
at Siglo XXI University, 3 subjects away from obtaining my intermediate 
title of University Technician in Systems Analysis. At the same time, 
I complement my studies with the Digital House Certified Tech Developer career.</p>`;

const p3=`<p>Here some works, I hope you like them! &#128512</p>`;

const texto=document.getElementById('texto');

var arrayText=[p1,p2,p3]
var i = 0;

texto.addEventListener("click", function( event ) {
   
  if (i<=2) {
    texto.innerHTML=arrayText[i];
    i++;
  } else {
    texto.innerHTML=hi;
    window.location.hash = "#portfolio";
    i=0;
  }
  
  
  
  

    // texto.innerHTML=arrayText[i];
    // i++;
    // if (i==3) {
    //   i=0;
    // }
    
}, false);


    
