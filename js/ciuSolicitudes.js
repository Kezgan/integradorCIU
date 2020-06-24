var bEnviar = document.getElementById("bEnviar")

const xhttp = new XMLHttpRequest();

xhttp.open("GET", "js/datos.json", true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText)
        let res = document.getElementById("res")

        res.innerHTML = ""

        for(let i of datos) {
            res.innerHTML += `
                <tr>
                    <td>${i.descripcion}</td>
                    <td>${i.fechaSolicitud}</td>
                    <td>${i.estado}</td>
                </tr>
            `
        }
    }
}

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