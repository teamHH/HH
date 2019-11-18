var express = require('express');
var router = express.Router();

//增加引用函式
const activity = require('./utility/activity');

//接收POST請求
router.post('/', function(req, res, next) {
    var sactno = req.body.sactno;   //取得產品編號
    console.log(sactno);
    activity.deleteAct2(sactno).then(d => {
        if(d>=0){
            res.render('removeSuccess2', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail2');     //導向錯誤頁面
        }
    })    
});

module.exports = router;