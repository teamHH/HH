var express = require('express');
var router = express.Router();

//增加引用函式
const comments = require('./utility/comments');

//接收POST請求
router.post('/', function(req, res, next) {
    var memno = req.session.memno;           //取得產品編號
    var postno = req.body.postno;
    var content="幫你的文章點讚";
    var postmemno=req.body.memno;
    // 建立一個新資料物件
    var newData={
      memno:memno,
      postno:postno,
      content:content,
      postmemno:postmemno
    } 
    comments.addlike(newData).then(d => {
        if (d==0){
            res.render('addSuccessT');  //傳至成功頁面
        }else{
            res.render('backSuccessT');     //導向錯誤頁面
        }  
    })
});

module.exports = router;