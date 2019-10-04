/* ----------------------------------------------------------- */
/*totPost personal-profile.html  likeBtn*/
/* ----------------------------------------------------------- */
$(document).ready(function(){  
    $('.like-button').click(function(){
        var val = parseInt($(document.getElementsByClassName("cntLike")).text(), 10);
        $(this).toggleClass('is-active');

        if ($(this).hasClass('is-active')) {
            val++
            // User has liked (insert userId, itemId into Likes table)
        } else {
            val--
            // User removed his like (delete from table Likes where userId and itemId)
        }
        
        $(document.getElementsByClassName("cntLike")).text(val);
    })
})