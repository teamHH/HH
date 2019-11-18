'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');


var query = async function(memno,invitedmemno,invitedmemno2,postmemno,postmemno2,memno2,memno3,memno_1,memno4,memno5){
    var results={};
    await sql('SELECT * FROM member where memno=$1',[memno])
        .then((data) => {
            results.member = data.rows[0];   
        }, (error) => {
            results,member = [];
        });
     await sql('SELECT b.displayname,b.img,b.memno FROM invite a ,member b where a.invitememno=b.memno and a.invitedmemno=$1',[invitedmemno])
        .then((data) => {
            results.invite = data.rows;  
        }, (error) => {
            results.invite = [];
    });
    await sql('select a.*,b.displayname,b.img from notice a, member b where a.memno=b.memno and a.postmemno=$1 ORDER BY noticeno desc LIMIT 5 ',[postmemno])
        .then((data) => {
            results.notice = data.rows;  
        }, (error) => {
            results.notice = [];
        });
    await sql('SELECT count(*)as total FROM invite where invitedmemno=$1 ',[invitedmemno2])
        .then((data) => {
            if(data!=null){
                results.total = data.rows[0];
            }else{
                results.total = 0;
            }
        }, (error) => {
            results.total = [];
    });
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1 ',[postmemno2])
        .then((data) => {
            if(data!=null){
                results.count = data.rows[0];
            }else{
                results.count = 0;
            }
        }, (error) => {
            results.count = [];
    });
    await sql('SELECT * from sactivity where memno=$1 ',[memno2])
        .then((data) => {            
            results.cact = data.rows;  
        }, (error) => {
            results.cact = [];
        });
    await sql('SELECT a.*,b.sactivity from joinedactivity a ,sactivity b where a.sactno=b.sactno and a.memno=$1 ',[memno3])
        .then((data) => {            
            results.sact = data.rows;  
        }, (error) => {
            results.sact = [];
        });
     await sql('SELECT a.*,b.displayname,b.img,b.memno from friends a,member b where a.memno_2=b.memno and  a.memno_1=$1',[memno_1])
        .then((data) => {            
            results.rf = data.rows;  
        }, (error) => {
            results.rf = [];
        });
    await sql('SELECT * from comment_view ')
        .then((data) => {
            results.comment = data.rows;  
        }, (error) => {
            results.comemnt = [];
        });
    await sql('SELECT * FROM post_view where memno=$1',[memno])
        .then((data) => {
            results.msg = data.rows;  
        }, (error) => {
            results.msg = [];
        });
    await sql('select * from orbit_view where memno=$1 ',[memno5])
        .then((data) => {
            results.orbit = data.rows;  
        }, (error) => {
            results.orbit = [];
        });
    return results;  
}
var query2 = async function(memno,posttypeno,invitedmemno,invitedmemno2,postmemno,postmemno2,memno2,memno3,memno_1,memno4,memno5){
    var results={};
    await sql('SELECT * FROM member where memno=$1',[memno])
        .then((data) => {
            results.member = data.rows[0];   
        }, (error) => {
            results,member = [];
        });
     await sql('SELECT b.displayname,b.img,b.memno FROM invite a ,member b where a.invitememno=b.memno and a.invitedmemno=$1',[invitedmemno])
        .then((data) => {
            results.invite = data.rows;  
        }, (error) => {
            results.invite = [];
    });
    await sql('select a.*,b.displayname,b.img from notice a, member b where a.memno=b.memno and a.postmemno=$1 ORDER BY noticeno desc LIMIT 5 ',[postmemno])
        .then((data) => {
            results.notice = data.rows;  
        }, (error) => {
            results.notice = [];
        });
    await sql('SELECT count(*)as total FROM invite where invitedmemno=$1 ',[invitedmemno2])
        .then((data) => {
            if(data!=null){
                results.total = data.rows[0];
            }else{
                results.total = 0;
            }
        }, (error) => {
            results.total = [];
    });
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1 ',[postmemno2])
        .then((data) => {
            if(data!=null){
                results.count = data.rows[0];
            }else{
                results.count = 0;
            }
        }, (error) => {
            results.count = [];
    });
    await sql('SELECT * from sactivity where memno=$1 ',[memno2])
        .then((data) => {            
            results.cact = data.rows;  
        }, (error) => {
            results.cact = [];
        });
    await sql('SELECT a.*,b.sactivity from joinedactivity a ,sactivity b where a.sactno=b.sactno and a.memno=$1 ',[memno3])
        .then((data) => {            
            results.sact = data.rows;  
        }, (error) => {
            results.sact = [];
        });
     await sql('SELECT a.*,b.displayname,b.img,b.memno from friends a,member b where a.memno_2=b.memno and  a.memno_1=$1',[memno_1])
        .then((data) => {            
            results.rf = data.rows;  
        }, (error) => {
            results.rf = [];
        });
    await sql('SELECT * from comment_view ')
        .then((data) => {
            results.comment = data.rows;  
        }, (error) => {
            results.comemnt = [];
        });
    await sql('SELECT * FROM post_view where memno=$1 and  posttypeno=$2',[memno,posttypeno])
        .then((data) => {
            results.msg = data.rows;  
        }, (error) => {
            results.msg = [];
        });
    await sql(' SELECT a.memno,a.sportdistance,a.avgminkm,b.otype,a.sportstarttime,a.sportendtime,a.continuetime FROM orbitrecord a,orbittype b where a.otypeno=b.otypeno and a.sportdistance!=0 and memno=$1 ORDER BY a.sportstarttime desc ',[memno5])
        .then((data) => {
            results.orbit = data.rows;  
        }, (error) => {
            results.orbit = [];
        });
    return results;  
}
var user_update = async function(newData){
    var results;
    await sql('UPDATE member SET displayname=$1,introduction=$2,birthday=$3,img=$4 WHERE memno = $5', [newData.displayname,newData.introduction,newData.birthday,newData.img,newData.memno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });	
    return results;
}
var editBio = async function(memno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results;
    await sql('SELECT * FROM member where memno=$1',[memno])
    .then((data) => {
        results = data.rows[0];   
    }, (error) => {
        results= [];
    });
    await sql('SELECT b.displayname,b.img,b.memno FROM invite a ,member b where a.invitememno=b.memno and a.invitedmemno=$1',[invitedmemno])
        .then((data) => {
            results.invite = data.rows;  
        }, (error) => {
            results.invite = [];
    });
    await sql('select a.*,b.displayname,b.img from notice a, member b where a.memno=b.memno and a.postmemno=$1 ORDER BY noticeno desc LIMIT 5 ',[postmemno])
        .then((data) => {
            results.notice = data.rows;  
        }, (error) => {
            results.notice = [];
        });
    await sql('SELECT count(*)as total FROM invite where invitedmemno=$1 ',[invitedmemno2])
        .then((data) => {
            if(data!=null){
                results.total = data.rows[0];
            }else{
                results.total = 0;
            }
        }, (error) => {
            results.total = [];
    });
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1 ',[postmemno2])
        .then((data) => {
            if(data!=null){
                results.count = data.rows[0];
            }else{
                results.count = 0;
            }
        }, (error) => {
            results.count = [];
    });
    return results;
}
var editPost = async function(postno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results;
    await sql('SELECT * FROM posts where postno=$1',[postno])
    .then((data) => {
        results = data.rows[0];   
    }, (error) => {
        results = [];
    });
    await sql('SELECT b.displayname,b.img,b.memno FROM invite a ,member b where a.invitememno=b.memno and a.invitedmemno=$1',[invitedmemno])
        .then((data) => {
            results.invite = data.rows;  
        }, (error) => {
            results.invite = [];
    });
    await sql('select a.*,b.displayname,b.img from notice a, member b where a.memno=b.memno and a.postmemno=$1 ORDER BY noticeno desc LIMIT 5 ',[postmemno])
        .then((data) => {
            results.notice = data.rows;  
        }, (error) => {
            results.notice = [];
        });
    await sql('SELECT count(*)as total FROM invite where invitedmemno=$1 ',[invitedmemno2])
        .then((data) => {
            if(data!=null){
                results.total = data.rows[0];
            }else{
                results.total = 0;
            }
        }, (error) => {
            results.total = [];
    });
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1 ',[postmemno2])
        .then((data) => {
            if(data!=null){
                results.count = data.rows[0];
            }else{
                results.count = 0;
            }
        }, (error) => {
            results.count = [];
    });
    return results;
}
var post_update = async function(newData){
    var results;
    await sql('UPDATE posts SET posttime=$1,posttypeno=$2,title=$3,content=$4,img=$5 WHERE postno = $6', [newData.posttime,newData.posttypeno,newData.title,newData.content,newData.img,newData.postno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });	
    return results;
}
//匯出
module.exports = {query,query2,editBio,user_update,post_update,editPost};