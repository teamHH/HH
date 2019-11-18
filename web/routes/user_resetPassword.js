var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {                
    var memno=req.session.memno
    var newData={
        memno:memno,
        mempassword:req.body.password
    } 
    console.log(newData);
    user.update(newData).then(d => {
        console.log(d);
        if (d>=0){
            res.render('resetSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;