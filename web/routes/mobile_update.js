var express = require('express');
var router = express.Router();

//增加引用函式
const orbit = require('./utility/orbit');
var moment = require('moment');
//接收POST請求
router.post('/', function(req, res, next) {
    var orbitrecordno = req.body.orbitRecordNo;  
    var sportendtime =  moment(req.body.sportEndTime).format("YYYY-MM-DD hh:mm:ss a");    
    var sportdistance =  req.body.sportDistance;
    var avgminkm =  req.body.avgMinKm;
   // var avgminkm =  req.body.avgminkm  ;
    console.log (orbitrecordno);
    console.log (sportendtime);
    console.log (sportdistance);
   // console.log (avgminkm);
    var newData={
        sportendtime:sportendtime,//取得價格
        orbitrecordno:orbitrecordno,
        sportdistance:sportdistance,
        avgminkm:avgminkm
    } 
    
    orbit.update(newData).then(d => {
        if (d>=0){
            res.send('0');  //傳至成功頁面
        }else{
            res.send('1');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;