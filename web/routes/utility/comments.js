'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO comments (postno,memno,comtime,msg) VALUES ($1, $2, $3,$4)', [newData.postno, newData.memno, newData.comtime, newData.msg])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
    await sql('INSERT INTO notice (content,memno,postno,postmemno) VALUES ($1, $2, $3,$4)', [newData.content, newData.memno,newData.postno,newData.postmemno])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
    return result;
}
var addlike = async function(newData){
    var results;

    await sql('INSERT INTO likes (memno,postno) VALUES ($1, $2)', [newData.memno, newData.postno])
        .then((data) => {
            results = 0;  
        }, (error) => {
            results = -1;
        });
    await sql('INSERT INTO notice (content,memno,postno,postmemno) VALUES ($1, $2, $3,$4)', [newData.content, newData.memno, newData.postno,newData.postmemno])
        .then((data) => {
            results = 0;  
        }, (error) => {
            results = -1;
        });
    return results;
}

//匯出
module.exports = {add,addlike};