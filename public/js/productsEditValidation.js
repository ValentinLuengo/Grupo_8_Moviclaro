window.addEventListener("load", function () {
    console.log("Hola");

    const formulario = document.querySelector(".formulario");
    const modelo = document.querySelector("input#modelo");
    const modeloDanger = document.querySelector("div#modeloDanger");
    const descripcion = document.querySelector("textarea#descripcion");
    const descripcionDanger = document.querySelector("div#descripcionDanger");
    const imagen = document.querySelector("input#image");
    // imagen.focus();
    const imageDanger = document.querySelector("div#imageDanger");
    const expReg = /(\.jpg|\.jpeg|\.png|\.gif)$/g;

    //validación de modelo------------------------------------------------------

    const validarModelo = function () {
        if (modelo.value == "") {
            modelo.classList.add("is-invalid");
            modeloDanger.innerHTML = "modelo obligatorio";
            return false;
        } else {
            if (modelo.value.length < 5) {
                modelo.classList.add("is-invalid");
                modeloDanger.innerHTML = "Debe tener mas de 5 carateres";
                return false;
            } else {
                modelo.classList.remove("is-invalid");
                modeloDanger.innerText = "";
                return true;
            }
        }
    };

    // Validación de descripción--------------------------------------------------------

    const validarDescripcion = function () {
        if (descripcion.value == "") {
            descripcion.classList.add("is-invalid");
            descripcionDanger.innerHTML = "descripcion obligatoria";
            return false;
        } else {
            if (descripcion.value.length < 20) {
                console.log(descripcion.value.length);
                descripcion.classList.add("is-invalid");
                descripcion.focus();
                descripcionDanger.innerHTML =
                    "Al menos debe tener 20 caracteres";
                return false;
            } else {
                descripcion.classList.remove("is-invalid");
                descripcionDanger.innerText = "";
                return true;
            }
        }
    };

    // Validación de formato de imagen---------------------------------------------------

    const validarImagen = function () {
        if (imagen.value == "") {
            // imagen.classList.add("is-invalid");
            // imageDanger.innerHTML = "Debes subir una imagen";
            return true;
        } else {            
            if (!expReg.test(imagen.value)) {
                imagen.classList.add("is-invalid");
                imageDanger.innerHTML =
                "Los formatos válidos son .jpg, .jpeg, .png, .gif";
                return false;
            } else {
                imagen.classList.remove("is-invalid");
                imageDanger.innerHTML = "";
                return true;
            }
        }
    };

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        modelo.addEventListener("blur", () => {
            validarModelo();
        });

        descripcion.addEventListener("blur", () => {
            validarDescripcion();
        });

        imagen.addEventListener("change", () => {
            validarImagen();
        });

        let status = validarModelo();
            status = validarDescripcion() && status;
            status = validarImagen() && status;

        if (status) {
            formulario.submit();
        // } else {
        //     alert("Hay errores");
        } 
    });

    
});