window.addEventListener("load", function(){
    let email = document.querySelector('#email');
    //email.focus();
    email.onblur = function(event){
        if( event.target.value ==""){
             document.querySelector('#error').style.display = 'block'
             document.querySelector('#error').style.color = "red"
             email.focus()
        }

    } ;
    let password = document.querySelector('#password');
    
    password.onblur = function(event){
       
        if( event.target.value ==""){
             document.querySelector('#errorPassword').style.display = 'block'
             document.querySelector('#errorPassword').style.color = "red"
            // password.focus()
        }

    } ;

    let formulario = document.querySelector("#formLogin")
    formulario.addEventListener("submit", (event) => {
      
        let emailValue = document.querySelector('#email').value;
        let passwordValue = document.querySelector('#password').value
        if((emailValue== "") ||(passwordValue=="")){
            document.querySelector('#error').style.display = 'block'
            document.querySelector('#error').style.color = "red"
           
            document.querySelector(".text-danger").innerHTML = "Las credenciales son inválidas"
           
        }
       
            
          
        });
    

})