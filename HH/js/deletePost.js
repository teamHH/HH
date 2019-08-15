/*-----------------------------------------------------------*/
/* deleteConfirm(SweetAlert)*/
/*-----------------------------------------------------------*/
document.getElementById("deleteConfirm").onclick = function() {
  swal({
      title: "你確定嗎？",
      text: "文章一經刪除後將無法恢復！",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "是的，删除！",
      cancelButtonText: "不，取消",
      closeOnConfirm: false,
      closeOnCancel: false
  }, function(isConfirm) {
      if (isConfirm) {
          swal("確定删除", "文章已經成功刪除！", "success") 
          //window.location.href = 'login.html';   跳到別頁                      
      } else{
          swal("取消", "文章已經取消刪除！", "error")
      }
  })
};