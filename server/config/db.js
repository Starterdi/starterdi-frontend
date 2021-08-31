const mysql = require('mysql');
const db = mysql.createPool({
    host:'test.itsw.info',
    user:'sw202135',
    password:'sw202135',
    database:'sw202135',
});

module.exports = db;