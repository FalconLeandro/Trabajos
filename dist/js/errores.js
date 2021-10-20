window.addEventListener("load", function(){
    let formulario = document.querySelector(".col")
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = [];

        let campoNombre = document.querySelector("input.firstName");

        if(campoNombre.value == "") {
            errores.push("El campo de nombre tiene que estar completo");
        } else if(campoNombre.value.length < 3){
            errores.push("El campo debe contener al menos 3 caracteres");
        }

        let campoApellido = document.querySelector("input.lastName");

        if(campoApellido.value == "") {
            errores.push("El campo de apellido tiene que estar completo");
        } else if(campoNombre.value.length < 3){
            errores.push("El campo debe contener al menos 3 caracteres");
        }

        let campoEmail = document.querySelector("input.email");

        if(campoEmail.value == "") {
            errores.push("El campo email tiene que estar completo");
        }

        let campoTelefono = document.querySelector("input.mobile");

        if(campoTelefono.value == "") {
            errores.push("El campo mobile tiene que estar completo");
        }

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

        


    });
})