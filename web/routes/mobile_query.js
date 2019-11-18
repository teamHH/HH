var express = require('express');
var router = express.Router();

//增加引用函式
const orbit = require('./utility/orbit');

//接收POST請求
router.post('/', function(req, res, next) {
    var memno=req.body.userId;
    console.log(memno)

    orbit.query(memno).then(d => {
        if (d==null){
            res.send('1')
        }else{   
            res.send(d)
        }  
    })
});

module.exports = router;