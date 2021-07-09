var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

conn.connect(function(err){
    if(err) throw(err);
    console.log("Connection succeed");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table created");
    });
});