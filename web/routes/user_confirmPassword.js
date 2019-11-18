var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {                
    var memno=req.session.memno;
    var password=req.body.password;
    console.log(memno);
    console.log(password);

    user.query(memno,password).then(d => {
        console.log(d);
        if (d==null){
            res.render('resetFail');  //傳至登入失敗
        }else{
            res.render('resetPassword');   //導向使用者
        }  
    })
});

module.exports = router;