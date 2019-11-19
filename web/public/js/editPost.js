/* ----------------------------------------------------------- */
/*totPost personal-profile.html  edit post*/
/* ----------------------------------------------------------- */
var editBtn = document.getElementById("editBtn");
var editable = document.getElementById("editor-content");

function saveContent() {
	// Save the data in localStorage
	localStorage.setItem(editable, editable.innerHTML);
}

editBtn.addEventListener("click", function(e) {
	if (!editable.isContentEditable) {
		editable.contentEditable = "true";
		editable.style.border = "1px dashed #404040";
		editBtn.innerHTML = "<i class='far fa-save' style='font-size: 16px; color: #404040;'></i>";
		editBtn.style.backgroundColor = "transparent"; 
		editBtn.style.color = "#404040";
		editBtn.style.border = "none"; 
	} else { // Disable Editing
		editable.contentEditable = "false";
		editable.style.border = "none";
		editBtn.innerHTML = "<i class='fas fa-edit' style='font-size: 16px; color: #404040;'></i>";
		editBtn.style.backgroundColor = "transparent";
		editBtn.style.color = "#404040";
		editBtn.style.border = "none"; 
		saveContent();
	}
});