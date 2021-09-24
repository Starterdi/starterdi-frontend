const pool = require('../config/db');

module.exports = {
    setStudyMakeProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = `INSERT INTO Study(title,intro,join_intro,host_id,category,profile_img,banner_img,birth,gender,light_theme,dark_theme,arragement,sort,order) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                console.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    }
}