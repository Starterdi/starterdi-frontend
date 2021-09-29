const pool = require('../config/db');

module.exports = {
    setStudyAddProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'INSERT INTO Study(`title`,`intro`,`join_intro`,`host_id`,`category`,`profile_img`,`banner_img`,`birth`,`gender`,`light_theme`,`dark_theme`,`arrangement`,`sort`,`order`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    },

    setStudyListLoadProccess: ()=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'SELECT idx, banner_img, title, category, hit, good_num FROM Study ORDER BY idx DESC';
                conn.query(sql,[],(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    },

    setStudyLoadProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'SELECT * FROM Study WHERE idx = ?';
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    }
}