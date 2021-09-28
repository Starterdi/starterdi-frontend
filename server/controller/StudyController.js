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
        const params = [title,intro,join_intro,host_id,category,profile_img,banner_img,birth,gender,light_theme,dark_theme,arrangement,sort,order];
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
        const params = [idx];
        Study.setStudyLoadProccess(params).then((result)=>{
            res.send(result);
        });
    }
};