var bEnviar = document.getElementById("bEnviar")

function addDiv() {
    var textArea = document.querySelector("textarea")
    var contenedor = document.createElement("DIV")
    var texto = document.createTextNode(textArea.value)

    contenedor.appendChild(texto)
    document.getElementById("historial").appendChild(contenedor)
    contenedor.classList = "contenedor"
    textArea.value = ""
}

bEnviar.addEventListener("click" , addDiv)