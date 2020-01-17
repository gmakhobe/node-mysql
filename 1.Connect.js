const mysql = require('mysql');
const vals = require('./vals');

const con = mysql.createConnection({
    host: vals.fields.hostname,
    user: vals.fields.username,
    password: vals.fields.password
});

con.connect((error) => {
    if (error) throw error;
    console.log("Connected!");
    process.exit(1);
});