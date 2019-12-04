var sqlData = {
    host     : 'localhost',
    user     : 'root',
    password : null,
    database : 'mydb'
}

function getFirstTenRows(){
    
    var mysql = require('mysql');
    // Add the credentials to access your database
    var connection = mysql.createConnection(sqlData);

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        } else {
            console.log("Conectado");
        }
    });

    // Perform a query
    // $query = 'SELECT `id`,`name` FROM `articles` LIMIT 10';

    // connection.query($query, function(err, rows, fields) {
    //     if(err){
    //         console.log("An error ocurred performing the query.");
    //         console.log(err);
    //         return;
    //     }

    //     callback(rows);

    //     console.log("Query succesfully executed");
    // });

    // Close the connection
    connection.end(function(){
        // The connection has been closed
    });
}

