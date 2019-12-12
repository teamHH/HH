var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const user = require('./utility/user');

//接收GET請求
router.get('/:memno_2', function(req, res, next) {
    var memno = req.session.memno;
    var memno_2 = req.params.memno_2;
    var invitedmemno=req.session.memno;
    var invitedmemno2=req.session.memno;
    var postmemno=req.session.memno;
    var postmemno2=req.session.memno;
    var memno10=req.session.memno;
    var memno11=req.session.memno;
    user.deleteFriendForm(memno,memno_2,invitedmemno,invitedmemno2,postmemno,postmemno2,memno10,memno11).then(d => {
        if (d==null){     
            res.render('notfound');  
        }else{
            res.render('deleteFriend',{results:d});   //導向使用者
        } 
    })
});

//匯出
module.exports = router;