const pool = require('../config/db');

module.exports = {
    setLoginProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = `SELECT * FROM User WHERE user_id = ? AND password = ?`;
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                });
            })
        })
    },

    setLoginIdCheck: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = `SELECT * FROM User WHERE user_id = ?`;
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                });
            })
        });
    },

    setLoginEmailCheck: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = `SELECT * FROM User WHERE user_email = ?`;
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                });
            })
        });
    },

    setJoinProccess: (params)=>{
        return new Promise((res,rej)=>{
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                const sql = `INSERT INTO User(user_name,user_email,user_id,password,profile,profile_img,gender,birth) VALUES(?,?,?,?,?,?,?,?)`;
                conn.query(sql,params,(err,rows,fileds)=>{
                    if(err) rej(err);
                    else res(rows);
                    conn.release();
                });
            });
        });
    }
}