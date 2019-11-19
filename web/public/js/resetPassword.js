$(document).ready(function(){
    var passOne = $("#passOne").val();
    var passTwo = $("#passTwo").val();
            
    $("#footerText").html("請輸入新密碼");
    var checkAndChange = function(){
        if(passOne.length==0){
            if(passTwo.length==0){
                $("#footerText").html("請輸入新密碼");
            }else if(passTwo.length!=0){
                $("#footerText").html("請先輸入上一行");
            }

            /*if($("#buttom").hasClass("correct")){
                $("#buttom").removeClass("correct").addClass("incorrect");
                $("#footerText").html("密碼不一致");
            }else{
                $("#footerText").html("密碼不一致");
            }*/
        }else{
            if($("#buttom").hasClass("incorrect")){
                if(passOne == passTwo){
                    $("#buttom").removeClass("incorrect").addClass("correct");
                    $("#footerText").html("密碼相同");
                }
            }else{
                if(passOne != passTwo){
                    $("#buttom").removeClass("correct").addClass("incorrect");
                    $("#footerText").html("密碼不一致");
                } 
            }
        }  
    }
  
    $("input").keyup(function(){
        var newPassOne = $("#passOne").val();
        var newPassTwo = $("#passTwo").val();
              
        passOne = newPassOne;
        passTwo = newPassTwo;
                
        checkAndChange();
    });
});