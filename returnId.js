//steps
/*

1. mysql req require
2. create connecton by using database information createConnecton
3. connect
4. sql q

*/
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});
connection.connect(function(err){
    if(err){
        console.log("db con failed");
        throw err;
    }
    console.log("db con ok");
    var sql = "INSERT INTO sellers VALUES (5,'COCACOLA.INC', 'melbern 37')";
    connection.query(sql, function(err, result){
        if(err){
            console.log("table con failed");
            throw err;
        }
        console.log("1 record inserted, ID: " + result.insertId);
    });
});