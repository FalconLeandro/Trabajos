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
  text: 'Actualmente me encuentro desarrollando un proyecto donde aplico mis nuevos conocimientos en React y uso de APIS. ',
  image: './dist/img/fog-g97741b634_1920.jpg',
  techList: ['<p>"Programar es como cualquier otra habilidad, cuanto más practiques, mejor te volverás".<br><br> - Satya Nadella<p/>'],
  linkSitioWeb: 'https://media.tenor.com/SAj1RiRJdz4AAAAC/get-out-get-outta-here.gif',
  linkGithub: 'https://media.tenor.com/SAj1RiRJdz4AAAAC/get-out-get-outta-here.gif'
}, {
  id: 102,
  title: 'Laberinto de Borges oficial',
  text: 'Sitio informátivo de una atracción turistica ubicada en la Finca ¨Los Alamos¨ San Rafael, Mendoza. Trabajo freelance.',
  image: './dist/img/capturaLaberintoOficial.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://laberintodeborges.com/',
  linkGithub: ''
}, {
  id: 103,
  title: 'Laberinto de Borges alternativa',
  text: 'Sitio con diseño alternativo provista al cliente como segunda opción. Trabajo freelance.',
  image: './dist/img/capturaLaberintoAlt.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/laberinto/',
  linkGithub: ''
}, {
  id: 104,
  title: 'Femiciencia',
  text: 'Sitio de comunicación de la ciencia con perpectiva de género. Proyecto financiado por Wikipedia para un grupo autogestionado de científicas. Trabajo freelance.',
  image: './dist/img/capturaFemiciencia.png',
  linkSitioWeb: '',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>'],
  linkSitioWeb: 'https://femiciencia.com/',
  linkGithub: ''
}, {
  id: 105,
  title: 'Trabajos Frontend 1',
  text: 'Primeros trabajos en la academia de programación "Digital House". Ruta de aprendizaje desde maquetado HTML, estilo con css y modularizados con SASS, formularios y funcionalidades con javaScript.  ',
  image: './dist/img/capturaTrabajosFrontend.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/Frontend/',
  linkGithub: ''
}, {
  id: 106,
  title: 'Trabajos en React',
  text: 'Sitio informátivo de un Hotel 4 estrellas ubicado en la ciudad de Puerto Madryn, Chubut de uso interno para el huésped. Cuenta entre sus principales caracteristicas: check-in, consulta de menúes, turnos spa, info general de la ciudad. Primer trabajo freelance.',
  image: 'dist/img/reactCaptura.png',
  techList: ['<span class="techs">html</span>','<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://falconleandro.github.io/reactTrabajos/',
  linkGithub: ''
},
{
  id: 107,
  title: 'Sitio Info Hotel',
  text: 'Sitio informátivo de un Hotel 4 estrellas ubicado en la ciudad de Puerto Madryn, Chubut de uso interno para el huésped. Cuenta entre sus principales caracteristicas: check-in, consulta de menús, turnos spa, info general de la ciudad. Primer trabajo freelance.',
  image: 'dist/img/capturaSitioHotel.png',
  techList: ['<span class="techs">html</span>', '<span class="techs">react</span>', '<span class="techs">css</span>', '<span class="techs">sass</span>'],
  linkSitioWeb: 'https://sitioinformativohotel.wordpress.com/',
  linkGithub: ''
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
                <h2 class="modal-descripcion-titulo">${modalesContenido[i].title}</h2>
                <p>${modalesContenido[i].text}</p>
                
                <div>
                  ${modalesContenido[i].techList}
                </div>
            </div>
            <div class="contenedor-modal-preview">
                <img class="${id == 101 || id == 104 || id == 105 || id == 106 ? 'animacion-none' : 'modal-image'}" src="${modalesContenido[i].image}"/>
                <div id="modal-preview-shadow"></div>
                <div class="modal-preview-enlaces">
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">GitHub</a>
                    <a href="${modalesContenido[i].linkSitioWeb}" target=" _blank">Web Site</a>
                </div>
            </div>
          `
        }
      }
    });
  }
};
atraparIdCardClickeada();