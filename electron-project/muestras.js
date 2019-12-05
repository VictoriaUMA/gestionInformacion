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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option');
    var instances = M.FormSelect.init(elems, options);
  });

function insertar() {
    alert("Insertar");
}


function actualizar() {
    alert("Actualizar");
    cargarFilasBD();
}


function borrar() {
    borrarFilasBD();
}

function cargarFilasBD(){
    $query = "SELECT * FROM tMuestra;"

    select($query,function(result){
        output = result;
        console.table(output);
    });
}

function borrarFilasBD(){
    var table = document.getElementById("muestras");
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
}
function salir() {
    alert("Salir");
}