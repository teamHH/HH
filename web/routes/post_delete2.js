var express = require('express');
var router = express.Router();

//增加引用函式
const post = require('./utility/post');

//接收POST請求
router.post('/', function(req, res, next) {
    var postno = req.body.postno;   //取得產品編號
    post.deletePost(postno).then(d => {
        console.log(d);
        if(d>=0){
            res.render('removeSuccess2T', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail2');     //導向錯誤頁面
        }
    })    
});

module.exports = router;