$(function () {
    var windowW = $(window).width()
    var windowH = $(window).height();
    var contentH = windowH - 69 - 48 - 87;
    var content = $(".content").height();
    $(".middle_bg").height(contentH);
    $(".middle_bg").css({
        "overflow-x": "hidden"
    })
    new PerfectScrollbar('.middle_bg');

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
        "overflow-y": "scroll"
    })
    new PerfectScrollbar('.main-sidebar_bg');
    // //
    var browserInfo = getBrowserInfo();
    $(".treeview ").on('click', function () {
    
        if (!browserInfo || browserInfo == 'UC') {
    
            $('.main-sidebar_bg').height(windowH - 87)
            $('.main-sidebar_bg').css({
                "overflow-y": "scroll"
            })
            new PerfectScrollbar('.main-sidebar_bg');
        }
    });

    function getBrowserInfo() {
        var ua = navigator.userAgent.toLocaleLowerCase();
        var browserType = null;
        if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
            browserType = "IE";
            browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
        } else if (ua.match(/firefox/) != null) {
            browserType = "火狐";
        } else if (ua.match(/ubrowser/) != null) {
            browserType = "UC";
        } else if (ua.match(/opera/) != null) {
            browserType = "欧朋";
        } else if (ua.match(/bidubrowser/) != null) {
            browserType = "百度";
        } else if (ua.match(/metasr/) != null) {
            browserType = "搜狗";
        } else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
            browserType = "QQ";
        } else if (ua.match(/maxthon/) != null) {
            browserType = "遨游";
        } else if (ua.match(/chrome/) != null) {
            var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
            if (is360) {
                browserType = '360';
            }
        } else if (ua.match(/safari/) != null) {
            browserType = "Safari";
        }
        return browserType;
    }

    function _mime(option, value) {
        var mimeTypes = navigator.mimeTypes;
        for (var mt in mimeTypes) {
            if (mimeTypes[mt][option] == value) {
                return true;
            }
        }
        return false;
    }
});