var express = require('express');
var router = express.Router();

//增加引用函式
const activity = require('./utility/activity');
var moment = require('moment');
//接收POST請求
router.post('/',function(req, res, next) {
    var sactno = req.body.sactno;   //取得產品編號
    console.log(sactno)
    var newData={
        sactno: sactno,
        sacttime: moment(req.body.sacttime).format("YYYY-MM-DD hh:mm:ss"),
        location:req.body.location,
        sacttypeno:req.body.sacttypeno,
        scontent:req.body.scontent
    } 
    console.log(newData)
    activity.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccessP', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;