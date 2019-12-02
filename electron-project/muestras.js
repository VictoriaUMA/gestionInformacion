function addRowHandlers() {
    var table = document.getElementById("muestras");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = 
            function(row) 
            {
                return function() { 
                                        var cell = row.getElementsByTagName("td")[0];
                                        var id = cell.innerHTML;
                                        alert("id:" + id);/*AÑADIR FUNCIÓN PARA CARGAR DATOS CON ESE ID*/ 
                                 };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }
}

function insertar(){
    alert("Insertar");
}


function actualizar(){
    alert("Actualizar");
}


function borrar(){
    alert("Borrar");
}


function salir(){
    alert("Salir");
}