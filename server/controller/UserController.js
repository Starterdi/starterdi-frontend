const sha256 = require('sha256');
const User = require('../model/User');

module.exports = {
    loginProccess : (req,res)=>{
        const user_id = req.body.user_id;
        const user_password = sha256(req.body.user_password);
        const params = [user_id,user_password];
        User.setLoginProccess(params).then((result)=>{
            res.send(result);
        });
    },

    loginIdCheck : (req,res)=>{
        const user_id = req.body.user_id;
        const params = [user_id];
        User.setLoginIdCheck(params).then((result)=>{
            res.send(result);
        });
    },

    loginEmailCheck : (req,res)=>{
        const user_email = req.body.user_email;
        const params = [user_email];
        User.setLoginEmailCheck(params).then((result)=>{
            res.send(result);
        });
    },

    joinProccess : (req,res)=>{
        const user_name = req.body.user_name;
        const user_email = req.body.user_email;
        const user_id = req.body.user_id;
        const password = sha256(req.body.password);
        const profile = req.body.profile;
        const profile_img = req.body.profile_img;
        const gender = req.body.gender;
        const birth = req.body.birth;
        const params = [user_name,user_email,user_id,password,profile,profile_img,gender,birth];
        User.setJoinProccess(params).then((result)=>{
            res.send(result);
        });
    }
}