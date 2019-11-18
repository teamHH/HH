var express = require('express');
var router = express.Router();

//增加引用函式
const activity = require('./utility/activity');

//接收POST請求
router.post('/', function(req, res, next) {
    var eactivity = req.body.eactivity;           //取得產品編號
    var eacttypeno = req.body.eacttypeno;           //取得型態編號    
    var econtent = req.body.econtent;
    console.log("****************");
    console.log(eactivity);
    console.log(eacttypeno);
    console.log(econtent);
    console.log("****************");
    // 建立一個新資料物件
    var newData={
        eactivity:eactivity,
        eacttypeno:eacttypeno,
        econtent:econtent
    } 
    
    activity.eadd(newData).then(d => {
        if (d==0){
            res.render('addSuccessmanager');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;