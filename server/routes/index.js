const express = require('express');
const app = express();
const conn = require('../config/db');

app.post('/loginProccess',(req,res)=>{
    const user_id = req.body.user_id;
    const user_password = req.body.user_password;
    const sql = `SELECT * FROM User WHERE user_id = ? AND password = ?`;
    const params = [user_id,user_password];
    conn.query(sql,params,(err,rows,fileds)=>{
        res.send({err,rows,fileds});
    });
});

module.exports = app;