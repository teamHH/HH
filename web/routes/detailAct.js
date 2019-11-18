var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const activity = require('./utility/activity');

//接收GET請求
router.get('/:sactno', function(req, res, next) {
    var sactno = req.params.sactno;   //取出參數
    var sactno2 = req.params.sactno;
    var invitedmemno=req.session.memno;
    var invitedmemno2=req.session.memno;
    var postmemno= req.session.memno;
    var postmemno2= req.session.memno;
    console.log(sactno,sactno2)
    activity.one(sactno,sactno2,invitedmemno,invitedmemno2,postmemno,postmemno2).then(data => {
        if (data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            res.render('notFound');  //導向找不到頁面                
        }else{
            data.sa.sacttime=moment(data.sa.sacttime).format("YYYY-MM-DD ,h:mm:ss a")
            if(data.score.total==null){
                data.score.total=0;
            }else{
                data.score.total=data.score.total;
            }
            console.log(data);
            res.render('detailAct', {results:data});  //將資料傳給顯示頁面
        }  
    })
});

module.exports = router;