var express = require('express');
var router = express.Router();

//增加引用函式
const comments = require('./utility/comments');
var sd = require('silly-datetime');

//接收POST請求
router.post('/',function(req, res, next) {
    var postno=req.body.postno;
    var memno = req.session.memno;  
    var postmemno=req.body.memno;
    var comtime =sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'); //取得型態編號    
    var msg = req.body.msg;
    var content='在你的文章留言'
    console.log("****************");
    console.log(postno);
    console.log(memno);
    console.log(comtime);
    console.log(msg);
    console.log(content);
    console.log(postmemno);
    console.log("****************");
    // 建立一個新資料物件
    var newData={
      postno:postno,
      memno:memno,
      comtime:comtime,
      msg:msg,
      content:content,
      postmemno:postmemno
    } 
    
    comments.add(newData).then(d => {
        if (d==0){
            res.render('addSuccessT');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;