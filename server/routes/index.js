const express = require('express');
const app = express();
const user_controller = require('../controller/UserController');

app.post('/loginProccess',user_controller.loginProccess);
app.post('/loginIdCheck',user_controller.loginIdCheck);
app.post('/loginEmailCheck',user_controller.loginEmailCheck);
app.post('/joinProccess',user_controller.joinProccess);

module.exports = app;