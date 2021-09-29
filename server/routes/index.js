const express = require('express');
const app = express();
const user_controller = require('../controller/UserController');
const study_controller = require('../controller/StudyController');
const upload = require('../lib/multer');

// user
app.post('/loginProccess',user_controller.loginProccess);
app.post('/loginIdCheck',user_controller.loginIdCheck);
app.post('/loginEmailCheck',user_controller.loginEmailCheck);
app.post('/joinProccess',user_controller.joinProccess);

// study
app.post('/studyAdd',study_controller.studyAdd);
app.post('/studyListLoad',study_controller.studyListLoad);
app.post('/studyLoad',study_controller.studyLoad);

// imgs
app.post('/uploadImg',upload.single('img'),(req,res)=>{
    res.send(req.file);
});

app.post('/uploadImgs',upload.array('img'),(req,res)=>{
    res.send(req.files);
});

module.exports = app;