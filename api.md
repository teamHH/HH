### 1 註冊會員

```javascript
名稱 /member/add
HTTP方法 POST
request請求: {
              "memNo":"會員帳號", 
              "memPassword":"會員密碼",
              "displayName":"會員姓名",
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功註冊"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"註冊失敗,有未填欄位或重複的帳號"
                   }            
```
### 2 會員登入
```javascript
名稱 /member/login
HTTP方法 POST
request請求: {
              "memNo":"會員帳號", 
              "memPassword":"會員密碼",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"登入成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"登入失敗"
                   }
```
### 3 會員更新
```javascript
名稱 /member/update
HTTP方法 PUT
request請求: {
              "memPassword":"會員密碼",
              "displayName":"會員姓名",
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"更新成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"更新失敗"
                   }                   
```
### 4 查詢會員資料
```javascript
名稱 /member/:memNo
HTTP方法 GET
response回傳:[
               {
                "會員帳號":"0456004@ntub.edu.tw", 
                "會員密碼":"123456",
                "會員姓名":"劉安",
                "性別":"M",
                "電話":"0987559018",
                "生日":"2018/12/13"
                "code":"0"
               }
               ...
             ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                  }     
```
### 5 點數新增
```javascript
名稱 /points/add
HTTP方法 POST
request請求: {
              "serNo":"編號", 
              "memNo":"會員帳號",
              "pointTime":"時間",
              "ruleNo":"規則編號",
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                   
```
### 6 點數查詢
```javascript
名稱 /points/:memNo
HTTP方法 GET
response回傳:[
               {
                "編號":"1", 
                "會員帳號":"10456004@ntub.edu.tw",
                "時間":"2019/2/15",
                "規則編號":"a",
               }
               ...
             ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                  }     
```
### 7 文章新增
```javascript
名稱 /points/add
HTTP方法 POST
request請求: {
              "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容",
              "friendTypeNo":"好友分類編號",
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                   
```
### 8 文章刪除
```javascript
名稱 /posts/delete
HTTP方法 DELETE
request請求: { 
              "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功刪除此文章"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"刪除失敗"
                   }                   
```

