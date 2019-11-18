var express = require('express');
var router = express.Router();

//增加引用函式
const orbit = require('./utility/orbit');
var moment = require('moment');
//接收POST請求
router.post('/', function(req, res, next) {
    var orbitrecordno = req.body.orbitRecordNo;                 
    var orbitdatetime = moment(req.body.orbitDatetime).format("YYYY-MM-DD hh:mm:ss a");          
    var lat = req.body.lat; 
    var lng = req.body.lng; 
    
    console.log(orbitrecordno)
    console.log(orbitdatetime)
    console.log(lat)
    console.log(lng)
    // 建立一個新資料物件
    var newData={
        orbitrecordno:orbitrecordno,
        orbitdatetime:orbitdatetime,
        lat:lat,
        lng:lng
    } 
    
    orbit.orbitAdd(newData).then(d => {
        if (d==0){
            res.send('0');  //傳至成功頁面
        }else{
            res.send('1');     //導向錯誤頁面
        }  
    })
});

module.exports = router;