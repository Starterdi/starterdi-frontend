const mysql = require('mysql2');
const conn = mysql.createPool({
    host:'test.itsw.info',
    user:'sw202135',
    password:'sw202135',
    database:'sw202135',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
});

module.exports = conn;