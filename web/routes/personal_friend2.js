var express = require('express');
var router = express.Router();

//增加引用函式
const friend = require('./utility/friend');
var moment = require('moment');
//接收GET請求
router.get('/:memno2', function(req, res, next) {
    var memno=req.params.memno2;
    var memno2=req.params.memno2;
    var memno3=req.params.memno2;
    var memno4=req.params.memno2;
    var memno5=req.params.memno2;
    friend.query(memno,memno_1,memno_2,memno2,memno3,memno4,memno5,invitedmemno,invitedmemno2,postmemno,postmemno2).then(data => {
        if (data==null){
            res.render('error');  //導向錯誤頁面
        }else {
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
            res.render('personal_friend', {results:data});  //將資料傳給顯示頁面
        }
    })
});
module.exports = router;