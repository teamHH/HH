### 1 加入會員

```javascript
名稱 /member/add
方法 post
傳入 {memNo, memPassword,displayName,gender,tel,birthday}
回傳 true|false
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
