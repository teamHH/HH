### 1 加入會員

```javascript
名稱 /member/add
HTTP方法 post
request請求: { "memNo":"會員帳號", 
              "memPassword":"會員密碼",
              "displayName":"會員姓名",
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日"
             }
response回傳:{"memNo":"會員帳號",
              "memPassword":"會員密碼",
              "displayName":"會員姓名",
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日",
              "code":"0"
             }
```
### 2 會員登入
```javascript
名稱 /member/login
HTTP方法 post
request請求: {"memNo":"會員帳號", 
              "memPassword":"會員密碼",
             }
response回傳:{"memNo":"會員帳號",
              "memPassword":"會員密碼",
              "code":"0"
             }
```
### 3 會員更新
```javascript
名稱 /member/update
HTTP方法 put
request請求: { "memNo":"會員帳號", 
              "memPassword":"會員密碼",
              "displayName":"會員姓名",
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日"
             }
response回傳:{"memNo":"會員帳號",
              "memPassword":"會員密碼",
              "displayName":"會員姓名",
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日",
              "code":"0"
             }
```
### 4 文章新增
```javascript
名稱 /posts/add
HTTP方法 post
request請求: { "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
             }
response回傳:{ "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
              "code":"0"
             }
```
### 4 文章刪除
```javascript
名稱 /posts/delete
HTTP方法 Delete
request請求: { "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
             }
response回傳:{ "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
              "code":"0"
             }
```
### 5 文章更新
```javascript
名稱 /posts/update
HTTP方法 put
request請求: { "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
             }
response回傳:{ "postNo":"文章編號", 
              "memNo":"會員帳號",
              "postTypeNo":"文章分類編號",
              "postTime":"時間",
              "title":"標題",
              "content":"內容"
              "code":"0"
             }
```
### 6 查看某人的文章
```javascript
名稱 /posts/:id
HTTP方法 get
response回傳:{ "文章編號":"P001", 
              "會員帳號":"10456004@ntub.edu.tw",
              "文章分類編號":"跑步",
              "時間":"2018/12/13",
              "標題":"馬拉松",
              "內容":"今天去參加了馬拉松活動"
              "code":"0"
             }
```



