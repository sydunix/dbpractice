
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


  let sql = `INSERT INTO mentees (id, name, age, department, role, status, createdAt)
  VALUES 
  ('1', 'Sarah', '5', 'Accounting', 'PM' , 'Activated', '2020-01-01'),
  ('2', 'Tim', '10', 'Engineering', 'QA' , 'Pending', '2021-02-01'),
  ('3', 'Joe', '17', 'Management', 'PM' , 'Activated', '2021-02-01'),
  ('4', 'Tolu', '25', 'Management', 'Dev' , 'Pending', '2021-02-01'),
  ('5', 'Rob', '5', 'Engineering', 'QA' , 'Activated', '2021-03-01'),
  ('6', 'Ade', '10', 'Management', 'QA' , 'Pending', '2021-04-01'),
  ('7', 'Tom', '17', 'Security', 'QA' , 'Activated', '2021-05-01'),
  ('8', 'Jide', '26', 'Accounting', 'Dev' , 'Activated', '2021-06-01') 
  `;
  
  let tableCreateMsg = (err, result) => {if (err) throw err; console.log("Values insterted in Table"); }
  con.query(sql,tableCreateMsg);
  
}); 
