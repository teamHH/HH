/* ----------------------------------------------------------- */
/*totPost personal-profile.html  likeBtn*/
/* ----------------------------------------------------------- */
$(document).ready(function(){  
    $('.liketest').click(function() {
        var val = parseInt($(this).text(), 10);
        $(this).toggleClass('is-liked2');
            
        if ($(this).hasClass('is-liked2')) {
            val++
            // User has liked (insert userId, itemId into Likes table)
        } else {
            val--
            // User removed his like (delete from table Likes where userId and itemId)
        }
            
        $(this).text(val);
    });

    /*
    $('.like-button').click(function(){
        var val = parseInt($(document.getElementsByClassName("cntLike")).text(), 10);
        $(this).toggleClass('is-active');

        if ($(this).hasClass('is-active')) {
            val++
        } else {
            val--
        }
        $(document.getElementsByClassName("cntLike")).text(val);
    })
    */
})