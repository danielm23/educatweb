$(document).foundation();

if ($(window).height() >= $(document).height()) {
    if ($(window).width() > 640) { //if not grid-stacked
        $("#main-container").height($("#body").height());
    }
}

$(window).resize(function () {
    if ($(window).height() >= $(document).height()) {   //known bug: .height() not yet updated when .resize() is called -> when shrinked, height is to big
        if ($(window).width() > 640) {
            $("#main-container").height($("#body").height());
        }
    }
});