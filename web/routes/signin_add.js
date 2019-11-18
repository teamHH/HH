var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');
var sd = require('silly-datetime');
//接收POST請求
router.post('/', function(req, res, next) {
    var memno = req.session.memno;           //取得產品編號
    var signdate =sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'); //取得型態編號    
    console.log("****************");
    console.log(signdate);
    console.log(memno);
    console.log("****************");
    // 建立一個新資料物件
    var newData={
      signdate:signdate,
      memno:memno
    } 
    
    user.signin(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addrepeat');     //導向錯誤頁面
        }  
    })
});

module.exports = router;