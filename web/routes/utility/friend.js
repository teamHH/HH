'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var judge = async function(memno1,memno2){
    var result={};

    await sql('SELECT * from friends a where a.memno_1=$1 and a.memno_2=$2',[memno1,memno2])
        .then((data) => {
            if(data.rows.length > 0){
                result = 1;
            }else{
                result = 0;
            } 
        }, (error) => {
            result = -1;
        },);
    return result;
}
var query = async function(memno,memno2,memno3,memno4,memno5,invitedmemno,invitedmemno2,postmemno,postmemno2,memno15,memno11){
    var results={};

    await sql('SELECT * FROM member where memno=$1',[memno])
        .then((data) => {
            results.member = data.rows[0];  
        }, (error) => {
            results.member = [];
        });
     await sql('SELECT * from comment_view')
        .then((data) => {
            results.comment = data.rows;  
        }, (error) => {
            results.comemnt = [];
        });
    await sql('SELECT * FROM post_view where memno=$1',[memno2])
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
    await sql('SELECT * from sactivity where memno=$1 ',[memno3])
        .then((data) => {            
            results.cact = data.rows;  
        }, (error) => {
            results.cact = [];
        });
    await sql('SELECT a.*,b.sactivity from joinedactivity a ,sactivity b where a.sactno=b.sactno and a.memno=$1 ',[memno4])
        .then((data) => {            
            results.sact = data.rows;  
        }, (error) => {
            results.sact = [];
        });
    await sql('SELECT b.displayname,b.img,b.memno FROM invite a ,member b where a.invitememno=b.memno and a.invitedmemno=$1',[invitedmemno])
        .then((data) => {
            results.invite = data.rows;  
        }, (error) => {
            results.invite = [];
    });
    await sql('select * from notice_view where postmemno=$1 and memno!=$2 limit 5 ',[postmemno,memno15])
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
    await sql('SELECT count(*) as total from notice where postmemno=$1 and memno!=$2 ',[postmemno2,memno11])
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
var query2 = async function(memno,memno2,memno10,memno11,invitedmemno,invitedmemno2,postmemno,postmemno2){   
    var results={};

    //取得會員資料
    await sql('SELECT * FROM member where memno=$1',[memno])
        .then((data) => {
            results.member = data.rows[0];  
        }, (error) => {
            results.member = [];
    });
    await sql('SELECT * from comment_view ')
        .then((data) => {
            results.comment = data.rows;  
        }, (error) => {
            results.comemnt = [];
    });
    await sql('SELECT * FROM post_view where memno=$1',[memno2])
        .then((data) => {
            results.msg = data.rows;  
        }, (error) => {
            results.msg = [];
    });;
    await sql('SELECT b.displayname,b.img,b.memno FROM invite a ,member b where a.invitememno=b.memno and a.invitedmemno=$1',[invitedmemno])
        .then((data) => {
            results.invite = data.rows;  
        }, (error) => {
            results.invite = [];
    });
    await sql('select * from notice_view where postmemno=$1 and memno!=$2 limit 5 ',[postmemno,memno10])
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
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1 and memno!=$2 ',[postmemno2,memno11])
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

var query4 = async function(memno,memno2){   
    var results={};

    //取得會員資料
    await sql('SELECT * FROM member where memno=$1',[memno])
        .then((data) => {
            results.member = data.rows[0];  
        }, (error) => {
            results.member = [];
    });
    await sql('SELECT * from comment_view ')
        .then((data) => {
            results.comment = data.rows;  
        }, (error) => {
            results.comemnt = [];
    });
    await sql('SELECT * FROM post_view where memno=$1',[memno2])
        .then((data) => {
            results.msg = data.rows;  
        }, (error) => {
            results.msg = [];
    });;
    return results;
}
var invite = async function(newData){
    var result;

    await sql('INSERT INTO invite (invitememno,invitedmemno) VALUES ($1, $2)', [newData.invitememno, newData.invitedmemno])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
var invitedelete = async function(invitememno,invitedmemno){   
    var results={};

    var results;

    await sql('DELETE FROM invite WHERE invitememno=$1 and invitedmemno=$2', [invitememno,invitedmemno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
var addanddelete = async function(newData,newData1,invitememno,invitedmemno){
    var result;

    await sql('INSERT INTO friends (memno_1,memno_2) VALUES ($1, $2)', [newData.memno_1, newData.memno_2])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
    await sql('INSERT INTO friends (memno_1,memno_2) VALUES ($1, $2)', [newData1.memno_1, newData1.memno_2])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
    await sql('DELETE FROM invite WHERE invitememno=$1 and invitedmemno=$2', [invitememno,invitedmemno])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//匯出
module.exports = {judge,query,query2,query4,invite,invitedelete,addanddelete};