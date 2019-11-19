/* ----------------------------------------------------------- */
/*totPost personal-profile 發文*/
/* ----------------------------------------------------------- */
var uploadBtn = document.querySelector('.post-actions__upload');
var uploadLabel = document.querySelector('.post-actions__label');
                      
var fakeUploadClick = function(e) {
    var keyboardNum = e.which;
    if (keyboardNum === 13 || keyboardNum === 32) {
        uploadLabel.click();
    }
};
                      
uploadBtn.addEventListener('keydown', fakeUploadClick);
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();                                                          
            reader.onload = function(e) {
                $('#blah').attr('src', e.target.result);
            }
        reader.readAsDataURL(input.files[0]);
    }
}
                      
$("#upload-image").change(function() {
    readURL(this);
});