var express = require('express');
var router = express.Router();

//增加引用函式
const post = require('./utility/post');
var sd = require('silly-datetime');
//---------------------------
// 引用multer外掛
//---------------------------
const multer  = require('multer');

// 宣告上傳存放空間及檔名更改
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/post');
    },

    filename: function (req, file, cb) {
        cb(null, Date.now()+"--"+file.originalname);    
    }   
})

// 產生multer的上傳物件
var maxSize=2000*2000;  //設定最大可接受圖片大小(1M)

var upload = multer({
    storage:storage
})
//---------------------------
//接收POST請求
router.post('/',upload.single('img'),function(req, res, next) {
     // 如果有選擇圖片
     if (typeof req.file != 'undefined'){
        // 傳入檔案不可超過maxSize
        if(req.file.size > maxSize){
            res.render('fileSizeError');  //圖片過大
            return;
        }                      
    }  
    var memno = req.session.memno;           //取得產品編號
    var posttypeno = req.body.posttypeno;       //取得產品名稱
    var posttime =sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'); //取得型態編號    
    var title = req.body.title;
    var content = req.body.content;
    var img ;

    // 如果有選擇圖片
    if (typeof(req.file) != 'undefined'){
        img=req.file.filename;   //取得上傳照片名稱
    }
    console.log("****************");
    console.log(memno);
    console.log(posttypeno);
    console.log(posttime);
    console.log(title);
    console.log(content);
    console.log(img);
    console.log("****************");
    // 建立一個新資料物件
    var newData={
      memno:memno,
      posttypeno:posttypeno,
      posttime:posttime,
      title:title,
      content:content,
      img:img
    } 
    
    post.add(newData).then(d => {
        if (d==0){
            res.render('addSuccessT');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;