const path = require('path');

function ok() {
    var output = '';
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    console.log("\n user: " + usuario + "\n pass:" + password);
    $query = "SELECT * FROM practicaGI.tUsuario WHERE nif = '" + 
    usuario + "' AND password = '" + password + "';";

    select($query,function(result){
        output = result;
        console.table(output);
        if(output[0] != undefined){
	        location.replace('muestras.html');
        } else {
            alert("Usuario y/o contraseña incorrecto");      
        }
    });


}

function cancel() {
    alert("CANCEL");
}