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
                    alert("id:" + id); /*AÑADIR FUNCIÓN PARA CARGAR DATOS CON ESE ID*/
                };
            };


        currentRow.onclick = createClickHandler(currentRow);

    }
}

function insertar() {
    alert("Insertar");
}


function actualizar() {
    alert("Actualizar");
}


function borrar() {
    alert("Borrar");
}


function salir() {
    alert("Salir");
}