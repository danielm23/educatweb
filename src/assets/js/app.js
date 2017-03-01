var resElements = document.querySelectorAll('[data-res]');
for (var i = 0; i < resElements.length; i++) {
    var resElement = resElements[i];
    var resKey = resElement.getAttribute('data-res');
    if (resKey) {
        for (var key in resources) {
            if (key.indexOf(resKey) == 0) {
                resElement.innerHTML = resources[key];
            }
        }
    }
}
jQuery(document).ready(function () {
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
$(document).foundation();

$(window).resize(function () {
    if ($(window).width() > 640) { //if not grid-stacked
        var navHeight = $("#nav-container").height();
        $("#main-inner-container").css("padding-top", navHeight);
    }
});