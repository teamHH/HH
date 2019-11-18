'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');


var query = async function(invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
	
    await sql('SELECT * from sactivity_view ')
        .then((data) => {            
            results.data2 = data.rows;  
        }, (error) => {
            results = [];
        });
    await sql('SELECT * from eactivity_view')
        .then((data) => {            
            results.data1 = data.rows;  
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
var query2 = async function(invitedmemno,invitedmemno2,postmemno,postmemno2){
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
    await sql('SELECT count(*)as total FROM invite where invitedmemno=$1',[invitedmemno2])
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
var one = async function(sactno,sactno2,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
    
    await sql('SELECT * from sactivityone_view where sactno=$1', [sactno])
        .then((data) => {
            if(data.rows.length > 0){
                results.sa = data.rows[0];   
            }else{
                results = -1;
            }    
        }, (error) => {
            results = null;
        });
    await sql('SELECT sum(score)/count(sactno)as total from score where sactno=$1 ', [sactno2])
        .then((data) => {            
            results.score= data.rows[0];  
        }, (error) => {
            results.score = [];
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



var add = async function(newData){
    var result;
    //await sql('INSERT INTO sactivity (sactivity,sacttypeno,location,scontent,memno) VALUES ($1,$2,$3,$4,$5)', [newData.sactivity, newData.sacttypeno,newData.location,newData.scontent,newData.memno])
    await sql('INSERT INTO sactivity (sactivity,sacttime,sacttypeno,location,scontent,memno) VALUES ($1,$2,$3,$4,$5,$6)', [newData.sactivity, newData.sacttime, newData.sacttypeno,newData.location,newData.scontent,newData.memno])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
var eadd = async function(newData){
    var result;
    //await sql('INSERT INTO sactivity (sactivity,sacttypeno,location,scontent,memno) VALUES ($1,$2,$3,$4,$5)', [newData.sactivity, newData.sacttypeno,newData.location,newData.scontent,newData.memno])
    await sql('INSERT INTO eactivity (eactivity,eacttypeno,econtent) VALUES ($1,$2,$3)', [newData.eactivity,newData.eacttypeno,newData.econtent])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
var update = async function(newData){
    var results;

    await sql('UPDATE sactivity SET sacttime=$1,location=$2,scontent=$3,sacttypeno=$4 WHERE sactno = $5', [newData.sacttime,newData.location,newData.scontent,newData.sacttypeno,newData.sactno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
var editAct = async function(sactno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results=[];
    await sql('SELECT a.sactno,a.sactivity,a.scontent,a.sacttime,a.location,b.acttype from sactivity a, activitytype b where a.sacttypeno=b.acttypeno and a.sactno=$1',[sactno])
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
    //回傳
    return results;
}
var quitAct = async function(memno,sactno){
    var results;

    await sql('DELETE FROM joinedactivity WHERE memno=$1 and sactno=$2', [memno,sactno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
    return results;
}
var deleteAct = async function(sactno){
    var results;

    await sql('DELETE FROM sactivity WHERE sactno=$1', [sactno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
	
    return results;
}
var deleteAct3 = async function(eactno){
    var results;

    await sql('DELETE FROM eactivity WHERE eactno=$1', [eactno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
var joinedactivity = async function(memno,sactno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results;

    await sql('SELECT a.sactno,b.sactivity,b.sacttime,b.location,b.scontent,c.acttype from joinedactivity a,sactivity b,activitytype c where a.sactno=b.sactno and b.sacttypeno=c.acttypeno and a.memno=$1 and a.sactno=$2', [memno,sactno])
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
var deleteActForm = async function(memno,sactno,invitedmemno,invitedmemno2,postmemno,postmemno2){
    var results;

    await sql('SELECT a.*,b.acttype from sactivity a,activitytype b where a.sacttypeno=b.acttypeno and memno=$1 and sactno=$2', [memno,sactno])
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
var addscore = async function(newData){
    var results;

    await sql('INSERT INTO score (sactno,memno,score,memno2) VALUES ($1,$2,$3,$4)', [newData.sactno, newData.memno,newData.score,newData.memno2])
        .then((data) => {
            results = 0;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
var joinactivity = async function(newData){
    var results;

    await sql('INSERT INTO joinedactivity (memno,sactno) VALUES ($1,$2)', [newData.memno,newData.sactno])
        .then((data) => {
            results = 0;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {query,query2,add,eadd,one,update,editAct,quitAct,joinedactivity,deleteActForm,deleteAct,deleteAct3,addscore,joinactivity};