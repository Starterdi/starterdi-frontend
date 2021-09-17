const express = require('express');
const app = express();
const user_controller = require('../controller/UserController');
const study_controller = require('../controller/StudyController');

// user
app.post('/loginProccess',user_controller.loginProccess);
app.post('/loginIdCheck',user_controller.loginIdCheck);
app.post('/loginEmailCheck',user_controller.loginEmailCheck);
app.post('/joinProccess',user_controller.joinProccess);

// study
app.post('/studyAdd',study_controller.studyAdd);

module.exports = app;