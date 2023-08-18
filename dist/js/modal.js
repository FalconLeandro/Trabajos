// Ventana modal
var modal = document.getElementById("ventanaModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click", function () {
  modal.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

let modalesContenido = [{
  id: 101,
  title: 'Coming Soon',
  text: 'I am currently developing a project where I apply my new knowledge in React and use of APIS. But for now, I leave you with some first practices in React where I explore concepts such as: functional and class components, props, hooks and event listeners. &#9755 <br><br>"Programming is like any other skill, the more you practice the better you will become".<br><br> - Satya Nadella',
  image: './dist/img/fog-g97741b634_1920.jpg',
  techList: [''],
  linkSitioWeb: 'https://falconleandro.github.io/reactTrabajos/',
  linkGithub: 'https://media.tenor.com/SAj1RiRJdz4AAAAC/get-out-get-outta-here.gif'
}, {
  id: 102,
  title: 'Laberinto de Borges oficial',
  text: 'Website for a tourist attraction located in the Finca ¨Los Alamos¨ San Rafael, Mendoza. Freelance work.',
  image: './dist/img/capturaLaberintoOficial.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>', '<span class="techs">js</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://laberintodeborges.com/',
  linkGithub: 'https://github.com/FalconLeandro/LaberintoDeBorges.git'
}, {
  id: 103,
  title: 'Laberinto de Borges alternativa',
  text: 'Site with alternative design provided to the client as a second option. Freelance work.',
  image: './dist/img/capturaLaberintoAlt.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>', '<span class="techs">js</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/laberinto/',
  linkGithub: 'https://github.com/FalconLeandro/laberinto.git'
}, {
  id: 104,
  title: 'Femiciencia',
  text: 'A gender-sensitive science communication site. Project funded by Wikipedia for a self-managed group of women scientists. Freelance work.',
  image: './dist/img/capturaFemiciencia.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>', '<span class="techs">js</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://femiciencia.com/',
  linkGithub: 'https://github.com/FalconLeandro/femiciencia.git'
}, {
  id: 105,
  title: 'Trabajos Frontend 1',
  text: ' First practices in the programming academy "Digital House". Learning path from HTML layout, styling with css and modularized with SASS, forms and functionalities with javaScript. ',
  image: './dist/img/capturaTrabajosFrontend.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>', '<span class="techs">js</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/',
  linkGithub: 'https://github.com/FalconLeandro/Frontend.git'
},{
  id: 106,
  title: 'Sitio Info Hotel',
  text: 'Informative site of a 4 star Hotel located in the city of Puerto Madryn, Chubut for internal use by the guest. Its main features include: check-in, menu consultation, spa appointments, general information about the city. First freelance job.',
  image: 'dist/img/capturaSitioHotel.png',
  techList: ['<span class="techs">php</span>', '<span class="techs">wordpress</span>'],
  linkSitioWeb: 'https://sitioinformativohotel.wordpress.com/',
  linkGithub: 'https://media.tenor.com/SAj1RiRJdz4AAAAC/get-out-get-outta-here.gif'
}
];

/* ------------------------- funcion para atrapar el evento de clickeado ------------------------- */
function atraparIdCardClickeada() {
  //agarro todos los cards
  const cards = document.querySelectorAll('.card');
  console.log(cards);
  const modalContenedor = document.querySelector('.contenido-modal');
  console.log(modalContenedor);
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', e => {

      //accedo al id que tiene la card clickeada
      var id = e.target.getAttribute("id");
      console.log(id);

      for (let i = 0; i < modalesContenido.length; i++) {

        if (id == modalesContenido[i].id) {
          modal.style.display = "block";

          modalContenedor.innerHTML = `
          
            <div class="contenedor-modal-descripcion">
                <div>
                  <h2 class="modal-descripcion-titulo">${modalesContenido[i].title}</h2>
                  <p>${modalesContenido[i].text}</p>
                </div>
                <div>
                  ${modalesContenido[i].techList}
                </div>
            </div>
            <div class="contenedor-modal-preview">
                <img class="${id == 101 || id == 104 || id == 105 ? 'animacion-none' : 'modal-image'}" src="${modalesContenido[i].image}"/>
                <div id="modal-preview-shadow"></div>
                <div class="modal-preview-enlaces">
                    <a href="${modalesContenido[i].linkGithub}" target=" _blank">GitHub</a>
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">Deploy</a>
                </div>
            </div>
          `
        }
      }
    });
  }
};
atraparIdCardClickeada();