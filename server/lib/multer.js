const path = require('path');
const multer = require('multer');

const upload = multer({
    storage : multer.diskStorage({
        destination : function(req,file,cb){
            cb(null,'public/upload/');
            // cb(null,'../www/upload/');
        },
        filename : function(req,file,cb){
            cb(null,new Date().valueOf() + path.extname(file.originalname))
        }
    }),
    limits:{
        fileSize : 5*1024*1024
    }
});

module.exports = upload;