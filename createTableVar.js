var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "mydb"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql = 'CREATE TABLE bilz (customername VARCHAR(255), numOfItems VARCHAR(255))';
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table created");
    });
});