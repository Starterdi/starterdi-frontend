const mysql = require('mysql2');
let conn = mysql.createConnection({
    host:'test.itsw.info',
    user:'sw202135',
    password:'sw202135',
    database:'sw202135'
});


conn.connect();

conn.query("SELECT user_name FROM User WHERE idx = 1",(err,rows,fileds)=>{
    if(err) console.log(err);
    console.log(rows);
    conn.end();
})

exports.conn = conn;