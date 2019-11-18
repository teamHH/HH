var express = require('express');
var router = express.Router();

//增加引用函式
const activity = require('./utility/activity');

//接收POST請求
router.post('/', function(req, res, next) {
    var sactivity = req.body.sactivity;           //取得產品編號
    var sacttime = req.body.sacttime;       //取得產品名稱
    var sacttypeno = req.body.sacttypeno;           //取得型態編號    
    var location = req.body.location;
    var scontent = req.body.scontent;
    var memno = req.session.memno;
    console.log("****************");
    console.log(sactivity);
    console.log(sacttime);
    console.log(sacttypeno);
    console.log(location);
    console.log(scontent);
    console.log(memno);
    console.log("****************");
    // 建立一個新資料物件
    var newData={
      sactivity:sactivity,
      sacttime:sacttime,
      sacttypeno:sacttypeno,
      location:location,
      scontent:scontent,
      memno:memno
    } 
    
    activity.add(newData).then(d => {
        if (d==0){
            res.render('addSuccessJ');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;