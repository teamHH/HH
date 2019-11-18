var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const personal = require('./utility/personal');

//接收GET請求
router.get('/', function(req, res, next) {
    var memno = req.session.memno;
    var invitedmemno=req.session.memno;
    var invitedmemno2=req.session.memno;
    var postmemno=req.session.memno;
    var postmemno2=req.session.memno;
    personal.editBio(memno,invitedmemno,invitedmemno2,postmemno,postmemno2).then(d => {
        if (d==null){     
            res.render('notfound');  
        }else{
            d.birthday=moment(d.birthday).format("YYYY-MM-DD")
            res.render('editBio',{results:d});   //導向使用者
        } 
    })
});

//匯出
module.exports = router;