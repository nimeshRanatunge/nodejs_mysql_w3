var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users VALUES ?";
  var values = [
    { id: 1, name: 'John', favorite_product: 154},
    { id: 2, name: 'Peter', favorite_product: 154},
    { id: 3, name: 'Amy', favorite_product: 155},
    { id: 4, name: 'Hannah', favorite_product:200},
    { id: 5, name: 'Michael', favorite_product:300}
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    console.log(result.insertId);
  });
});
