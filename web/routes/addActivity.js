var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const activity = require('./utility/activity');

//接收GET請求
router.get('/', function(req, res, next) {
    var invitedmemno = req.session.memno;   
    var invitedmemno2 = req.session.memno;
    var postmemno = req.session.memno;  
    var postmemno2 = req.session.memno;
    var memno10=req.session.memno;
    var memno11=req.session.memno;
    console.log(invitedmemno,invitedmemno2)
    activity.query2(invitedmemno,invitedmemno2,postmemno,postmemno2,memno10,memno11).then(data => {
        if (data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            res.render('notFound');  //導向找不到頁面                
        }else{
            res.render('addActivity', {results:data});  //將資料傳給顯示頁面
        }  
    })
});

module.exports = router;