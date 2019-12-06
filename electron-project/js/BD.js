var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'aps.salastroya.com',
    port: '3306',
    user: 'GI',
    password: 'GI2019',
    database: 'practicaGI'
});

connection.connect(function(err) {
    if (err) {
        alert('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

function select(query, callback) {
    connection.query(query, function(err, rows, fields) {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed", rows);
        return callback(rows);
    });
}

function insertUpdateDelete(query) {
    connection.query(query, function(err) {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
    });
}