var express = require('express');
var router = express.Router();

//增加引用函式
const personal = require('./utility/personal');
var moment = require('moment');
// 引用multer外掛
//---------------------------
const multer  = require('multer');

// 宣告上傳存放空間及檔名更改
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/user');
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
    var memno = req.session.memno;   
    var img;
    if (typeof(req.file) != 'undefined'){
        img=req.file.filename;   //取得上傳照片名稱
    }
    console.log(img)
    var newData={
        memno:memno,                   //產品編號
        displayname:req.body.displayname,     //取得產品名稱
        introduction:req.body.introduction, //取得價格
        birthday:moment(req.body.birthday).format("YYYY-MM-DD "),//取得盤點日期
        img:img
    } 
    console.log(newData);
    personal.user_update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;