const express = require('express');
const app = express();
const conn = require('../config/db');

app.post('/loginProccess',(req,res)=>{
    console.log(req.params);
    console.log(req.body);
});

module.exports = app;