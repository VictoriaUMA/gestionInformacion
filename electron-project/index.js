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
    });

    alert("Vamos a iniciar sesion");  
}

function cancel() {
    alert("CANCEL");
}