var express = require('express');
var router = express.Router();

//增加引用函式

const post = require('./utility/post');

//接收GET請求
router.post('/', function(req, res, next) {
    var comno = req.body.comno;
    
    console.log(comno);
    post.deleteComment(comno).then(d => {
        if(d>=0){
            res.render('removeSuccessT', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })
});

//匯出
module.exports = router;