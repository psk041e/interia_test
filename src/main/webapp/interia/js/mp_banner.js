// 팝업
$(document).ready(function() {
	$(".mp-pic-focus").click(function() {
	    $(".mp-cover-popup").toggle();
	});
	$(".mp-popup-hidden").click(function() {
	    $(".mp-cover-popup").css("display","none");
	});
	console.log($(window).width());
	console.log($(document).width());
});
$(document).click(function (e) {
	var popup = $(".mp-cover-popup");
	if (!popup.is(e.target) && popup.has(e.target).length === 0){
		popup.css("display","none");
	}	
});

//Input을 버튼으로 클릭
window.onload = function() {
	var fileSelect = document.getElementById("fileSelect"),
	fileElem = document.getElementById("fileupload");
	
	fileSelect.addEventListener("click", function (e) {
	  if (fileElem) {
	    fileElem.click();
	  }
	}, false);
}


// cropit
$(function() {
	$('.image-editor').cropit({
		imageState: {src: ''},
		width: $(window).resize(function() { 
			alert("resize");
			$(window).width();
		}),
		maxZoom: '10',
		allowDragNDrop: false,
		initialZoom: 'image',
		/*quality: 0.5*/
		/*smallImage: 'allow',*/
		onImageError: function() {
		    console.log("error");
		},
		onImageLoading: function() {
	        $(".mp-banner-image")
	        	.css({
	        		"z-index": "100",
	        		"opacity": "1"
	        	});
	        $(".cropit-preview")
	        	.css({
	        		"opacity": "1"
	        	});
	        $(".mp-slider")
	        	.css({
	        		"opacity": "1"
	        	});
		}
	});
});


// 파일 업로드
/* "use strict"

$('#fileupload').fileupload({
  url: '../../../json/mpfile/upload',        // 서버에 요청할 URL
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
  autoUpload: false,
  add: function (e, data) {
    console.log('add()...');
    console.log(data.files);
    $('<img>')
       .attr('src', '../files/' + data.result.filename)
       .appendTo($("#mp-images-div"));
    $('#upload-btn').click(function() {
        data.submit(); // submit()을 호출하면, 서버에 데이터를 보내기 전에 submit 이벤트가 발생한다.
    });
  },
  done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
    console.log('done()...');
    console.log(data.result);
    $.each(data.result.files, function(index, file) {
      $('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
    });
  }
});  */

