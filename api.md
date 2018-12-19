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
              "memNo":"會員張浩",
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
                   }
response回傳(失敗):{
                    "code":"-1"
                   }                   
```
### 11 查詢已加入課程課程
```javascript
名稱 /course/:memNo
HTTP方法 GET
response回傳:[
               {"課程編號":"C001", 
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


