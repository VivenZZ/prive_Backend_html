
$(function () {
  var windowW = $(window).width()
  var windowH = $(window).height();
  var contentH = windowH  - 69 - 48 -87;
  var content = $(".content").height();
  $(".middle_bg").height(contentH);
  $(".middle_bg").css({
      "overflow-x": "hidden"
  })
  $('.middle_bg').perfectScrollbar({
    cursorwidth: 0
      });
  
  if (windowW < 1366) {
      $("body").css({
          "overflow-x": "scroll"
      })
  } else {
      $("body").css({
          "overflow-x": "hidden"
      })
  }

  setTimeout(function(){
      console.log(windowH)
      $('.slimScrollDiv').height(windowH - 77)
      $('.slimScrollDiv').css({
          "overflow-y": "scroll"
      })
      $('.slimScrollDiv').perfectScrollbar({
    cursorwidth: 0
      });
  },0)
})