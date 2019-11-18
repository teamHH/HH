var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {
    var id = req.body.id;                 //取得帳號
    var password = req.body.password;
    var invitedmemno = req.body.id;
    var invitedmemno2 = req.body.id;
    var postmemno= req.body.id;
    var postmemno2= req.body.id; 
    user.login(id,password,invitedmemno,invitedmemno2,postmemno,postmemno2).then(d => {
        if (d==null){
            req.session.memno = null;
            req.session.displayname = null;           
            res.render('loginFail');  //傳至登入失敗
        }else{
            req.session.memno = d.memno;
            req.session.displayname = d.displayname;
            res.render('homepage',{results:d});   //導向使用者
        }  
    })
});

module.exports = router;