var express = require('express');
var router = express.Router();

//增加引用函式
const friend = require('./utility/friend');


//接收POST請求
router.post('/',function(req, res, next) {
    var invitememno=req.session.memno;
    var invitedmemno = req.body.invitedmemno;           //取得產品編號


    console.log("****************");
    console.log(invitememno);
    console.log(invitedmemno);

    console.log("****************");
    // 建立一個新資料物件
    var newData={
      invitememno:invitememno,
      invitedmemno:invitedmemno
    } 
    
    friend.invite(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;