var boton = document.getElementById("entrar");
var inputDNI = document.getElementById("dni");
var inputPassword = document.getElementById("password");
var error = document.getElementById("error")

function verificarDNI(documentoValor) {
    return /^\d{8}$/.test(documentoValor)
}

function verificarPassword(passwordValor) {
    var letras = /[a-z]/g;
    var numeros = /[0-9]/g;

    return passwordValor.length >= 6 && passwordValor.match(numeros) && passwordValor.match(letras) 
}

function logear() {
    var documentoValor = document.getElementById("dni").value;
    var passwordValor = document.getElementById("password").value;

    if(verificarDNI(documentoValor) && verificarPassword(passwordValor)) {
        location.href = "home.html"
    } else {
        inputDNI.classList = "error"
        inputPassword.classList = "error"
        setTimeout('inputDNI.classList = "datos"' , 3000)
        setTimeout('inputPassword.classList = "datos"' , 3000)
        error.innerHTML = "Datos incorrectos, vuelva a ingresarlos."
    }
}


boton.addEventListener("click" , logear);