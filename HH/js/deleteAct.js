/*-----------------------------------------------------------*/
/* deleteConfirm(SweetAlert)*/
/*-----------------------------------------------------------*/
$("[id='deleteConfirm2']").click(function (e) {
    swal({
        title: "你確定嗎？",
        text: "刪除好友後須將重新遞送交友邀請",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的，删除！",
        cancelButtonText: "不，取消",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function(isConfirm) {
        if (isConfirm) {
            swal("確定删除", "已經成功刪除！", "success")                    
        } else{
            swal("取消", "已經取消刪除！", "error")
        }
    })
});