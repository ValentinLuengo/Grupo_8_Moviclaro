window.addEventListener("load", function () {
    console.log("Hola");

    const formulario = document.querySelector(".formulario");
    const modelo = document.querySelector("input#modelo");
    const modeloDanger = document.querySelector("div#modeloDanger");
    const precio = document.querySelector("input#precio");
    const precioDanger = document.querySelector("div#precioDanger")
    const stock = document.querySelector("input#stock");
    const stockDanger = document.querySelector("div#stockDanger")
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

    // Validación de precio--------------------------------------------------------
    
    const validarPrecio = function(){
        // const precioString = precio.value.toString()
        if(precio.value == ""){
            precio.classList.add("is-invalid");
            precioDanger.innerHTML = "Precio de producto obligatorio";
            return false;
        }else{
            precio.classList.remove("is-invalid");
            precioDanger.innerHTML = "";
            return true;
        }
    }
    
    // Validación de stock--------------------------------------------------------
    
    const validarStock = function(){
        // const precioString = precio.value.toString()
        if(stock.value == ""){
            stock.classList.add("is-invalid");
            stockDanger.innerHTML = "Indicar stock de producto";
            return false;
        }else{
            stock.classList.remove("is-invalid");
            stockDanger.innerHTML = "";
            return true;
            
        }
    }
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
            imagen.classList.add("is-invalid");
            imageDanger.innerHTML = "Debes subir una imagen";
            return false;
        } else {
            console.log(imagen.value);
            if (expReg.test(imagen.value)) {
                imagen.classList.remove("is-invalid");
                imageDanger.innerHTML = "";
                return true;
            } else {
                imagen.classList.add("is-invalid");
                imageDanger.innerHTML =
                    "Los formatos válidos son .jpg, .jpeg, .png, .gif";
                return false;
            }
        }
    };

    // Comprobacion de validaciones ---------------------------------------------------

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        modelo.addEventListener("blur", () => {
            validarModelo();
        });

        descripcion.addEventListener("blur", () => {
            validarDescripcion();
        });

        precio.addEventListener("blur", () => {
            validarPrecio();
        });
        stock.addEventListener("blur", () => {
            validarStock();
        });

        imagen.addEventListener("change", () => {
            validarImagen();
        });

        let status = validarModelo();
            status = validarPrecio() && status;
            status = validarStock() && status;
            status = validarDescripcion() && status;
            status = validarImagen() && status;

        if (status) {
            formulario.submit();
        } else {
            alert("Hay errores");
        } 
    });

    
});
