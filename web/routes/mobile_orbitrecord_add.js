var express = require('express');
var router = express.Router();

//增加引用函式
const orbit = require('./utility/orbit');
var moment = require('moment');
//接收POST請求
router.post('/', function(req, res, next) {
    var orbitrecordno=req.body.orbitRecordNo;
    var otypeno = req.body.sportType;                 
    var memno = req.body.userId;              
    var sportstarttime=moment(req.body.sportStartTime).format("YYYY-MM-DD hh:mm:ss a");
    console.log(orbitrecordno);
    console.log(otypeno);
    console.log(memno);
    console.log(sportstarttime);
    // 建立一個新資料物件
    var newData={
        orbitrecordno:orbitrecordno,
        otypeno:otypeno,
        memno:memno,
        sportstarttime:sportstarttime
    } 
    
    orbit.orbitrecordAdd(newData).then(d => {
        if (d==0){
            res.send('0');  //傳至成功頁面
        }else{
            res.send('1');     //導向錯誤頁面
        }  
    })
});

module.exports = router;