$(document).foundation();

//if ($(window).height() >= $(document).height()) {
//    if ($(window).width() > 640) { //if not grid-stacked
//        $("#main-container").height($("#body").height());
//    }
//}

jQuery(document).ready(function() {
    setTimeout(function() {
        if ($(window).width() > 640) { //if not grid-stacked
            var navHeight = $("#nav-container").height();
            if (navHeight != 0) {
                $("#main-inner-container").css("padding-top", navHeight);
            }
        }
    }, 100);
    setTimeout(function () {
        if ($(window).width() > 640) { //if not grid-stacked
            var navHeight = $("#nav-container").height();
            if (navHeight != 0) {
                $("#main-inner-container").css("padding-top", navHeight);
            }
        }
    }, 2000);
});


$(window).resize(function () {
    //if ($(window).height() >= $(document).height()) {   //known bug: .height() not yet updated when .resize() is called -> when shrinked, height is to big
    //    if ($(window).width() > 640) {
    //        $("#main-container").height($("#body").height());
    //    }
    //}
    if ($(window).width() > 640) { //if not grid-stacked
        var navHeight = $("#nav-container").height();
        $("#main-inner-container").css("padding-top", navHeight);
    }
});