/* -------------------------------------------------------------------------- */
/*                   logica aplicada en la pantalla de LOGIN                  */
/* -------------------------------------------------------------------------- */
const apiUrl = 'https://ctd-todo-api.herokuapp.com/v1/users';

window.addEventListener('load', function(){

    const formulario =  this.document.forms[0];
    const inputNombre = this.document.querySelector('#inputNombre');
    const inputApellido = this.document.querySelector('#inputApellido');
    const inputEmail = this.document.querySelector('#inputEmail');
    const inputPassword =  this.document.querySelector('#inputPassword');
    const inputPasswordRepetida =  this.document.querySelector('#inputPasswordRepetida');


    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const validacion = validacionNoVacio(inputNombre.value) && validacionNoVacio(inputApellido.value) && validacionNoVacio(inputEmail.value) && validacionNoVacio(inputPassword.value) && validacionAmbasContasenias(inputPassword.value,inputPasswordRepetida.value);

        if(validacion){
            //en caso de que esté todo correcto, iniciamos la peticion
            const datosUsuario = normalizacionRegister(inputNombre.value,inputApellido.value,inputEmail.value, inputPassword.value);
            console.log(datosUsuario);
            //consultamos al servidor y esperamos su respuesta
            fetchApiRegister(apiUrl, datosUsuario);
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

function validacionAmbasContasenias(constrasenia1, contrasenia2) {
    let resultado = true;

    if(constrasenia1 != contrasenia2){
        resultado = false;
    }

    return resultado;
}

function normalizacionRegister(nombre, apellido, email, password) {
    const usuario = {
        firstName: nombre.trim(),
        lastName: apellido.trim(),
        email: email.toLowerCase().trim(),
        password: password.trim()
    }
    
    return usuario;
}

function fetchApiRegister(url,payload) {

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
        console.log(data);
        if(!data.jwt){
            alert(data);
        }
        
        //si llega correctamente un token
        if(data.jwt){
            localStorage.setItem('jwt', data.jwt);

            location.href = '/mis-tareas.html'
        }
    }).catch( error => console.log(error));
}