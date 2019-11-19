var express = require('express');
var router = express.Router();

//增加引用函式
const friend = require('./utility/friend');

//接收GET請求
router.get('/:commemno',function(req, res, next) {
   var memno1=req.session.memno;
   var memno2=req.params.commemno;
    console.log(memno1,memno2);
    friend.judge(memno1,memno2).then(data => {
        if (data==1){
            res.redirect('/personal_friend2/'+memno2); 
        }else {
            res.redirect('/personal_other2/'+memno2);  //將資料傳給顯示頁面
        }
    })
});
module.exports = router;