var numeroDocumento = document.getElementById("dni")
var valor = document.getElementById("dni").value
var password = document.getElementById("password")

function verificarDNI(valor) {

    return /^\d{8}$/.test(valor)

    /*key = e.keyCode || e.which

    var teclado = String.fromCharCode(key)
    var numeros = "0123456789"
    var especiales = "8-37-38-46"
    var tecladoEspecial = false

    for(var i in especiales) {
        if(key == especiales[i]) {
            tecladoEspecial = true
        }
    }

    if(numeros.indexOf(teclado) == -1 && !tecladoEspecial) {
        return false
    }*/
}

function verificarPassword()
{
    var message = document.getElementById("errorPassword")
 	
    if(password.value.length >= 6) {
        message.innerHTML = "La contraseña tiene mas de 6 dígitos!"
    } else if(password.value == null) {
        message.innerHTML = "Ingrese una contraseña válida"
    }
}

password.onkeypress = verificarPassword
/*numeroDocumento.onkeypress = verificarDNI*/

numeroDocumento.addEventListener("keypress" , () => {
    if(verificarDNI(valor)) {
    console.log("anda")
    }
})