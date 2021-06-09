const mysql = require('mysql');

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "sTkCLRRtMh",
    password: "FRQW0XfGOT",
    database: 'sTkCLRRtMh'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

connection.connect(function (err) {
    if (err) {
        console.error('error DB: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});