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
                    "message":"註冊失敗,有未填欄位或重複的帳號密碼"
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
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 3 會員更新
```javascript
名稱 /member/update
HTTP方法 PUT
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
                   }
response回傳(失敗):{
                    "code":"-1"
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
### 4 文章刪除
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
                    "message":"成功退出此文章"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                   
```
### 5 文章更新
```javascript
名稱 /posts/update
HTTP方法 PUT
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
### 6 查看某人的文章
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
```
### 7 新增留言
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
### 8 刪除留言
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
### 9 加入課程
```javascript
名稱 /course/add
HTTP方法 POST
request請求: {
              "couNo":"課程編號", 
              "course":"課程名稱",
              "couTypeNo":"課程分類編號",
              "coudays":"總天數",
              "content":"內容",
              "memNo":"會員帳號",
              "getPoint":"可得到點數",
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 10 退出課程
```javascript
名稱 /course/delete
HTTP方法 DELETE
request請求: {
              "couNo":"課程編號", 
              "course":"課程名稱",
              "couTypeNo":"課程分類編號",
              "coudays":"總天數",
              "content":"內容",
              "memNo":"會員帳號",
              "getPoint":"可得到點數",
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功退出此課程"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                   
```
### 11 查詢某會員已加入課程
```javascript
名稱 /course/:memNo
HTTP方法 GET
response回傳:[
               {
                "課程編號":"C001", 
                "課程名稱":"有氧運動",
                "課程分類編號""C1",
                "總天數":"7",
                "內容":"利用有氧運動來減重",
                "會員帳號":"10456004@ntub.edu.tw",
                "可得到點數":"10",
                "code":"0"
               }
               ...
             ]
```
### 12 加入活動
```javascript
名稱 /Activity/add
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
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 13 退出活動
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
                   }
```
### 14 查詢某會員已加入活動
```javascript
名稱 /Activity/:memNo
HTTP方法 GET
request請求:[
               {
                "活動編號":"A001", 
                "活動名稱":"騎車趣",
                "活動分類編號"A1",
                "內容":"去河濱公園騎腳踏車",
                "活動時間":"2018/12/20 下午3點",
                "會員帳號":"10456004@ntub.edu.tw",
                "可得到點數":"10",
                "code":"0"
               }
               ...
            ]
```
### 15 新增好友
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
### 16 刪除好友
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
### 17 每日簽到
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
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 18 新增飲食紀錄
```javascript
名稱 /Food/add
HTTP方法 POST
request請求: {
              "serNo":"編號", 
              "memNo":"會員帳號",
              "foodTypeNo":"飲食分類編號",
              "foodName":"食物名稱",
              "foodTime":"日期時間",
              "img":"圖片",
              "remark":"備註"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 19 刪除飲食紀錄
```javascript
名稱 /Food/delete
HTTP方法 DELETE
request請求: {
              "serNo":"編號", 
              "memNo":"會員帳號",
              "foodTypeNo":"飲食分類編號",
              "foodName":"食物名稱",
              "foodTime":"日期時間",
              "img":"圖片",
              "remark":"備註"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功刪除此紀錄"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 20 更新飲食紀錄
```javascript
名稱 /Food/update
HTTP方法 PUT
request請求: {
              "serNo":"編號", 
              "memNo":"會員帳號",
              "foodTypeNo":"飲食分類編號",
              "foodName":"食物名稱",
              "foodTime":"日期時間",
              "img":"圖片",
              "remark":"備註"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 21 新增運動紀錄
```javascript
名稱 /Food/add
HTTP方法 POST
request請求: {
              "serNo":"編號", 
              "memNo":"會員帳號",
              "sportTypeNo":"運動分類編號",
              "sportName":"運動名稱",
              "startTime":"開始時間",
              "endTime":"結束時間",
              "remark":"備註"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 22 刪除運動紀錄
```javascript
名稱 /Food/delete
HTTP方法 DELETE
request請求: {
              "serNo":"編號", 
              "memNo":"會員帳號",
              "sportTypeNo":"運動分類編號",
              "sportName":"運動名稱",
              "startTime":"開始時間",
              "endTime":"結束時間",
              "remark":"備註"
             }
response回傳(成功):{
                    "code":"0"
                    "message":"成功刪除此紀錄"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```
### 23 更新運動紀錄
```javascript
名稱 /Food/update
HTTP方法 PUT
request請求: {
              "serNo":"編號", 
              "memNo":"會員帳號",
              "sportTypeNo":"運動分類編號",
              "sportName":"運動名稱",
              "startTime":"開始時間",
              "endTime":"結束時間",
              "remark":"備註"
             }
response回傳(成功):{
                    "code":"0"
                   }
response回傳(失敗):{
                    "code":"-1"
                   }
```

