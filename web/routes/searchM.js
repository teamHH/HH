var express = require('express');
var router = express.Router();

var moment = require('moment');
const user = require('./utility/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  var memno = req.session.gmemno;
  var keyword=req.query.keyword;
  user.searchM(memno,keyword).then(data => {
    if(data==null){
        res.render('error');  //導向錯誤頁面
    }else if(data.posts.length > 0){
        for(var i =0; i<data.posts.length;i++){
          data.posts[i].posttime=moment(data.posts[i].posttime).format("LLL");
        }  
        res.render('totPost2', {results:data});  //將資料傳給顯示頁面
    }else{
        res.render('notFound');  //導向找不到頁面
    } 
  })
});

//匯出
module.exports = router;