var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.get('/', function(req, res, next) {
    req.session.memno = null;
    req.session.displayname = null;           
    res.render('index', {name:'已登出'});  //傳至登出    
});

module.exports = router;