var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {
    var memno = req.body.memno;                 //取得帳號
    var password = req.body.password;     //取得密碼
    console.log(memno,password);

    user.manager_login(memno, password).then(d => {
        if (d==null){
            req.session.gmemno = null;
            res.render('loginFail');  //傳至登入失敗
        }else{
            req.session.gmemno = d.memno;
            res.render('homepage2',{gmemno:d.memno});   //導向使用者
        
        }  
    })
});

module.exports = router;