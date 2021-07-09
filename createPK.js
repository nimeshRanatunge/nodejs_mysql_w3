var ms = require('mysql');
var con = ms.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

con.connect(function(err){
    if(err){
        console.log("Connecton failed!");
        throw err;
    }
    console.log("Connection OK");
    var sql = "CREATE TABLE sellers (id INT AUTO INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result){
        if(err)
            //console.log("Table creation failed");
            throw err;
        console.log("Table created");
    });
});