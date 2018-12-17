### 1 加入會員

```javascript
名稱 /member/add
HTTP方法 post
request請求: { "memNo":"會員帳號", 
              "memPassword":會員密碼,
              "displayName":會員姓名,
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日"
             }
response回傳:{"memNo":"會員帳號",
              "memPassword":會員密碼,
              "displayName":會員姓名,
              "gender":"性別",
              "tel":"電話",
              "birthday":"生日",
              "code":"0"
             }
```
### 2 加入課程
```javascript
名稱 /course/add
方法 post
傳入 {couNo,course,couTypeNo,couDays,contnet,memNo,getPoint}
回傳 true|false
```
### 3 發起課程
```javascript
名稱 /course/add2
方法 post
傳入 {couNo,course,couTypeNo,couDays,contnet,memNo,getPoint}
回傳 true|false
```
### 4 更改課程
```javascript
名稱 /course/update
方法 put
傳入 {couNo,course,couTypeNo,couDays,contnet,memNo,getPoint}
回傳 true|false
```
### 5 退出課程
```javascript
名稱 /course/delete
方法 delete
傳入 {cou_serNo,couNo,memNo}
回傳 true|false
```

### 6 查看已加入課程
```javascript
名稱 /course/query
方法 get
傳入 {cou_serNo,couNo,memNo}
回傳 true|false
```
