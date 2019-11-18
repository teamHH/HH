var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {
    var displayname = req.body.displayname;                  //取得產品編號
    var memno = req.body.memno;              //取得產品名稱
    var mempassword = req.body.mempassword;          //取得價格
                                            //取得盤點日期

    // 建立一個新資料物件
    var newData={
        displayname:displayname,
        memno:memno,
        mempassword:mempassword
    } 
    
    user.add(newData).then(d => {
        if (d==0){
            res.render('userAddSuccess');  //傳至成功頁面
        }else{
            res.render('userAddFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;