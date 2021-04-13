
// we use mysql2 library to request connection pool from postgres database
let mysql = require('mysql2');

// we connect to pg using pool we requested
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


  let sql = `DROP TABLE mentees`;
  
  let tableCreateMsg = (err, result) => {if (err) throw err; console.log("Table Deleted!"); }
  con.query(sql,tableCreateMsg);
  
}); 
