const mysql = require('mysql2');
const conn = mysql.createConnection({
    host:'test.itsw.info',
    user:'sw202135',
    password:'sw202135',
    database:'sw202135'
});

conn.connect();

module.exports = conn;