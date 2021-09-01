const mysql = require('mysql2');
let conn = mysql.createConnection({
    host:'test.itsw.info',
    user:'sw202135',
    password:'sw202135',
    database:'sw202135'
});


conn.connect();

exports.conn = conn;