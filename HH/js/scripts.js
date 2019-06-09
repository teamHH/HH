/*
$(function(){
    var i = 0;
    var txt = 'HOW HEALTHY'; /* The text */
    //var speed = 50; /* The speed/duration of the effect in milliseconds */
    
    //--------------------------
    /*$('.demo').mouseenter(function(){
        if (i < txt.length) {
            document.getElementById('.demo').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
    });*/
    //--------------------------
//});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
    
};

function singleLetters($words) {
    $words.each(function(){
        var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');
        for (i in letters) {
            if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
        }
        var newLetters = letters.join('');
        word.html(newLetters).css('opacity', 1);
    });
}

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffbf00}";
    document.body.appendChild(css);
};
  


/* ----------------------------------------------------------- */
/* memberSetting                                                */
/* ----------------------------------------------------------- */      
function myFunction(){
	alert("修改成功");
}

/*==================================================================
memberSetting
[ Validate ]*/


(function ($) {
    "use strict";

var input = $('.validate-input .input100');

$('.validate-form').on('submit',function(){
  var check = true;

  for(var i=0; i<input.length; i++) {
    if(validate(input[i]) == false){
      showValidate(input[i]);
      check=false;
    }
  }

  return check;
});


$('.validate-form .input100').each(function(){
  $(this).focus(function(){
    hideValidate(this);
  });
});

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery); 


/*使用者換大頭照*/

$(document).ready(function() {
	
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('.profile-pic').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }
 
  $(".file-upload").on('change', function(){
      readURL(this);
  });
  
  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
});






/* ----------------------------------------------------------- */
/*post.html */
/* ----------------------------------------------------------- */
/*
(jQuery)會出錯 還找不到原因 拿掉有包含(jQuery)的程式 網頁就可繼續執行

	Validate Contact Form
	
(function($){
	
	$("#cform").validate({
		ignore: ".ignore",
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			hiddenRecaptcha: {
				required: function () {
					if (grecaptcha.getResponse() == '') {
						return true;
					} else {
						return false;
					}
				}
			}
		},
		success: "valid",
		submitHandler: function() {
			$.ajax({
				url: 'mailer/feedback.php',
				type: 'post',
				dataType: 'json',
				data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function() {
				
				},
				complete: function() {
				
				},
				success: function(data) {
					$('#cform').fadeOut();
					$('.alert-success').delay(1000).fadeIn();
				}
			});
		}
	});
})(jQuery); 

*/






// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("settingsmodal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
  modal.style.display = "none";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



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

document.getElementById("deleteComment").onclick = function() {
  swal({
      title: "你確定嗎？",
      text: "留言一經刪除後將無法恢復！",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "是的，删除！",
      cancelButtonText: "不，取消",
      closeOnConfirm: false,
      closeOnCancel: false
  }, function(isConfirm) {
      if (isConfirm) {
          swal("確定删除", "留言已經成功刪除！", "success")                    
      } else{
          swal("取消", "留言已經取消刪除！", "error")
      }
  })
};



/* ----------------------------------------------------------- */
/*personal-profile.html  filterBtn*/
/* ----------------------------------------------------------- */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/* ----------------------------------------------------------- */
/*personal-profile.html  likeBtn*/
/* ----------------------------------------------------------- */
$(document).ready(function(){

  $('.like-button').click(function(){
      $(this).toggleClass('is-active');
  })

})

/* ----------------------------------------------------------- */
/*use multiple summernote*/
/* ----------------------------------------------------------- */
$(document).ready(function() {
  $('.summernote').summernote();
});

/* ----------------------------------------------------------- */
/*編輯貼文 儲存貼文*/
/* ----------------------------------------------------------- */
var edit = function() {
  $('.click2edit').summernote({focus: true});
};

var save = function() {
  var markup = $('.click2edit').summernote('code');
  $('.click2edit').summernote('destroy');
};


/*
$(document).ready(function() {
  $('#summernote').summernote();
});
*/

// [groupName, [list of button]]
/*$('#summernote').summernote({
  toolbar: [
    
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
  ]
});
*/

var edit2 = function() {
  $('.click2edit2').summernote({focus: true});
};

var save2 = function() {
  var markup = $('.click2edit2').summernote('code');
  $('.click2edit2').summernote('destroy');
};

var edit3 = function() {
  $('.click2edit3').summernote({focus: true});
};

var save3 = function() {
  var markup = $('.click2edit3').summernote('code');
  $('.click2edit3').summernote('destroy');
};


/* ----------------------------------------------------------- */
/*totPost 篩選*/
/* ----------------------------------------------------------- */
$('.ui.fluid.dropdown')
  .dropdown({
    maxSelections: 6
  })
;