'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');


var query = async function(memno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];

    /////////////會員資料
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
    await sql('SELECT * FROM post_view')
        .then((data) => {
            results.posts = data.rows;  
        }, (error) => {
            results.posts = [];
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
            if(data.rowCount===undefined){
                results.total = 0;
            }else{
                results.total = data.rows[0];
            }
        }, (error) => {
            results.total = 0;
    });
    await sql('SELECT count(postmemno) as total from notice where postmemno=$1  ',[postmemno2])
        .then((data) => {
            if(data.rowCount===undefined){
                results.count = 0;
            }else{
                results.count = data.rows[0];
            }
        }, (error) => {
            results.count = 0;
    });
    return results;  
}
var query2 = async function(memno,posttypeno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
    await sql('SELECT * FROM member where memno=$1',[memno])
        .then((data) => {
            results.member = data.rows[0];  
        }, (error) => {
            results.member = [];
        });
    await sql('SELECT * from post_view  where posttypeno=$1',[posttypeno])
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
    await sql('select * from notice_view where postmemno=$1 ',[postmemno])
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
var query3 = async function(memno,postno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
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
    await sql('SELECT * FROM post_view where postno=$1',[postno])
        .then((data) => {
            results.posts = data.rows;  
        }, (error) => {
            results.posts = [];
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
var query4 = async function(memno){
    var results=[];
    await sql('SELECT * FROM manager where memno=$1',[memno])
        .then((data) => {
            results.manager = data.rows[0];  
        }, (error) => {
            results.manager = [];
        });
    await sql('SELECT * from post_view ')
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
    return results;
}
var query5 = async function(memno,posttypeno){
    var results=[];
     await sql('SELECT * FROM manager where memno=$1',[memno])
        .then((data) => {
            results.manager = data.rows[0];  
        }, (error) => {
            results.manager = [];
        });
    await sql('SELECT * from post_view  where posttypeno=$1',[posttypeno])
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
    return results;
}
var add = async function(newData){
    var result;
    await sql('INSERT INTO posts (memno,posttypeno,posttime,title,content,img) VALUES ($1,$2,$3,$4,$5,$6)', [newData.memno, newData.posttypeno, newData.posttime,newData.title,newData.content,newData.img])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
var deletePostForm = async function(memno,postno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results;

    await sql('SELECT a.*,b.posttype FROM posts a, poststype b where a.posttypeno=b.posttypeno  and a.memno=$1 and a.postno=$2', [memno,postno])
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
var deletePost = async function(postno){
    var results;

    await sql('DELETE FROM posts WHERE postno=$1', [postno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
var deleteComment = async function(comno){
    var results;

    await sql('DELETE FROM comments WHERE comno=$1', [comno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {query,query2,query3,query4,query5,add,deletePostForm,deletePost,deleteComment};