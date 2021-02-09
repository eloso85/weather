require('dotenv').config()
console.log(process.env.DB_PASS)
var mysql = require('mysql');
;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: "bank"
});

con.connect((function(err){
    if (err) throw err;
    console.log("connected")
}))