const express = require('express');
const app = express();
const conn = require('../config/db');
const sha256 = require('sha256');

app.post('/loginProccess',(req,res)=>{
    const user_id = req.body.user_id;
    const user_password = sha256(req.body.user_password);
    const sql = `SELECT * FROM User WHERE user_id = ? AND password = ?`;
    const params = [user_id,user_password];
    conn.query(sql,params,(err,rows,fileds)=>{
        res.send({err,rows,fileds});
    });
});

app.post('/loginIdCheck',(req,res)=>{
    const user_id = req.body.user_id;
    const sql = `SELECT * FROM User WHERE user_id = ?`;
    const params = [user_id];
    conn.query(sql,params,(err,rows,fileds)=>{
        res.send({err,rows,fileds});
    });
});

app.post('/loginEmailCheck',(req,res)=>{
    const user_email = req.body.user_email;
    const sql = `SELECT * FROM User WHERE user_email = ?`;
    const params = [user_email];
    conn.query(sql,params,(err,rows,fileds)=>{
        res.send({err,rows,fileds});
    });
})

module.exports = app;