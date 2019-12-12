var express = require('express');
var router = express.Router();

const user = require('./utility/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  var invitedmemno = req.session.memno;
  var invitedmemno2 = req.session.memno;
  var postmemno= req.session.memno;
  var postmemno2= req.session.memno;
  var memno10=req.session.memno;
  var memno11=req.session.memno;
  user.homepage(invitedmemno,invitedmemno2,postmemno,postmemno2,memno10,memno11).then(d => {
    if (d==null){     
        res.render('notfound');  
    }else{
        res.render('homepage',{results:d});   //導向使用者
    } 
  })
});

//匯出
module.exports = router;