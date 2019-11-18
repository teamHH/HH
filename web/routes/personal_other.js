var express = require('express');
var router = express.Router();

//增加引用函式
const friend = require('./utility/friend');
var moment = require('moment');
//接收GET請求
router.get('/:memno2', function(req, res, next) {
    var memno=req.params.memno2;
    var memno2=req.params.memno2;
    var invitedmemno = req.session.memno;
    var invitedmemno2 = req.session.memno;
    var postmemno= req.session.memno;
    var postmemno2= req.session.memno;
    console.log('************');
    console.log(memno);
    friend.query2(memno,memno2,invitedmemno,invitedmemno2,postmemno,postmemno2).then(data => {
        console.log(data)
        if (data==null){
            res.render('error');  //導向錯誤頁面
        }else{
            for(var i =0; i<data.msg.length;i++){
                data.msg[i].posttime=moment(data.msg[i].posttime).format("LLL");
            }
            res.render('personal_other', {results:data});  //將資料傳給顯示頁面
        }
    })
});
module.exports = router;