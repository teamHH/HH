var express = require('express');
var router = express.Router();

//增加引用函式
const post = require('./utility/post');

//接收POST請求
router.post('/', function(req, res, next) {
    var postno = req.body.postno;   //取得產品編號
    console.log(postno);
    post.deletePost(postno).then(d => {
        console.log(d);
        if(d>=0){
            res.render('removeSuccessP', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })    
});

module.exports = router;