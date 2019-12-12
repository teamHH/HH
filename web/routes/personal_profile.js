var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const personal = require('./utility/personal');

//接收GET請求
router.get('/', function(req, res, next) {
    var memno=req.session.memno;
    var invitedmemno=req.session.memno;
    var invitedmemno2=req.session.memno;
    var postmemno=req.session.memno;
    var postmemno2=req.session.memno;
    var memno2=req.session.memno;
    var memno3=req.session.memno;
    var memno_1=req.session.memno;
    var memno4=req.session.memno;
    var memno5=req.session.memno;
    var memno10=req.session.memno;
    var memno11=req.session.memno;
    var memno12=req.session.memno;
    var hour =0;
    var minute=0;
    var second=0;
personal.query(memno,invitedmemno,invitedmemno2,postmemno,postmemno2,memno2,memno3,memno_1,memno4,memno5,memno10,memno11,memno12).then(data => {
    if (data==null){
        res.render('error');  //導向錯誤頁面
    }else if(data.msg.length >= 0){
        data.member.birthday=moment(data.member.birthday).format("YYYY-MM-DD")
        for(var i =0; i<data.msg.length;i++){
            data.msg[i].posttime=moment(data.msg[i].posttime).format("LLL");
        }
        for(var i =0; i<data.orbit.length;i++){
            data.orbit[i].continuetime=((data.orbit[i].sportendtime-data.orbit[i].sportstarttime)/1000);
            if((data.orbit[i].continuetime/60)<0){
                if(data.orbit[i].continuetime<10){
                    data.orbit[i].continuetime = '00:00:0'+ data.orbit[i].continuetime;
                }else{
                    data.orbit[i].continuetime = '00:00:'+ data.orbit[i].continuetime;
                }
            }else{
                if((data.orbit[i].continuetime/3600)<=0){
                    minute = Math.floor(data.orbit[i].continuetime/60);
                    second = data.orbit[i].continuetime - minute*60;
                    if(minute<10){
                        if(second<10){
                            data.orbit[i].continuetime = '00:' + '0' + minute + ':0' + second;
                        }else{
                            data.orbit[i].continuetime = '00:' + '0' + minute + ':' + second;
                        }
                    }else{
                        if(second<10){
                            data.orbit[i].continuetime = '00:' + minute + ':0' + second;
                        }else{
                            data.orbit[i].continuetime = '00:' + minute + ':' + second;
                        }
                        
                    }
                }else{
                    hour = Math.floor(data.orbit[i].continuetime/3600);
                    minute = Math.floor((data.orbit[i].continuetime - hour*3600)/60);
                    second = data.orbit[i].continuetime-hour*3600-minute*60;
                    data.orbit[i].continuetime = hour + ':' + minute + ':' + second;
                    if(hour<10){
                        if(minute<10){
                            if(second<10){
                                data.orbit[i].continuetime = '0' + hour + ':0' + minute + ':0' + second;
                            }else{
                                data.orbit[i].continuetime = '0' + hour + ':0' + minute + ':' + second;
                            }
                        }else{
                            if(second<10){
                                data.orbit[i].continuetime = '0' + hour + ':' + minute + ':0' + second;
                            }else{
                                data.orbit[i].continuetime = '0' + hour + ':' + minute + ':' + second;
                            }
                        }
                    }else{
                        if(minute<10){
                            if(second<10){
                                data.orbit[i].continuetime = hour + ':0' + minute + ':0' + second;
                            }else{
                                data.orbit[i].continuetime = hour + ':0' + minute + ':' + second;
                            }
                        }else{
                            if(second<10){
                                data.orbit[i].continuetime = hour + ':' + minute + ':0' + second;
                            }else{
                                data.orbit[i].continuetime = hour + ':' + minute + ':' + second;
                            }
                        }
                    }
                }
            }
            data.orbit[i].sportstarttime=moment(data.orbit[i].sportstarttime).format("YYYY-MM-DD hh:mm:ss a");
            data.orbit[i].sportendtime=moment(data.orbit[i].sportendtime).format("YYYY-MM-DD hh:mm:ss a");
            console.log(data.orbit[i].sportendtime);
        } 
        res.render('personal_profile', {results:data});  //將資料傳給顯示頁面
    }else{
        res.render('notFound');  //導向找不到頁面  
    }  
})
});
module.exports = router;