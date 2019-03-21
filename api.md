### 1 加入會員

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
### 4 文章新增
```javascript
名稱 /posts/add
HTTP方法 POST
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
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                   
```
### 5 文章刪除(本人)
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
### 6 文章刪除(管理者)
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
### 7 文章更新
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
### 8 查看某人的文章
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
### 9 新增留言
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
### 10 刪除留言(本人)
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
### 11 刪除留言(管理者)
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
### 12 更新留言
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
### 13 創建活動
```javascript
名稱 /Activity/create
HTTP方法 POST
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"總天數",
              "content":"內容",
              "actTime":"活動時間",
              "memNo":"會員編號",
              "getPoint":"可得到點數",
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
### 14 加入活動
```javascript
名稱 /Activity/add
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
### 15 退出活動(本人)
```javascript
名稱 /Activity/delete
HTTP方法 DELETE
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"總天數",
              "content":"內容",
              "actTime":"活動時間",
              "memNo":"會員編號",
              "getPoint":"可得到點數",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功退出此活動"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"退出失敗"
                   }
```
### 16 退出活動(管理者)
```javascript
名稱 /Activity/delete
HTTP方法 DELETE
request請求: {
              "actNo":"活動編號", 
              "activity":"活動名稱",
              "actTypeNo":"活動分類編號",
              "content":"總天數",
              "content":"內容",
              "actTime":"活動時間",
              "memNo":"會員編號",
              "getPoint":"可得到點數",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功退出此活動"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"退出失敗"
                   }
```
### 17 查詢某會員已加入活動
```javascript
名稱 /Activity/:memNo
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
### 18 新增好友
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
### 19 刪除好友
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
### 20 每日簽到
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
### 21 新增運動紀錄
```javascript
名稱 /Sport/add
HTTP方法 POST
request請求: {
              "sportNo":"運動編號", 
              "sport":"運動名稱",
              "content":"內容",
              "sportStartTime":"運動開始時間",
              "sportEndTime":"運動結束時間",
              "memNo":"會員帳號"
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
### 22 查詢運動紀錄
```javascript
名稱 /Sport/
HTTP方法 GET
request回傳(成功):[
                   {
                    "sportNo":"s001", 
                    "sport":"跑步",
                    "content":"會顯示路線圖 跟共走幾步",
                    "sportStartTime":"2018/3/21 12:00:00",
                    "sportEndTime":"2018/3/21 14:00:00",
                    "memNo":"a22753516@gmail.com"
                    "code":"0"
                   }
                   ...
                 ]
request回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                   }                
```
### 23 新增評分
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
### 24 修改評分
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
### 25 新增好友
```javascript
名稱 / Friends/add
HTTP方法 POST
request請求: {
              "serNo":"編號", 
              "friendTypeNo":"好友分類編號",
              "memNo_1":"會員帳號_1",
              "memNo_2":"會員帳號_2",
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
### 26 新增好友
```javascript
名稱 / Friends/add
HTTP方法 POST
request請求: {
              "serNo":"編號", 
              "friendTypeNo":"好友分類編號",
              "memNo_1":"會員帳號_1",
              "memNo_2":"會員帳號_2"
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
### 27 刪除好友
```javascript
名稱 / Friends/delete
HTTP方法 DELETE
request請求: {
              "serNo":"編號", 
              "friendTypeNo":"好友分類編號",
              "memNo_1":"會員帳號_1",
              "memNo_2":"會員帳號_2"
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
### 28 查詢好友
```javascript
名稱 / Friends/memNo
HTTP方法 GET
request回傳(成功):[
                   {
                    "serNo":"F001", 
                    "friendTypeNo":"莫逆之交",
                    "memNo_1":"a22753516@gmail.com",
                    "memNo_2":"b22753516@gmail.com",
                    "code":"0"
                   }
                   ...
                 ]
response回傳(失敗):{
                    "code":"-1"
                    "message":"查詢失敗"
                   }
```
### 29 新增留言
```javascript
名稱 / Comments/add
HTTP方法 DELETE
request請求: {
              "comNo":"C001", 
              "postNo":"P001",
              "memNo":"a22753516@gmail.com",
              "comTime":"2018/12/13",
              "msg":"好帥哦"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"留言失敗"
                   }
```
### 30 刪除留言
```javascript
名稱 / Comments/delete
HTTP方法 DELETE
request請求: {
              "comNo":"C001", 
              "postNo":"P001",
              "memNo":"a22753516@gmail.com",
              "comTime":"2018/12/13",
              "msg":"好帥哦"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"刪除失敗"
                   }
```
### 31 修改留言
```javascript
名稱 / Comments/update
HTTP方法 PUT
request請求: {
              "comTime":"2018/12/13",
              "msg":"好帥哦"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                    "message":"更新失敗"
                   }
```
