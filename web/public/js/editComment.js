/* ----------------------------------------------------------- */
/*totPost personal-profile.html  edit comment*/
/* ----------------------------------------------------------- */
var editCommentBtn = document.getElementById("editCommentBtn");
var editable = document.getElementById("editor-comment");
			
function saveContent() {
    // Save the data in localStorage
	localStorage.setItem(editable, editable.innerHTML);
}
			
editCommentBtn.addEventListener("click", function(e) {
	if (!editable.isContentEditable) {
		editable.contentEditable = "true";
		editable.style.width = "80%";
		editable.style.border = "1px dashed #404040";
		editCommentBtn.innerHTML = "<i class='far fa-save' style='font-size: 16px; color: #404040;'></i>";
		editCommentBtn.style.backgroundColor = "transparent"; 
		editCommentBtn.style.color = "#404040";
        editCommentBtn.style.border = "none"; 	
    } else { // Disable Editing
		editable.contentEditable = "false";
		editable.style.border = "none";
		editCommentBtn.innerHTML = "<i class='fas fa-edit' style='font-size: 16px; color: #404040;'></i>";
		editCommentBtn.style.backgroundColor = "transparent";
		editCommentBtn.style.color = "#404040";
		editCommentBtn.style.border = "none"; 
		saveContent();
	}
});