'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var login = async function(id, password,invitedmemno,invitedmemno2,postmemno,postmemno2){   
    var results;

    //取得會員資料
    await sql('SELECT * FROM member WHERE memno=$1 and mempassword=$2', [id, password])
        .then((data) => {
            if(data.rows.length > 0){
                results = data.rows[0];
            }else{
                results = null;
            } 
        }, (error) => {
            results = null;
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
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1  ',[postmemno2])
        .then((data) => {
            if(data!=null){
                results.count = data.rows[0];
            }else{
                results.count = 0;
            }
        }, (error) => {
            results.count = [];
    });
    //回傳物件
    return results;
}
var manager_login = async function(memno, password){   
    var result;

    //取得會員資料
    await sql('SELECT * FROM manager WHERE memno=$1 and password=$2', [memno, password])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];
            }else{
                result = null;
            } 
        }, (error) => {
            result = null;
        });
    
    //回傳物件
    return result;
}
var add = async function(newData){
    var result;

    await sql('INSERT INTO member (displayname,memno,mempassword) VALUES ($1, $2, $3)', [newData.displayname, newData.memno, newData.mempassword])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
var query = async function(memno,password){   
    var result;

    //取得會員資料
    await sql('SELECT mempassword FROM member where memno=$1 and mempassword=$2', [memno,password])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];
            }else{
                result = null;
            } 
        }, (error) => {
            result = null;
        });
    
    //回傳物件
    return result;
}
var deleteFriendForm = async function(memno_1,memno_2,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results;

    await sql('SELECT a.serno,c.displayname,c.img from friends a,member c where  a.memno_2=c.memno and a.memno_1=$1 and a.memno_2=$2', [memno_1,memno_2])
        .then((data) => {
            results = data.rows[0];     
        }, (error) => {
            results = -1;
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
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1  ',[postmemno2])
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
var deleteFriend = async function(memno_1,serno){
    var results;

    await sql('DELETE FROM friends WHERE memno_1=$1 and serno=$2', [memno_1,serno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
var update = async function(newData){
    var results;

    await sql('UPDATE member SET mempassword=$1 WHERE memno = $2', [newData.mempassword,newData.memno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
var search = async function(memno,keyword,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
    /////////////會員資料
    await sql('SELECT * FROM member where memno=$1',[memno])
        .then((data) => {
            results.member = data.rows[0];  
        }, (error) => {
            results.member = [];
        });
    await sql('SELECT * from post_view where title like $1 or content like $2',['%'+keyword+'%'])
        .then((data) => {            
            results.posts = data.rows;  
        }, (error) => {
            results.posts = [];
        });
    await sql('SELECT * from comment_view ')
        .then((data) => {
            results.comment = data.rows;  
        }, (error) => {
            results.comemnt = [];
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
var searchM = async function(memno,keyword){
    var results=[];
    /////////////會員資料
    await sql('SELECT * FROM manager where memno=$1',[memno])
        .then((data) => {
            results.manager = data.rows[0];  
        }, (error) => {
            results.manager = [];
        });
    await sql('SELECT * from post_view where title like $1 ',['%'+keyword+'%'])
        .then((data) => {
            results.posts = data.rows;  
        }, (error) => {
            results.posts = [];
        });
    return results;  
}
var search2 = async function(keyword,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
    /////////////會員資料
    await sql('SELECT *  from sactivity_view  where sactivity like $1 ',['%'+keyword+'%'])
        .then((data) => {
            results.data2 = data.rows;  
        }, (error) => {
            results.data2 = [];
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
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1  ',[postmemno2])
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
var search2M = async function(keyword){
    var results=[];
    /////////////會員資料
    await sql('SELECT *  from sactivity_view  where sactivity like $1 ',['%'+keyword+'%'])
        .then((data) => {
            results.data2 = data.rows;  
        }, (error) => {
            results.data2 = [];
        });
    return results;  
}
var search3 = async function(keyword,invitedmemno,invitedmemno2,postmemno,postmemno2){   
    var results=[];
    await sql('SELECT memno,img,displayname from member  where displayname like $1 ',['%'+keyword+'%'])
        .then((data) => {
            results.friend = data.rows;  
        }, (error) => {
            results.friend = [];
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
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1  ',[postmemno2])
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
var search4 = async function(keyword,invitedmemno,invitedmemno2,postmemno,postmemno2){   
    var results=[];
    await sql('SELECT *  from eactivity_view  where eactivity like $1 ',['%'+keyword+'%'])
        .then((data) => {
            results.data1 = data.rows;  
        }, (error) => {
            results.data1 = [];
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
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1  ',[postmemno2])
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
var search4M = async function(keyword){   
    var results=[];
    await sql('SELECT *  from eactivity_view  where eactivity like $1 ',['%'+keyword+'%'])
        .then((data) => {
            results.data1 = data.rows;  
        }, (error) => {
            results.data1 = [];
        });
    return results;
}
var signin = async function(newData){
    var result;
    await sql('INSERT INTO signin (signdate,memno) VALUES ($1,$2)', [newData.signdate, newData.memno])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
var homepage = async function(invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
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
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1  ',[postmemno2])
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
//匯出
module.exports = {login,manager_login,add,query,deleteFriendForm,deleteFriend,update,search,searchM,search2,search2M,search3,search4,search4M,signin,homepage};