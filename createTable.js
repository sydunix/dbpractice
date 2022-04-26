// we use mysql2 library to request connection pool from MySQL database
let mysql = require('mysql2');

// we connect to MySQL using pool we requested
let con = mysql.createConnection({
  host: "localhost",
  user: "raus",
  password: "raus123",
  database: "raus",
  multipleStatements: true
});


con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");

  let sql = "CREATE TABLE mentees (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40), age VARCHAR(40), department VARCHAR(255), role VARCHAR(40), status VARCHAR(255), createdAt DATE)";
  
  let tableCreateMsg = (err, result) => {if (err) throw err; console.log("Table created"); }
  con.query(sql,tableCreateMsg);
  
}); 
