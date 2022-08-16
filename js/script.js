const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');
const correo = document.getElementById("correo")
const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
    document.getElementById('boton').onclick = function(){
        alert("Se a registrado con exito",'<BR/>');
    }
});

form.addEventListener("submit", e=>{ 
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(usuario.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    console.log(correo.test(correo.value))
    if(!correo.test(correo.value)){ 
        warnings += 'Email incorrecto <br>'
        entrar = true
    }
    if(contraseña.value.length <8){ 
        warnings += 'no es valida <br>'
        entrar = true
    }
    if(entrar){ 
        parrafo.innerHTML = warnings
    }else{ 
        parrafo.innerHTML = "Enviado"
    }
    document.getElementById('boton1').onclick = function(){
        alert("A ingresado con exito",'<BR/>');
    }
})
form.addEventListener("submit", e=>{ 
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(usuario.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    console.log(correo.test(correo.value))
    if(!correo.test(correo.value)){ 
        warnings += 'Email incorrecto <br>'
        entrar = true
    }
    if(contraseña.value.length <8){ 
        warnings += 'no es valida <br>'
        entrar = true
    }
    if(entrar){ 
        parrafo.innerHTML = warnings
    }else{ 
        parrafo.innerHTML = "Enviado"
    }
    document.getElementById('boton1').onclick = function(){
        alert("A ingresado con exito",'<BR/>');
    }
})


