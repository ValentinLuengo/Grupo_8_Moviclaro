window.addEventListener("load", function(){
    let email = document.querySelector('#email');
    //email.focus();
    email.onblur = function(event){
        if( event.target.value ==""){
             document.querySelector('#error').style.display = 'block'
             document.querySelector('#error').style.color = "red"
             email.focus()
        }else{
        const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        if (!isEmail.test(String(event.target.value).toLowerCase())){
            document.querySelector('#error').style.display = 'block'
             document.querySelector('#error').style.color = "red"
            document.querySelector("#error").innerText = "El mail no es válido"

        }else{ document.querySelector('#error').style.display = 'none'}
    }

    } ;
    let password = document.querySelector('#password');
    
    password.onblur = function(event){
       
        if( event.target.value ==""){
             document.querySelector('#errorPassword').style.display = 'block'
             document.querySelector('#errorPassword').style.color = "red"
            // password.focus()
        }
        else{
            document.querySelector('#errorPassword').style.display = 'none'
        }

    } ;

    let formulario = document.querySelector("#formLogin")
    formulario.addEventListener("submit", (event) => {
      
        let emailValue = document.querySelector('#email').value;
        let passwordValue = document.querySelector('#password').value

        if(emailValue== ""){
            event.preventDefault()
            document.querySelector('#error').style.display = 'block'
             document.querySelector('#error').style.color = "red"
        }

        

      
        if (passwordValue ==""){
            event.preventDefault()
            document.querySelector('#errorPassword').style.display = 'block'
             document.querySelector('#errorPassword').style.color = "red"
        }


        });
    

})