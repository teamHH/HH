var express = require('express');
var router = express.Router();

//增加引用函式
const friend = require('./utility/friend');

//接收POST請求
router.post('/', function(req, res, next) {
    var invitememno = req.body.memno;
    var invitedmemno = req.session.memno;   //取得產品編號
    console.log(invitememno,invitedmemno);
    friend.invitedelete(invitememno,invitedmemno).then(d => {
        console.log(d);
        if(d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })    
});

module.exports = router;