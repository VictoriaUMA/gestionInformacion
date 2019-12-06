/* INDEX.HTML */
const path = require('path');

function ok() {
    var output = '';
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    console.log("\n user: " + usuario + "\n pass:" + password);
    $query = "SELECT * FROM practicaGI.tUsuario WHERE nif = '" +
        usuario + "';";

    select($query, function(result) {
        output = result;
        console.table(output);
        if (output[0] == undefined) {
            alert("Usuario incorrecto");
        } else if (output[0].password == password) {
            location.replace('muestras.html');
        } else {
            alert("Contraseña incorrecta");
        }
    });
}

function cancel() {
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
}

/* MUESTRAS.HTML */

var id_seleccionado = -1;
var nif_seleccionado = "";
var cultivo_seleccionado = "";
var solucion_seleccionada = 0;

function limpiarOption(op) {
    document.getElementById(op).value = "";
    document.getElementById(op).text = "";
}

function limpiar() {
    limpiarOption('id');
    limpiarOption('nif');
    limpiarOption('cultivo');
    setSolucionSeleccionada(0);

    id_seleccionado = -1;
    nif_seleccionado = "";
    cultivo_seleccionado = "";
    solucion_seleccionada = 0;
}

function addRowHandlers() {
    var table = document.getElementById("muestras");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        currentRow.backgroundColor = "white";
        var createClickHandler =
            function(row) {
                return function() {
                    var z = document.getElementById("muestras").getElementsByTagName("td");
                    for (let y = 4; y < z.length; y++) {
                        z[y].style.background = "white";
                    }

                    var cell = row.getElementsByTagName("td")[0];

                    for (let x = 0; x < row.getElementsByTagName("td").length; x++) {
                        row.getElementsByTagName("td")[x].style.background = "grey";
                    }

                    table.style.backgroundColor = "white";

                    //Obtenemos los datos seleccionados
                    id_seleccionado = cell.innerHTML;
                    nif_seleccionado = row.getElementsByTagName("td")[1].innerHTML;
                    cultivo_seleccionado = row.getElementsByTagName("td")[2].innerHTML;
                    solucion_seleccionada = row.getElementsByTagName("td")[3].innerHTML;

                    mostrarDatos();

                };
            };
        currentRow.onclick = createClickHandler(currentRow);
    }
}

function mostrarDatos() {
    document.getElementById('id').value = id_seleccionado;
    document.getElementById('nif').value = nif_seleccionado;
    document.getElementById('cultivo').value = cultivo_seleccionado;
    setSolucionSeleccionada(solucion_seleccionada);
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarListaSoluciones();
});

function editarTabla(sql) {
    insertUpdateDelete(sql);
    borrarFilasBD();
    cargarFilasBD();
}

function insertar() {
    //Cogemos los datos actuales
    let id_form = document.getElementById('id').value;
    let nif_form = document.getElementById('nif').value;
    let cultivo_form = document.getElementById('cultivo').value;
    let solucion_form = document.getElementById("mySelect").value;
    let sql = "INSERT INTO tMuestra VALUES (" + id_form + ",'" + nif_form + "','" + cultivo_form + "'," + solucion_form + ");";

    //Miramos si ya existe una muestra con ese id
    $query = "SELECT * FROM practicaGI.tMuestra WHERE ID = " + id_form + ";";

    select($query, function(result) {
        output = result;
        console.table(output);
        if (!(output)) {
            editarTabla(sql);
            limpiar();
        } else {
            alert("Ya existe una muestra con id=" + id_form);
        }

    });
}

function actualizar() {
    if (id_seleccionado != -1) {
        let id_form = document.getElementById('id').value;
        let nif_form = document.getElementById('nif').value;
        let cultivo_form = document.getElementById('cultivo').value;
        let solucion_form = document.getElementById("mySelect").value;

        let sql = "UPDATE tMuestra SET ID=" + id_form + ", NIF_Paciente='" + nif_form + "', Cultivo='" + cultivo_form + "', Solucion=" + solucion_form + " WHERE ID=" + id_seleccionado + ";";

        //Miramos si ya existe una muestra con ese id
        $query = "SELECT * FROM practicaGI.tMuestra WHERE ID = " + id_form + ";";

        select($query, function(result) {
            output = result;
            console.table(output);
            if (!(output)) {
                editarTabla(sql);
                limpiar();
            } else {
                alert("Ya existe una muestra con id=" + id_form);
            }

        });
    }
}

function borrar() {
    if (id_seleccionado != -1) {
        let sql = "DELETE FROM tMuestra WHERE ID=" + id_seleccionado + ";";
        editarTabla(sql);
        limpiar();
    }
}

function cargarFilasBD() {
    $query = "SELECT * FROM tMuestra;"

    select($query, function(result) {
        output = result;
        console.table(output);
        var table = document.getElementById("muestras");
        output.forEach(function(row) {
            var newRow = table.insertRow();

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell0 = newRow.insertCell(0);
            var cell1 = newRow.insertCell(1);
            var cell2 = newRow.insertCell(2);
            var cell3 = newRow.insertCell(3);

            // Add some text to the new cells:
            cell0.innerHTML = row.ID;
            cell1.innerHTML = row.NIF_Paciente;
            cell2.innerHTML = row.Cultivo;
            cell3.innerHTML = row.Solucion;

        });
        table.deleteRow(1);
    });
}

function borrarFilasBD() {
    var table = document.getElementById("muestras");
    for (var i = table.rows.length - 1; i > 1; i--) {
        table.deleteRow(i);
    }
    table.insertRow(2);
    table.deleteRow(1);
}

function salir() {
    location.replace("index.html");
}

/*------LISTA SOLUCIONES----------------------------------------------------------*/
function insertarSelect(texto, valor) {
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = texto;
    option.value = valor;
    x.add(option);
    actualizarListaSoluciones();
}

function setSolucionSeleccionada(valor) {
    var sel = document.getElementById('mySelect');

    var opts = sel.options;
    for (var opt, j = 0; opt = opts[j]; j++) {
        if (opt.value == valor.toString()) {
            sel.selectedIndex = j;
            break;
        }
    }
    actualizarListaSoluciones();
}

/*
function getSolucionSeleccionada() {
alert(document.getElementById("mySelect").value);
}
*/

function cargarSoluciones() {
    $query = "SELECT * FROM tSolucion;"

    select($query, function(result) {
        output = result;
        console.table(output);

        for (let i = 0; i < output.length; i++) {
            insertarSelect(output[i].Solucion, output[i].ID);
        }

    });
}

function actualizarListaSoluciones() {
    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option');
    var instances = M.FormSelect.init(elems, options);
}