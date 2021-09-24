const Study = require("../model/Study");

module.exports = {
    studyAdd : (req,res)=>{
        const title = req.body.title;
        const intro = req.body.intro;
        const join_intro = req.body.join_intro;
        const host_id = JSON.parse(localStorage.getItem("user")).idx;
        const category = req.body.category;
        const profile_img = req.body.profile_img;
        const banner_img = req.body.banner_img;
        const birth = req.body.birth;
        const gender = req.body.gender;
        const light_theme = req.body.light_theme;
        const dark_theme = req.body.dark_theme;
        const birth = req.body.birth;
        const arragement = req.body.arragement;
        const sort = req.body.sort;
        const order = req.body.order;
        const params = [title,intro,join_intro,host_id,category,profile_img,banner_img,birth,gender,light_theme,dark_theme,arragement,sort,order];
        Study.setStudyAddProccess(params).them((result)=>{
            res.send(result);
        })
    }
};