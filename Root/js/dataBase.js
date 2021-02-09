import { createConnection } from 'mysql';

var con = createConnection({
    host: "localhost",
    user: "root",
    password: "Ast71uSe9ur@",
    database: "bank"
});

con.connect((function(err){
    if (err) throw err;
    console.log("connected")
}))