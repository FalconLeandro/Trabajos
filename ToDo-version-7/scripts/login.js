/* -------------------------------------------------------------------------- */
/*                   logica aplicada en la pantalla de LOGIN                  */
/* -------------------------------------------------------------------------- */
const apiUrl = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

window.addEventListener('load', function(){

    const formulario =  this.document.forms[0];
    const inputEmail = this.document.querySelector('#inputEmail');
    const inputPassword =  this.document.querySelector('#inputPassword');


    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const validacion = validacionNoVacio(inputEmail.value) && validacionNoVacio(inputPassword.value);

        if(validacion){
            //en caso de que esté todo correcto, iniciamos la peticion
            const datosUsuario = normalizacionLogin(inputEmail.value, inputPassword.value);
            console.log(datosUsuario);
            //consultamos al servidor y esperamos su respuesta
            fetchApiLogin(apiUrl, datosUsuario);
        }else{
            console.log("algun dato no es correcto");
        }

        formulario.reset();
    });

});

/* -------------------------------------------------------------------------- */
/*                      seccion de funciones disponibles                      */
/* -------------------------------------------------------------------------- */

function validacionNoVacio(texto) {
    let resultado = true;

    if(texto === ""){
        resultado = false;
    }

    return resultado
}

function normalizacionLogin(email, password) {
    const usuario = {
        email: email.toLowerCase().trim(),
        password: password.trim()
    }
    
    return usuario;
}

function fetchApiLogin(url,payload) {
    mostrarSpinner();

    const configuraciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    
    fetch(url, configuraciones)
    .then( respuesta => {
        console.log(respuesta);
        return respuesta.json()
    })
    .then( data => {
        ocultarSpinner();
        console.log(data);
        console.log(data.jwt);
        //si llega correctamente un token
        if(data.jwt){
            localStorage.setItem('jwt', data.jwt);

            location.href = '/mis-tareas.html'
        }
    })
}

function mostrarSpinner(){
    const spinner = document.querySelector('#spinner');
    spinner.style.display = "block";
}
function ocultarSpinner(){
    const spinner = document.querySelector('#spinner');
    spinner.style.display = "none";
}