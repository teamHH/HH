var express = require('express');
var router = express.Router();

//增加引用函式
const friend = require('./utility/friend');

//接收POST請求
router.post('/', function(req, res, next) {
    var memno_1 = req.session.memno;           
    var memno_2 = req.body.memno; 
    var invitememno = req.body.memno;
    var invitedmemno = req.session.memno;     
    console.log("****************");
    console.log(memno_1);
    console.log(memno_2);
    console.log(invitememno);
    console.log(invitedmemno);
    console.log("****************");
    // 建立一個新資料物件
    var newData={
      memno_1:memno_1,
      memno_2:memno_2,
    } 
    var memno_1 = req.body.memno;           
    var memno_2 = req.session.memno; 
    var newData1={
        memno_1:memno_1,
        memno_2:memno_2,
      } 
    friend.addanddelete(newData,newData1,invitememno,invitedmemno).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;