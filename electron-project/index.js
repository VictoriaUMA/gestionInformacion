function ok() {
    var output = '';

    select("SELECT * FROM tUsuario;",function(result){
        output = result;
        console.log(output);
    });

    alert("Vamos a iniciar sesion");  
}

function cancel() {
    alert("CANCEL");
}