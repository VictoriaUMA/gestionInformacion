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
            var rol = output[0].rolName;
            localStorage.setItem("rol", rol);
            $query = "SELECT * from practicaGI.tPermiso WHERE rolName='"+
            rol +"' AND pantalla='MUESTRAS';";
            select($query, function(result) {
                output = result;
                console.table(output);
                if (output[0].acceso[0] == 1) {
                    location.replace('muestras.html');
                } else {
                    alert("No tienes permiso suficiente para ver las muestras");
                }
            });
        } else {
            alert("Contraseña incorrecta");
        }
    });
}

function cancel() {
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
}