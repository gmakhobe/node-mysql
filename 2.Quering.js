/* Quering to the database */
const mysql = require('mysql');
const vals = require('./vals');

const con = mysql.createConnection({
    host: vals.fields.hostname,
    user: vals.fields.username,
    password: vals.fields.password,
    database: vals.fields.dbname()
});

con.connect((error) => {
    if (error) throw error;
    const sql = "SELECT * FROM members;";
    con.query(sql, (error, results) => {
        if (error) throw error;
        console.log(results);
        process.exit(1);
    });
});