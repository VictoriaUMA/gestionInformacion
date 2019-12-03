const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

function ok() {
    var output = '';
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    console.log("\n user: " + usuario + "\n pass:" + password);
    $query = "SELECT * FROM practicaGI.tUsuario WHERE nif = '" + 
    usuario + "' AND password = '" + password + "';";

    const modalPath = path.join('file://', __dirname, '../muestras.html');
            var win = new BrowserWindow({ frame: true, 
                transparent: false, 
                width: 800, 
                height: 600 });
            win.on('close', function () { win = null });
            win.loadURL(modalPath);
            win.show();

    select($query,function(result){
        output = result;
        console.table(output);
        if(output[0] != undefined){
            
        } else {
            alert("Usuario incorrecto");      
        }
    });


}

function cancel() {
    alert("CANCEL");
}