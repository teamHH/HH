'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var login = async function(id, password){   
    var result;

    //取得會員資料
    await sql('SELECT displayname FROM member WHERE memno=$1 and mempassword=$2', [id, password])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];
            }else{
                result = null;
            } 
        }, (error) => {
            result = null;
        });
    return result;
 }
 var query = async function(memno){ 
    var result;
    await sql('SELECT a.orbitrecordno,a.sportstarttime,(a.sportendtime-a.sportstarttime)as time,b.otype,a.sportdistance,a.avgminkm from orbitrecord a CROSS JOIN orbittype b where a.otypeno=b.otypeno and memno=$1 and a.sportendtime is not null and a.avgminkm!=0 ORDER BY a.sportstarttime DESC ', [memno])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows;
            }else{
                result = null;
            } 
        }, (error) => {
            result = null;
        });
    return result;
}
var returnNo=async function(memno,sportstarttime){ 
    var result={};

    await sql('SELECT orbitrecordno FROM orbitrecord where memno=$1 and sportstarttime=$2', [memno,sportstarttime])
        .then((data) => {
        if(data.rows.length >0){
            result = data.rows;
        }
        }, (error) => {
            result = null;
        });
    console.log(result);
    return result;
    
}
var orbitrecordAdd = async function(newData){   
    var result;
    await sql('INSERT INTO orbitrecord (orbitrecordno,memno,otypeno,sportstarttime) VALUES ($1,$2,$3,$4)', [newData.orbitrecordno,newData.memno, newData.otypeno, newData.sportstarttime])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
    return result;
}

var orbitAdd = async function(newData){  
    var result={};
    await sql('INSERT INTO orbit (orbitrecordno,orbitdatetime,lat,lng) VALUES ($1,$2,$3,$4)', [newData.orbitrecordno, newData.orbitdatetime, newData.lat,newData.lng])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
     return result;
    }
var update = async function(newData){ 
    var result={};
    await sql('UPDATE orbitrecord SET sportendtime=$1,sportdistance=$2,avgminkm=$3 WHERE orbitrecordno = $4', [newData.sportendtime,newData.sportdistance,newData.avgminkm,newData.orbitrecordno])
        .then((data) => {
            result = data.rowCount;    
        }, (error) => {
            result = -1;
        });
    //回傳物件
    return result;
}



//匯出
module.exports = {login,query,orbitrecordAdd,orbitAdd,update,returnNo};