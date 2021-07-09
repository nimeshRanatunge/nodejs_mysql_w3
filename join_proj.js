var mysql = require('mysql');
var con = mysql.createConnection({
   host :'localhost',
    user:'root',
    password:'',
    database:'mydb',
});
con.connect(function(err){
    if(err) {throw err};
    console.log('db ok');
    var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, fav_product VARCHAR(255))";
    con.query(sql, function(err, result){
        if(err) {throw err};
        console.log('success!');
    });
});