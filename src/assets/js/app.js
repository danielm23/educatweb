$(document).foundation();

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
    if ($(window).width() > 640) { //if not grid-stacked
        var navHeight = $("#nav-container").height();
        $("#main-inner-container").css("padding-top", navHeight);
    }
});