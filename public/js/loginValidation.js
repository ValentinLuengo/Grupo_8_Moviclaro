window.addEventListener("load", function(){
    let email = document.querySelector('#email');
    //email.focus();
    email.onblur = function(event){
        if( event.target.value ==""){
             document.querySelector('#error').style.display = 'block'
             document.querySelector('#error').style.color = "red"
             //email.focus()
        }

    } 
})