cargarFilasBD();


function addRowHandlers() {
    var table = document.getElementById("muestras");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        currentRow.backgroundColor = "white";
        var createClickHandler =
            function (row) {
                return function () {
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
                    alert("id:" + id); /*AÑADIR FUNCIÓN PARA CARGAR DATOS CON ESE ID*/
                    document.getElementById('id').value=id;
                    document.getElementById('nif').value=nif;
                    document.getElementById('cultivo').value=cultivo;
                    //document.getElementById('solucion').value=solucion; // No sé hacerlo de momento
                };
            };


        currentRow.onclick = createClickHandler(currentRow);

    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option');
    var instances = M.FormSelect.init(elems, options);
});

function insertar() {
    alert("Insertar");
}


function actualizar() {
    alert("Actualizar");
}


function borrar() {
    alert("Actualizar");
}

function cargarFilasBD() {
    $query = "SELECT * FROM tMuestra;"

    select($query, function (result) {
        output = result;
        console.table(output);
        var table = document.getElementById("muestras");
        output.forEach(function (row) {
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
    // alert("Salir");
    location.replace("index.html");
}