var express = require('express');
var router = express.Router();

//增加引用函式
const activity = require('./utility/activity');

//接收POST請求
router.post('/', function(req, res, next) {
    var memno = req.body.memno;           //取得產品編號
    var sactno = req.body.sactno;
    var score=req.body.score;
    var memno2=req.session.memno
    console.log("****************");
    console.log(sactno);
    console.log(memno);
    console.log(score);
    console.log(memno2);
    console.log("****************");
    // 建立一個新資料物件
    var newData={
      sactno:sactno,
      memno:memno,
      score:score,
      memno2:memno2
    } 
    
    activity.addscore(newData).then(d => {
        if (d==0){
            res.render('addSuccessJ');  //傳至成功頁面
        }else{
            res.render('addrepeat');     //導向錯誤頁面
        }  
    })
});

module.exports = router;