var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const activity = require('./utility/activity');

//接收GET請求
router.get('/:sactno', function(req, res, next) {
    var sactno = req.params.sactno;
    var invitedmemno=req.session.memno;
    var invitedmemno2=req.session.memno;
    var postmemno=req.session.memno;
    var postmemno2=req.session.memno;
    var memno10=req.session.memno;
    var memno11=req.session.memno;
    activity.editAct(sactno,invitedmemno,invitedmemno2,postmemno,postmemno2,memno10,memno11).then(d => {
        if (d==null){     
            res.render('notfound');  
        }else{
            d.sacttime=moment(d.sacttime).format("YYYY-MM-DD")
            res.render('editAct',{results:d});   //導向使用者
        } 
    })
});

//匯出
module.exports = router;