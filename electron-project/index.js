const path = require('path');

function ok() {
    var output = '';
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    console.log("\n user: " + usuario + "\n pass:" + password);
    $query = "SELECT * FROM practicaGI.tUsuario WHERE nif = '" + 
    usuario + "';";

    select($query,function(result){
        output = result;
        console.table(output);
        if(output[0] == undefined){
            alert("Usuario incorrecto"); 
        } else if(output[0].password == password){
	        location.replace('muestras.html');
        } else {
            alert("Contraseña incorrecta");      
        }
    });


}

function cancel() {
    alert("CANCEL");
}