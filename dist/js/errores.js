window.addEventListener("load", function(){
    let formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        // let errores = [];

        // let campoNombre = document.querySelector(".firstName");
        

        // if(campoNombre.value == "") {
        //     errores.push("El campo de nombre tiene que estar completo");
        // } else if(campoNombre.value.length < 3){
        //     errores.push("El campo debe contener al menos 3 caracteres");
        // }

        // let campoApellido = document.querySelector(".lastName");

        // if(campoApellido.value == "") {
        //     errores.push("El campo de apellido tiene que estar completo");
        // } else if(campoNombre.value.length < 3){
        //     errores.push("El campo debe contener al menos 3 caracteres");
        // }

        // let campoEmail = document.querySelector(".email");

        // if(campoEmail.value == "") {
        //     errores.push("El campo email tiene que estar completo");
        // }

        // let campoTelefono = document.querySelector(".mobile");

        // if(campoTelefono.value == "") {
        //     errores.push("El campo mobile tiene que estar completo");
        // }

        // if (errores.length > 0) {
        //     e.preventDefault();

        //     let ulErrores = document.querySelector(".errores ul")
        //     for (let i = 0; i < errores.length; i++) {

        //         ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        //     }
        // }
        console.log('caca');

        


    });
})