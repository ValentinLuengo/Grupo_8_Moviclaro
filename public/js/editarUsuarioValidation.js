window.addEventListener("load", function () {
    let formulario = document.querySelector("#formEdit");
    let nombre = document.getElementById("name");
    nombre.focus();
    let apellido = document.getElementById("last_name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");
    let image = document.getElementById("image");
    let telefono = document.querySelector(".registro_phone");
    let pais = document.querySelector(".registro_country_id");
    let btnSubmit = document.querySelector(".btnSubmit");
    let btnReset = document.querySelector(".btnReset");

    const errNombre = document.querySelector("div#errNombre");
    const errApellido = document.querySelector("div#errApellido");
    const errEmail = document.querySelector("div#errEmail");
    const errPassword = document.querySelector("div#errPassword");
    const errPassword2 = document.querySelector("div#errPassword2");
    const errImage = document.querySelector("div#errImage");

    //console.log(nombre)

    const validarNombre = function () {
        if (nombre.value == "") {
            nombre.classList.add("is-invalid");
            errNombre.innerText = "Debes escribir tu nombre";
            return false;
        } else {
            if (nombre.value.length < 6) {
                nombre.classList.add("is-invalid");
                errNombre.innerText = "Debe tener mas de 6 carateres";
                return false;
            } else {
                nombre.classList.remove("is-invalid");
                errNombre.innerText = "";
                return true;
            }
        }
    };

    const validarApellido = function () {
        if (apellido.value == "") {
            apellido.classList.add("is-invalid");
            errApellido.innerText = "Debes escribir tu apellido";
            return false;
        } else {
            if (apellido.value.length < 6) {
                apellido.classList.add("is-invalid");
                errApellido.innerText = "Debe tener mas de 6 carateres";
                return false;
            } else {
                apellido.classList.remove("is-invalid");
                errApellido.innerText = "";
                return true;
            }
        }
    };

    const validarEmail = function () {
        if (email.value == "") {
            email.classList.add("is-invalid");
            errEmail.innerText = "Debes escribir tu email";
            return false;
        } else {
            const isEmail =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
            if (!isEmail.test(String(email.value).toLowerCase())) {
                email.classList.add("is-invalid");
                errEmail.innerText = "Debe ser un formato válido";
                return false;
            } else {
                email.classList.remove("is-invalid");
                errEmail.innerHTML += "";
                return true;
            }
        }
    };

    const validarPassword = function () {
        if (password.value == "") {
            password.classList.add("is-invalid");
            errPassword.innerText = "Debes escribir tu contraseña";
            return false;
        } else {
            if (password.value.length < 6) {
                password.classList.add("is-invalid");
                errPassword.innerText = "Debe tener más de 8 carateres";
                return false;
            } else {
                password.classList.remove("is-invalid");
                errPassword.innerText = "";
                return true;
            }
        }
    };

    const validarPassword2 = function () {
        if (password2.value == "") {
            password2.classList.add("is-invalid");
            errPassword2.innerText = "Debes reingresar tu contraseña";
            return false;
        } else {
            if (password.value !== password2.value) {
                password2.classList.add("is-invalid");
                errPassword2.innerText = "Debe coincidir con tu contraseña";
                return false;
            } else {
                password2.classList.remove("is-invalid");
                errPassword2.innerText = "";
                return true;
            }
        }
    };

    const validarImagen = function () {
        const expReg = /(\.jpg|\.jpeg|\.png|\.gif)$/g;
        if (image.value == "") {
            image.classList.add("is-invalid");
            errImage.innerHTML = "Debes subir una imagen";
            return false;
        } else {
            console.log(image.value);
            if (expReg.test(image.value)) {
                image.classList.remove("is-invalid");
                errImage.innerHTML = "";
                return true;
            } else {
                image.classList.add("is-invalid");
                errImage.innerHTML =
                    "Los formatos válidos son .jpg, .jpeg, .png, .gif";
                return false;
            }
        }
    };

    nombre.addEventListener("blur", function () {
        validarNombre();
    });

    apellido.addEventListener("blur", function () {
        validarApellido();
    });

    email.addEventListener("blur", function () {
        validarEmail();
    });

    password.addEventListener("blur", function () {
        validarPassword();
    });

    password2.addEventListener("blur", function () {
        validarPassword2();
    });

    image.addEventListener("change", function () {
        validarImagen();
    });

    btnReset.addEventListener("click", () => {
        location.reload();
    });

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let status = validarNombre();
        status = validarApellido() && status;
        status = validarEmail() && status;
        /*status = validarPassword() && status;
        status = validarPassword2() && status;
        status = validarImagen() && status;*/

        if (!status) {
            alert("Hay errores");
        } else {
            formulario.submit();
        }
    });
});