cargarFilasBD();
cargarSoluciones();

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
                    var id = cell.innerHTML;
                    var nif = row.getElementsByTagName("td")[1].innerHTML;
                    var cultivo = row.getElementsByTagName("td")[2].innerHTML;
                    var solucion = row.getElementsByTagName("td")[3].innerHTML;
                    document.getElementById('id').value = id;
                    document.getElementById('nif').value = nif;
                    document.getElementById('cultivo').value = cultivo;
                    setSolucionSeleccionada(solucion);
                };
            };


        currentRow.onclick = createClickHandler(currentRow);

    }
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarListaSoluciones();
});

function insertar() {
    alert("Insertar");
}


function actualizar() {
    alert("Actualizar");
}

function borrar() {
    alert("borrar");
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

function getSolucionSeleccionada() {
    alert(document.getElementById("mySelect").value);
}


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