$(function () {
    var windowW = $(window).width()
    var windowH = $(window).height();
    var contentH = windowH - 69 - 48 - 87;
    var content = $(".content").height();
    $(".middle_bg").height(contentH);
    $(".middle_bg").css({
        "overflow-x": "hidden"
    })

    if (windowW < 1366) {
        $("body").css({
            "overflow-x": "scroll"
        });
    } else {
        $("body").css({
            "overflow-x": "hidden"
        });
    }
    $('.main-sidebar_bg').height(windowH - 87)
    $('.main-sidebar_bg').css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    })
    $("body").mCustomScrollbar({
        theme:"minimal"
    });

});