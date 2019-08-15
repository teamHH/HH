/*-----------------------------------------------------------*/
/* deleteConfirm(SweetAlert)*/
/*-----------------------------------------------------------*/
document.getElementById("deleteConfirm2").onclick = function() {
    swal({
        title: "你確定嗎？",
        text: "活動一經刪除後將無法恢復！",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的，删除！",
        cancelButtonText: "不，取消",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function(isConfirm) {
        if (isConfirm) {
            swal("確定删除", "活動已經成功刪除！", "success")                    
        } else{
            swal("取消", "活動已經取消刪除！", "error")
        }
    })
};