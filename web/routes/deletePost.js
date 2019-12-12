var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const post = require('./utility/post');

//接收GET請求
router.get('/:postno', function(req, res, next) {
    var memno = req.session.memno;
    var postno = req.params.postno;
    var invitedmemno=req.session.memno;
    var invitedmemno2=req.session.memno;
    var postmemno=req.session.memno;
    var postmemno2=req.session.memno;
    var memno10=req.session.memno;
    var memno11=req.session.memno;
    post.deletePostForm(memno,postno,invitedmemno,invitedmemno2,postmemno,postmemno2,memno10,memno11).then(d => {
        if (d==null){     
            res.render('notfound');  
        }else{
            res.render('deletePost',{results:d});   //導向使用者
        } 
    })
});

//匯出
module.exports = router;