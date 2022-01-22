window.addEventListener("load", function () {
  console.log("Hola");

  const formulario = document.querySelector(".formulario");
  const marca = document.querySelector("input#marca");
  const modelo = document.querySelector("input#modelo");
  const modeloDanger = document.querySelector("div#modeloDanger");
  modelo.focus();
  const color = document.querySelector("input#color");
  const precio = document.querySelector("input#precio");
  const stock = document.querySelector("input#stock");
  const descripcion = document.querySelector("textarea#descripcion");
  const descripcionDanger = document.querySelector("div#descripcionDanger");
  const imagen = document.querySelector("input#image");
  const imageDanger = document.querySelector("div#imageDanger");
  const expReg = "[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$";

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
    //validación de modelo------------------------------------------------------
    
    if (modelo.value == "") {
      modelo.classList.add("is-invalid");
      return (modeloDanger.innerHTML = "modelo obligatorio");
    }
    if (modelo.value.length < 5) {
      modelo.classList.add("is-invalid");
      modeloDanger.innerHTML = "Debe tener mas de 5 carateres";
    }else{
          modelo.classList.remove("is-invalid");
          modeloDanger.innerHTML = ""
      }
      
      // Validación de descripción--------------------------------------------------------
      
      if (descripcion.value == "") {
              descripcion.classList.add("is-invalid");
          descripcion.focus();
          return (descripcionDanger.innerHTML = "descripcion obligatoria");
        };
        if (descripcion.value.length < 20) {
            console.log(descripcion.value.length);
          descripcion.classList.add("is-invalid");
          descripcion.focus();
          return (descripcionDanger.innerHTML = "Al menos debe tener 20 caracteres");
          }else{
                descripcion.classList.remove("is-invalid");
                descripcionDanger.innerText = "";
          };
      
      // Validación de formato de imagen---------------------------------------------------
      
      // imagen.addEventListener("change", (event) => {
        
      //   if (event.target.files == "") {
      //     imagen.classList.add("is-invalid");
      //     return (imageDanger.innerHTML = "Debes subir una imagen");
      //   }
    
      //   if (event.target.files[0].name.match(expReg)) {
      //     console.log(event.target.files);
      //     imagen.classList.remove("is-invalid");
      //   } else {
      //     imagen.classList.add("is-invalid");
      //     imageDanger.innerHTML =
      //       "Los formatos válidos son .jpg, .jpeg, .png, .gif";
      //   }
      // });
    });
  });
