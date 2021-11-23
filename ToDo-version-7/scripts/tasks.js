// chequear que exista un usuario loggeado
const jwt = localStorage.getItem('jwt');
// si no existe un token, lo sacamos de la vista
if(!jwt){
    location.replace('/');
}


const apiBaseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

window.addEventListener('load', function () {
  // inicializo AOS
  AOS.init();
    /* -------------------------------------------------------------------------- */
    /*                             logica de la vista                             */
    /* -------------------------------------------------------------------------- */
    const jwt = localStorage.getItem('jwt')

    const nodoNombreUsuario = document.querySelector('.user-info p');
    const nodoFormulario = document.querySelector('.nueva-tarea');
    const inputNuevaTarea = document.querySelector('#nuevaTarea');
    const btnCerrar = document.querySelector('#closeApp');

    btnCerrar.addEventListener('click', function() {
        // cerra sesion

        Swal.fire({
          title: '¿Desea cerrar sesión?',
          text: "Para ingresar nuevamente ponga sus credenciales.",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Si!',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed) {
            // cerrar sesion
            localStorage.clear();
            location.replace('/');
          }
        })



        // if(confirm("¿Desea cerrar sesión?")){
        //     // limpiamos el storage y redireccionamos
        //     localStorage.clear();
        //     location.replace('/');
        // }
    })

    /* --------------- funciones que se disparan al iniciar la app -------------- */
    obtenerNombreUsuario(`${apiBaseUrl}/users/getMe`, jwt);
    obtenerListadoTareas(`${apiBaseUrl}/tasks`, jwt);

    /* ----------------- accionar que dispara el submit del form ---------------- */
    nodoFormulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        
        const nuevaTarea = {
            description: inputNuevaTarea.value,
            completed: false
        }

        crearNuevaTarea(`${apiBaseUrl}/tasks`, jwt, nuevaTarea );


        nodoFormulario.reset();
    });


    /* -------------------------------------------------------------------------- */
    /*                                  funciones                                 */
    /* -------------------------------------------------------------------------- */

    /* ------------------------- funcion de renderizado ------------------------- */
    function renderizarListaTareas(listado) {
        const nodoTareasTerminadas = document.querySelector('.tareas-terminadas');
        const nodoTareasPendientes = document.querySelector('.tareas-pendientes');

        // limpiamos los nodos
        nodoTareasPendientes.innerHTML = "";
        nodoTareasTerminadas.innerHTML = "";

        // creando listas filtradas
        const tareasTerminadas = listado.filter( tarea => tarea.completed);
        const tareasPendientes = listado.filter( tarea => !tarea.completed);

        nodoTareasTerminadas.innerHTML = tareasTerminadas.map( tarea => `
                <li class="tarea" data-aos="fade-left">
                    <div class="done"></div>
                    <div class="descripcion">
                        <p class="nombre">${tarea.description}</p>
                        <div>
                        <button><i id="${tarea.id}" class="fas
                        fa-undo-alt change"></i></button>
                        <button><i id="${tarea.id}" class="far
                        fa-trash-alt"></i></button>
                    </div>
                    </div>
                </li>
                `).join('');

        nodoTareasPendientes.innerHTML = tareasPendientes.map( tarea => `
                <li class="tarea" data-aos="flip-up">
                    <div class="not-done change" id="${tarea.id}"></div>
                    <div class="descripcion">
                        <p class="nombre">${tarea.description}</p>
                        <p class="timestamp"><i class="far
                        fa-calendar-alt"></i> ${dayjs(tarea.createdAt).format('DD/MM hh:mm')}</p>
                    </div>
                </li>
                `).join('')


        // listado.forEach( tarea => {
        //     // si la tareas está terminada
        //     if(tarea.completed){
        //         nodoTareasTerminadas.innerHTML += `
        //         <li class="tarea">
        //             <div class="done"></div>
        //             <div class="descripcion">
        //                 <p class="nombre">${tarea.description}</p>
        //                 <div>
        //                 <button><i id="${tarea.id}" class="fas
        //                 fa-undo-alt change"></i></button>
        //                 <button><i id="${tarea.id}" class="far
        //                 fa-trash-alt"></i></button>
        //             </div>
        //             </div>
        //         </li>
        //         `
        //     } else {
        //         nodoTareasPendientes.innerHTML += `
        //         <li class="tarea">
        //             <div class="not-done change" id="${tarea.id}"></div>
        //             <div class="descripcion">
        //                 <p class="nombre">${tarea.description}</p>
        //                 <p class="timestamp"><i class="far
        //                 fa-calendar-alt"></i> ${tarea.createdAt}</p>
        //             </div>
        //         </li>
        //         `
        //     }
        // })

        // procedemos a habilitar el cambio de estado
        botonCambioEstado();
        // procedemos a habilitar el borrado de una tarea terminada
        botonBorrarTarea();
    }

    /* ---------------------- PUT: cambiar estado de tareas --------------------- */

    
  function botonCambioEstado() {
    const btnCambioEstado = document.querySelectorAll('.change');

    btnCambioEstado.forEach(boton => {
      //a cada boton le asignamos una funcionalidad
      boton.addEventListener('click', function (event) {
        const id = event.target.id;
        const url = `${apiBaseUrl}/tasks/${id}`
        const payload = {};

        //segun el tipo de boton que fue clickeado, cambiamos el estado de la tarea
        if (event.target.classList.contains('fa-undo-alt')) {
          payload.completed = false;
        } else {
          payload.completed = true;
        }

        const settingsCambio = {
          method: 'PUT',
          headers: {
            "Authorization": jwt,
            "Content-type": "application/json"
          },
          body: JSON.stringify(payload)
        }
        fetch(url, settingsCambio)
          .then(response => {
            console.log(response.status);
            //obtener y renderizar nuevamente las tareas
            obtenerListadoTareas(`${apiBaseUrl}/tasks`, jwt);
          })
      })
    });

  }

  /* --------------------------- DELTE: borrar tarea -------------------------- */
  function botonBorrarTarea() {
    //obtenemos los botones de borrado
    const btnBorrarTarea = document.querySelectorAll('.fa-trash-alt');

    btnBorrarTarea.forEach(boton => {
      //a cada boton de borrado le asignamos la funcionalidad
      boton.addEventListener('click', function (event) {
        const id = event.target.id;
        const url = `${apiBaseUrl}/tasks/${id}`

        const settingsCambio = {
          method: 'DELETE',
          headers: {
            "Authorization": jwt,
          }
        }
        fetch(url, settingsCambio)
          .then(response => {
            console.log(response.status);
            //renderizar nuevamente las tareas
            obtenerListadoTareas(`${apiBaseUrl}/tasks`, jwt);
          })
      })
    });

  }



    /* ------------------------- POST: crear nueva tarea ------------------------ */
    function crearNuevaTarea(url, token, payload) {

        const configuraciones = {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }

        fetch(url, configuraciones)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data);
                obtenerListadoTareas(`${apiBaseUrl}/tasks`, token);
            })
    }

    /* ---------------------- GET: obtener todas las tareas --------------------- */
    async function obtenerListadoTareas(url, token) {

        const configuraciones = {
            method: 'GET',
            headers: {
                authorization: token
            }
        }

        // implementamos el await dentro de una funcion async, contemplando los resultas positivos o negativos con el bloque try/catch
        try {
          const respuesta = await fetch(url, configuraciones);
          const data = await respuesta.json();
          console.log(data);
          renderizarListaTareas(data);
        } catch (error) {
          console.log(error);
          alert(error);
        }


        // fetch(url, configuraciones)
        //     .then(respuesta => respuesta.json())
        //     .then(data => {
        //         console.log(data);
        //         // el listado lo pintamos en pantalla
        //         renderizarListaTareas(data);
        //     })
    }

    /* ---------------------- GET: obtener info del usuario --------------------- */
    function obtenerNombreUsuario(url, token) {

        const configuraciones = {
            method: 'GET',
            headers: {
                authorization: token
            }
        }

        fetch(url, configuraciones)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data);
                nodoNombreUsuario.innerText = data.firstName;
            })
    }
});