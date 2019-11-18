var express = require('express');
var router = express.Router();

//增加引用函式
const activity = require('./utility/activity');
//接收GET請求
router.get('/', function(req, res, next) {
  var invitedmemno=req.session.memno
  var invitedmemno2=req.session.memno
  var postmemno=req.session.memno
  var postmemno2=req.session.memno
  activity.query(invitedmemno,invitedmemno2,postmemno,postmemno2).then(data => {
    if(data==null){
        res.render('error');  //導向錯誤頁面
    }else if(data.data1.length > 0){
        res.render('joinActivity2', {results:data});  //將資料傳給顯示頁面
    }else{
        res.render('notFound');  //導向找不到頁面
    }  
  })
});
module.exports = router