### 9 文章更新
```javascript
名稱 /posts/update
HTTP方法 PUT
request請求: {
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"更新成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"更新失敗"
                   }
```
### 10 查看某人的文章
```javascript
名稱 /posts/:memNo
HTTP方法 GET
response回傳:[
               {
                "文章編號":"P001", 
                "會員帳號":"10456004@ntub.edu.tw",
                "文章分類編號":"跑步",
                "時間":"2018/12/13",
                "標題":"馬拉松",
                "內容":"今天去參加了馬拉松活動"
                "code":"0"
               }
               ...
             ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                  }     
```
### 11 新增留言
```javascript
名稱 /comments/add
HTTP方法 POST
request請求: {
              "comNo":"留言編號", 
              "postNo":"文章編號",
              "memNo":"會員帳號",
              "comTime":"時間",
              "msg":"內容",
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                  
```
### 12 刪除留言
```javascript
名稱 /comments/delete
HTTP方法 DELETE
request請求: {
              "comNo":"留言編號", 
              "postNo":"文章編號",
              "memNo":"會員帳號",
              "comTime":"時間",
              "msg":"內容",
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                   
```
### 13 更新留言
```javascript
名稱 /comments/update
HTTP方法 PUT
request請求: {
              "comTime":"時間",
              "msg":"內容",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"更新成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"更新失敗"
                   }                   
```
### 14 創建活動
```javascript
名稱 /sActivity/add
HTTP方法 POST
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"總天數",
              "actTime":"活動時間",
              "memNo":"會員編號"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"創建成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"創建失敗"
                   }
```
### 15 刪除自建活動
```javascript
名稱 /sActivity/delete
HTTP方法 delete
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"總天數",
              "actTime":"活動時間",
              "memNo":"會員編號"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"刪除成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"刪除失敗"
                   }
```
### 16 修改自建活動
```javascript
名稱 /sActivity/update
HTTP方法 put
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"總天數",
              "actTime":"活動時間",
              "memNo":"會員編號"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"修改成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"修改失敗"
                   }
```
### 17 查詢某會員建立的活動清單
```javascript
名稱 /sActivity/:memNo
HTTP方法 GET
request回傳:[
               {
                "活動編號":"A001", 
                "活動名稱":"騎車趣",
                "活動分類編號":"A1",
                "內容":"去河濱公園騎腳踏車",
                "活動時間":"2018/12/20 下午3點",
                "會員帳號":"10456004@ntub.edu.tw",
                "code":"0"
               }
               ...
            ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                  }     
```
### 18 加入活動
```javascript
名稱 /eActivity/add
HTTP方法 POST
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"內容",
              "actTime":"活動時間",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"加入成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"加入失敗"
                   }
```
### 19 刪除已參加活動
```javascript
名稱 /eActivity/add
HTTP方法 POST
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"內容",
              "actTime":"活動時間",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"刪除成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"刪除失敗"
                   }
```
### 20 查詢自身加入活動
```javascript
名稱 /eActivity/:memNo
HTTP方法 GET
request回傳:[
               {
                "活動編號":"A001", 
                "活動名稱":"騎車趣",
                "活動分類編號":"A1",
                "內容":"去河濱公園騎腳踏車",
                "活動時間":"2018/12/20 下午3點",
                "會員帳號":"10456004@ntub.edu.tw",
                "code":"0"
               }
               ...
            ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                  }     
```
### 21 查詢現有活動清單
```javascript
名稱 /eActivity
HTTP方法 GET
request回傳:[
               {
                "活動編號":"A001", 
                "活動名稱":"騎車趣",
                "活動分類編號":"A1",
                "內容":"去河濱公園騎腳踏車",
                "活動時間":"2018/12/20 下午3點",
                "會員帳號":"10456004@ntub.edu.tw",
                "可得到點數":"10",
                "code":"0"
               }
               ...
            ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                  }     
```
### 22 新增好友
```javascript
名稱 /Friends/add
HTTP方法 POST
request請求: {
              "serNo":"編號", 
              "friendTypeNo":"好友分類編號",
              "memNo_1":"會員帳號_1",
              "memNo_2":"會員帳號_2"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 23 刪除好友
```javascript
名稱 /Friends/delete
HTTP方法 DELETE
request請求: {
              "serNo":"編號", 
              "friendTypeNo":"好友分類編號",
              "memNo_1":"會員帳號_1",
              "memNo_2":"會員帳號_2"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功刪除此好友"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 24 查詢好友清單
```javascript
名稱 /Friends/:memNo
HTTP方法 get
request回傳:[
               {
                "編號":"1", 
                "好友分類名稱":"摯友",
                "會員帳號":"10456004@ntub.edu.tw",
                "code":"0"
               }
               ...
            ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                  }     
```
### 25 每日簽到
```javascript
名稱 /signIn/add
HTTP方法 POST
request請求: {
              "serNo":"編號", 
              "signDate":"簽到日期",
              "memNo":"會員帳號"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"簽到成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"簽到失敗"
                   }
```
### 26 查詢簽到紀錄
```javascript
名稱 /signIn/:memNo
HTTP方法 GET
request回傳(成功):[
                   {
                    "serNo":"1", 
                    "signDate":"2018-11-01",
                    "memNo":"10456021@ntub.edu.tw",
                    "code":"0"
                   }
                   ...
                 ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                   }                
```
### 27 新增運動紀錄
```javascript
名稱 /Sport/add
HTTP方法 POST
request請求: {
              "orbitRecordNo":"軌跡紀錄編號", 
              "memNo":"會員帳號",
              "type":"類型",
              "startDateTime":"運動開始時間",
              "endDateTime":"運動結束時間"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"新增成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"新增失敗"
                   }
```
### 28 查詢運動紀錄
```javascript
名稱 /Sport/memNo
HTTP方法 GET
request回傳(成功):[
                   {
                    "orbitRecordNo":"1", 
                    "memNo":"10456021@ntub.edu.tw",
                    "type":"跑步",
                    "startDateTime":"2019/3/21 14:00:00",
                    "endDateTime":"20193/21 14:30:00"
                    "code":"0"
                   }
                   ...
                 ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                   }                
```
### 29 新增評分
```javascript
名稱 /Score/add
HTTP方法 POST
request請求: {
              "scoreNo":"評分編號", 
              "actNo":"活動編號",
              "memNo":"會員帳號",
              "score":"活動評分",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"新增成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"新增失敗"
                   }
```
### 30 修改評分
```javascript
名稱 /Score/update
HTTP方法 PUT
request請求: {
              "score":"活動評分",
             }
response回傳(成功):{  
                    "code":"0"
                    "message":"更新成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"更新失敗"
                   }
```
### 31 新增好友分類
```javascript
名稱 /friendType/add
HTTP方法 POST
request請求: {
              "friendTypeNo":"1",
              "friendType":"摯友"
             }
response回傳(成功):{  
                    "code":"0"
                    "message":"新增成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"新增失敗"
                   }
```
### 32 刪除好友分類
```javascript
名稱 /friendType/delete
HTTP方法 DELETE
request請求: {
              "friendTypeNo":"1",
              "friendType":"摯友"
             }
response回傳(成功):{  
                    "code":"0"
                    "message":"刪除成功"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"刪除失敗"
                   }
```
### 33 查詢好友分類名稱
```javascript
名稱 /friendType/:friendType
HTTP方法 GET
request回傳(成功):[
                   {
                    "friendTypeNo":"1", 
                    "friendType":"點頭之交",
                    "code":"0"
                   }
                   ...
                 ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                   }                
```
### 34 按讚
```javascript
名稱 /Likes/add
HTTP方法 POST
request請求: {
              "likeNo":"按讚編號",
              "postNo":"文章編號",
              "memNo":"會員帳號,
              "likeTime":"時間"
             }
response回傳(成功):{  
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 34 收回讚
```javascript
名稱 /Likes/delete
HTTP方法 DELETE
request請求: {
              "likeNo":"按讚編號",
              "postNo":"文章編號",
              "memNo":"會員帳號,
              "likeTime":"時間"
             }
response回傳(成功):{  
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
