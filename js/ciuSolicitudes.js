var bEnviar = document.getElementById("bEnviar")

function addDiv() {
    var textArea = document.querySelector("textarea").value
    var contenedor = document.createElement("DIV")
    var texto = document.createTextNode(textArea)

    contenedor.appendChild(texto)
    document.getElementById("historial").appendChild(contenedor)
    contenedor.classList = "contenedor"
}

bEnviar.addEventListener("click" , addDiv)