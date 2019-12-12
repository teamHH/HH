var express = require('express');
var router = express.Router();

//增加引用函式
const activity = require('./utility/activity');
var moment = require('moment');
//接收GET請求
router.get('/', function(req, res, next) {
  activity.query3().then(data => {
    if(data==null){
        res.render('error');  //導向錯誤頁面
    }else if(data.data1.length > 0){
        for(var i =0; i<data.data2.length;i++){
            data.data2[i].sacttime=moment(data.data2[i].sacttime).format("YYYY-MM-DD");
        }  
        res.render('joinActivity2', {results:data});  //將資料傳給顯示頁面
    }else{
        res.render('notFound');  //導向找不到頁面
    }  
  })
});
module.exports = router