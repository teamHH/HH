var express = require('express');
var router = express.Router();


const user = require('./utility/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  var keyword=req.query.keyword;
  var invitedmemno = req.session.memno;
  var invitedmemno2 = req.session.memno;
  var postmemno= req.session.memno;
  var postmemno2= req.session.memno;
  var memno10=req.session.memno;
  var memno11=req.session.memno;
  user.search4(keyword,invitedmemno,invitedmemno2,postmemno,postmemno2,memno10,memno11).then(data => {
    console.log(data)
    if(data==null){
        res.render('error');  //導向錯誤頁面
    }else if(data.data1.length > 0){ 
      res.render('eactSearch', {results:data});  //將資料傳給顯示頁面
    }else{
        res.render('notFound');  //導向找不到頁面
    } 
  })
});

//匯出
module.exports = router;