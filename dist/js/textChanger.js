//funcion para cambiar el texto al clickear los globos de texto de la section about me:

const hi = `<h2 id="hi">Hi! I am Lea</h2>`;

const p1 = `<p>Here is an enthusiast of new technologies, nature, 
design and the balance between them.  I am creative, curious and 
fan of puzzles. I consider myself a believer in self-design. 
I have found in programming a great  environment to put together
 the parts I'm made of and develop new ones.</p>`;

const p2 = `<p>I am currently studying a Bachelor's Degree in Computer Science
 at Universidad Siglo XXI, 3 subjects away from obtaining my intermediate degree
  in Systems Analysis. At the same time, I complement my studies with the
  Certified Tech Developer course at Digital House.</p>`;

const p3 = `<a href='#portfolio'><p>Here are some works below, I hope you like them! &#128512</p></a>`;

const texto = document.getElementById('texto');
const backArrow = document.getElementsByClassName('fa-caret-left');


var arrayText = [p1, p2, p3]
var i = 0;

texto.addEventListener("click", function (event) {

  if (i <= 2) {
    texto.innerHTML = arrayText[i];

    i++;


  } else {
    texto.innerHTML = hi;
    // window.location.hash = "#portfolio";
    i = 0;
  }
}, false);












