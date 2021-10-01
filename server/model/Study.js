const pool = require('../config/db');

module.exports = {
    setStudyAddProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'INSERT INTO Study(`title`,`intro`,`join_intro`,`host_id`,`category`,`profile_img`,`banner_img`,`birth`,`gender`,`light_theme`,`dark_theme`,`arrangement`,`sort`,`order`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
                const sql2 = 'INSERT INTO User_study(`study_idx`,`user_idx`,`status`) VALUES((SELECT LAST_INSERT_ID(`idx`) AS idx FROM Study ORDER BY idx DESC LIMIT 1),?,"allowed");';
                const sql3 = 'INSERT INTO Study_profile(`user_idx`,`study_idx`,`user_name`,`profile`,`profile_img`) VALUES(?,(SELECT LAST_INSERT_ID(`idx`) AS idx FROM Study ORDER BY idx DESC LIMIT 1) ,?,?,?);';
                conn.query(sql+sql2+sql3,params,(err,rows,fileds)=>{
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
                const sql = 'SELECT idx, banner_img, title, category, hit, good FROM Study ORDER BY idx DESC';
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
                const sql = 'SELECT * FROM Study WHERE idx = ?;';
                const sql2 = 'SELECT U.* FROM User AS U, User_study AS US WHERE US.study_idx = ? AND U.idx = US.user_idx;'
                const sql3 = 'SELECT * FROM Good_study WHERE study_idx = ? AND user_idx = ?;';
                conn.query(sql+sql2+sql3,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    },

    setStudyHitProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'UPDATE Study SET `hit` = `hit`+1 WHERE idx = ?';
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    },

    setStudyUserInfoProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'SELECT U.* FROM User AS U, User_study AS US WHERE US.study_idx = ? AND U.idx = US.user_idx;';
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                });
            });
        });
    },

    setStudyUserAddProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'INSERT INTO User_study(`study_idx`,`user_idx`,`status`) VALUES(?,?,?)';
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    },

    setStudyUserGoodAddProccess:(params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'INSERT INTO Good_study(`study_idx`,`user_idx`) VALUES(?,?);';
                const sql2 = 'UPDATE Study SET good = good + 1 WHERE idx = ?';
                conn.query(sql+sql2,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    },

    setStudyUserGoodDesProccess:(params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = 'DELETE FROM Good_study WHERE study_idx = ? AND user_idx = ?;';
                const sql2 = 'UPDATE Study SET good = good - 1 WHERE idx = ?;';
                conn.query(sql+sql2,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                })
            })
        })
    },
}