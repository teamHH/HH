var express = require('express');
var router = express.Router();

//增加引用函式
const orbit = require('./utility/orbit');
var moment = require('moment');
//接收POST請求
router.post('/', function(req, res, next) {
    var memno= req.body.userId
    var sportstarttime= moment(req.body.sportStartTime).format("YYYY-MM-DD hh:mm:ss");
    
  
    orbit.returnNo(memno,sportstarttime).then(d => {
        if (d==null){
            res.send('1');
        }else{   
            res.send(d);
        }  
    })
});

module.exports = router;