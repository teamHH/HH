var express = require('express');
var router = express.Router();

//增加引用函式
const orbit = require('./utility/orbit');

//接收POST請求
router.post('/', function(req, res, next) {
    var id = req.body.userId;                 //取得帳號
    var password = req.body.password;     //取得密碼

    console.log(12);
    console.log(id);
    console.log(password);

    orbit.login(id,password).then(d => {
        if (d==null){
            res.send("1");
        }else{   
            res.send(d);
        }  
    })
});

module.exports = router;              