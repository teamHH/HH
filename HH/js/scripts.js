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



var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'align': [] }],

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],

  ['link', 'image'],

  ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});








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
/*
$(document).ready(function() {
  $('.summernote').summernote({
    placeholder: '快來分享今天做了什麼吧'
  });
});

$('.summernote').summernote({
  toolbar: [
    // [groupName, [list of button]]
    ['style', ['style']],
    ['font', ['bold', 'underline', 'clear']],
    ['fontname', ['fontname']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture', 'video']],
    ['misc',['fullscreen', 'undo', 'redo']],
  ],
});*/



/* ----------------------------------------------------------- */
/*編輯貼文 儲存貼文*/
/* ----------------------------------------------------------- 
var edit = function() {
  $('.click2edit').summernote({focus: true});
};

var save = function() {
  var markup = $('.click2edit').summernote('code');
  $('.click2edit').summernote('destroy');
};

var edit2 = function() {
  $('.click2edit2').summernote({focus: true});
};

var save2 = function() {
  var markup = $('.click2edit2').summernote('code');
  $('.click2edit2').summernote('destroy');
};*/


/* ----------------------------------------------------------- */
/*totPost 篩選*/
/* ----------------------------------------------------------- */
$('.ui.fluid.dropdown')
  .dropdown({
    maxSelections: 4
  })
;



$(document).ready(function() {

  var select = $('select[multiple]');
  var options = select.find('option');

  var div = $('<div />').addClass('selectMultiple');
  var active = $('<div />');
  var list = $('<ul />');
  var placeholder = select.data('placeholder');

  var span = $('<span />').text(placeholder).appendTo(active);

  options.each(function() {
      var text = $(this).text();
      if($(this).is(':selected')) {
          active.append($('<a />').html('<em>' + text + '</em><i></i>'));
          span.addClass('hide');
      } else {
          list.append($('<li />').html(text));
      }
  });

  active.append($('<div />').addClass('arrow'));
  div.append(active).append(list);

  select.wrap(div);

  $(document).on('click', '.selectMultiple ul li', function(e) {
      var select = $(this).parent().parent();
      var li = $(this);
      if(!select.hasClass('clicked')) {
          select.addClass('clicked');
          li.prev().addClass('beforeRemove');
          li.next().addClass('afterRemove');
          li.addClass('remove');
          var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
          a.slideDown(400, function() {
              setTimeout(function() {
                  a.addClass('shown');
                  select.children('div').children('span').addClass('hide');
                  select.find('option:contains(' + li.text() + ')').prop('selected', true);
              }, 500);
          });
          setTimeout(function() {
              if(li.prev().is(':last-child')) {
                  li.prev().removeClass('beforeRemove');
              }
              if(li.next().is(':first-child')) {
                  li.next().removeClass('afterRemove');
              }
              setTimeout(function() {
                  li.prev().removeClass('beforeRemove');
                  li.next().removeClass('afterRemove');
              }, 200);

              li.slideUp(400, function() {
                  li.remove();
                  select.removeClass('clicked');
              });
          }, 600);
      }
  });

  $(document).on('click', '.selectMultiple > div a', function(e) {
      var select = $(this).parent().parent();
      var self = $(this);
      self.removeClass().addClass('remove');
      select.addClass('open');
      setTimeout(function() {
          self.addClass('disappear');
          setTimeout(function() {
              self.animate({
                  width: 0,
                  height: 0,
                  padding: 0,
                  margin: 0
              }, 300, function() {
                  var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                  li.slideDown(400, function() {
                      li.addClass('show');
                      setTimeout(function() {
                          select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                          if(!select.find('option:selected').length) {
                              select.children('div').children('span').removeClass('hide');
                          }
                          li.removeClass();
                      }, 400);
                  });
                  self.remove();
              })
          }, 300);
      }, 400);
  });

  $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
      $(this).parent().parent().toggleClass('open');
  });

});


/* ----------------------------------------------------------- */
/*personal-profile 修改個人資料*/
/* ----------------------------------------------------------- */
/** Playing around with editable text
	* and local storage.*/
if (typeof(Storage) !== "undefined") {
	if (localStorage.getItem('user-name') !== null) {
		$('.user-name').text(localStorage.getItem('user-name'));
	}
	if (localStorage.getItem('user-description') !== null) {
		$('.user-description').text(localStorage.getItem('user-description'));
	}
	if (localStorage.getItem('user-birthday') !== null) {
		$('.user-birthday').text(localStorage.getItem('user-birthday'));
	}
						
	$('.user-name, .user-description, .user-birthday').on('input', function (e) {
		localStorage.setItem($(this).attr('class'), $(this).text());
	});
}
  

/* ----------------------------------------------------------- */
/*addActivity 新增活動*/
/* ----------------------------------------------------------- 
const button = document.querySelector('.addAct-btn')
const form   = document.querySelector('.addAct-form')

button.addEventListener('click', function() {
   form.classList.add('form--no') 
});*/