/*When query values are variables provided by the user, you should escape the values.

This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

The MySQL module has methods to escape query values:*/

var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb",
});
con.connect(function(err){
    if(err) throw err;
    console.log("db con ok");
    var adr = 'mountain 21';
    //now we can see how to escape value
    var sql = 'SELECT * FROM customers WHERE address = '+ mysql.escape(adr);
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
});