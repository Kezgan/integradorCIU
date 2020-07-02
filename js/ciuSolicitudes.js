var bEnviar = document.getElementById("bEnviar")
var bEliminar = document.getElementById("bEliminar")
var bEditar = document.getElementById("bEditar")

var btnG = document.getElementById("btnG")
var btnC = document.getElementById("btnC")

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
                    <td><input type="checkbox" id="checkbox" name="input"></input></td>
                </tr>
            `
        }
    }
}

function addDiv() {
    /*
    var textArea = document.querySelector("textarea")
    var contenedor = document.createElement("DIV")
    var texto = document.createTextNode(textArea.value)

    contenedor.appendChild(texto)
    document.getElementById("historial").appendChild(contenedor)
    contenedor.classList = "contenedor"
    textArea.value = ""
    */

   var textArea = document.querySelector("textarea")
   var texto = document.querySelector("textArea").value
   var fecha = new Date()

   res.innerHTML += `
        <tr>
            <td>${texto}</td>
            <td>${fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate()}</td>
            <td>Abierto</td>
            <td><input type="checkbox" id="checkbox" name="input"></input></td>
        </tr>
    `
    textArea.value = ""
}

function eliminarFila() {
    var table = document.getElementById("tabla").tBodies[0];
    var rowCount = table.rows.length;
    var contador = 0

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[3].getElementsByTagName('input')[0];
        
        if(chkbox.checked == true) {
            table.deleteRow(i);
            rowCount--;
            i--;
            contador ++;
        }
    }
    
    if(contador == 0) {
        setTimeout(function(){ alert("No seleccionaste ninguna opcion") } , 100)
    } else {
        setTimeout(function(){ alert("Eliminaste " + contador + " elementos") } , 100)
    }
}

function editarFila() {
    var table = document.getElementById("tabla").tBodies[0];
    var rowCount = table.rows.length;
    var modal = document.getElementById("modal")

    var inputDesc = document.getElementById("inputDesc")
    var inputFecha = document.getElementById("inputFecha")
    var inputEstado = document.getElementById("inputEstado")
    
    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[3].getElementsByTagName('input')[0];
        
        if(chkbox.checked == true) {
            inputDesc.value = row.cells[0].innerHTML
            inputFecha.value = row.cells[1].innerHTML
            inputEstado.value = row.cells[2].innerHTML

            modal.style.display = "block"
            break
        }
    }

}

function guardar() {
    var table = document.getElementById("tabla").tBodies[0];
    var rowCount = table.rows.length;
    var modal = document.getElementById("modal")

    var inputDesc = document.getElementById("inputDesc")
    var inputFecha = document.getElementById("inputFecha")
    var inputEstado = document.getElementById("inputEstado")

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[3].getElementsByTagName('input')[0];
        
        if(chkbox.checked == true) {
            row.cells[0].innerHTML = inputDesc.value
            row.cells[1].innerHTML = inputFecha.value
            row.cells[2].innerHTML = inputEstado.value

            chkbox.checked = false
            break
        }
    }
    modal.style.display = "none"
}

function cancelar() {
    var modal = document.getElementById("modal")
    var table = document.getElementById("tabla").tBodies[0];
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[3].getElementsByTagName('input')[0];
        
        if(chkbox.checked == true) {
            chkbox.checked = false
            break
        }
    }

    modal.style.display = "none"
}

bEnviar.addEventListener("click" , addDiv)
bEliminar.addEventListener("click" , eliminarFila)
bEditar.addEventListener("click" , editarFila)
btnG.addEventListener("click" , guardar)
btnC.addEventListener("click" , cancelar)