var express = require('express');
var router = express.Router();


const user = require('./utility/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  var keyword=req.query.keyword;
  user.search4M(keyword).then(data => {
    console.log(data)
    if(data==null){
        res.render('error');  //導向錯誤頁面
    }else if(data.data1.length > 0){
      res.render('eactsearchM', {results:data});  //將資料傳給顯示頁面
    }else{
        res.render('notFound');  //導向找不到頁面
    } 
  })
});

//匯出
module.exports = router;