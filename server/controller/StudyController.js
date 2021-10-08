const Study = require('../model/Study');

module.exports = {
    studyAdd : (req,res)=>{
        const title = req.body.title;
        const intro = req.body.intro;
        const join_intro = req.body.join_intro;
        const host_id = req.body.host_id;
        const category = req.body.category;
        const profile_img = req.body.profile_img;
        const banner_img = req.body.banner_img;
        const birth = req.body.birth;
        const gender = req.body.gender;
        const light_theme = req.body.light_theme;
        const dark_theme = req.body.dark_theme;
        const arrangement = req.body.arrangement;
        const sort = req.body.sort;
        const order = req.body.order;
        const host_name = req.body.host_name;
        const host_profile = req.body.host_profile;
        const host_profile_img = req.body.host_profile_img;
        const params = [title,intro,join_intro,host_id,category,profile_img,banner_img,birth,gender,light_theme,dark_theme,arrangement,sort,order,host_id,host_id,host_name,host_profile,host_profile_img];
        Study.setStudyAddProccess(params).then((result)=>{
            res.send(result);
        });
    },

    studyListLoad : (req,res)=>{
        Study.setStudyListLoadProccess().then((result)=>{
            res.send(result);
        });
    },

    studyLoad : (req,res)=>{
        const idx = req.body.idx;
        const user_idx = req.body.user_idx;
        const params = [idx,idx,idx,user_idx];
        Study.setStudyLoadProccess(params).then((result)=>{
            res.send(result);
        });
    },

    studyJoinLoad : (req,res)=>{
        const idx = req.body.idx;
        const params = [idx];
        Study.setStudyJoinLoadProccess(params).then((result)=>{
            res.send(result);
        })
    },

    setStudyHit : (req,res)=>{
        const idx = req.body.idx;
        const params = [idx];
        Study.setStudyHitProccess(params).then((result)=>{
            res.send(result);
        })
    },

    setStudyUserInfo : (req,res)=>{
        const study_idx = req.body.study_idx;
        const params = [study_idx];
        Study.setStudyUserInfoProccess(params).then((result)=>{
            res.send(result);
        });
    },

    setStudyUserAdd : (req,res)=>{
        const study_idx = req.body.study_idx;
        const user_idx = req.body.user_idx;
        const status = req.body.status;
        const user_name = req.body.user_name;
        const profile = req.body.profile;
        const profile_img = req.body.profile_img;
        const params = [study_idx,user_idx,status,user_idx,study_idx,user_name,profile,profile_img];
        Study.setStudyUserAddProccess(params).then((result)=>{
            res.send(result);
        });
    },

    setStudyUserGoodAdd : (req,res)=>{
        const study_idx = req.body.study_idx;
        const user_idx = req.body.user_idx;
        const idx = req.body.idx;
        const params = [study_idx,user_idx,idx];
        Study.setStudyUserGoodAddProccess(params).then((result)=>{
            res.send(result);
        })
    },

    setStudyUserGoodDes : (req,res)=>{
        const study_idx = req.body.study_idx;
        const user_idx = req.body.user_idx;
        const idx = req.body.idx;
        const params = [study_idx,user_idx,idx];
        Study.setStudyUserGoodDesProccess(params).then((result)=>{
            res.send(result);
        });
    },

    studyRoomUserListLoad : (req,res)=>{
        const user_idx = req.body.user_idx;
        const params = [user_idx];
        Study.setStudyRoomUserListLoad(params).then((result)=>{
            res.send(result);
        })
    }
};