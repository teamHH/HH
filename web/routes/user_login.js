var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {
    var id = req.body.id;                 //取得帳號
    var password = req.body.password;
    user.login(id,password).then(d => {
        if (d==null){          
            res.render('loginFail');  //傳至登入失敗
        }else{
            req.session.memno = d.memno;
            req.session.displayname = d.displayname;
            res.render('loginSuccess',{displayname:d.displayname});   //導向使用者
        }  
    })
});

module.exports = router;