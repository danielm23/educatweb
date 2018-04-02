var resElements = document.querySelectorAll("[data-res]");

var form = document.getElementById("signup");
if (form != null) {
    form.addEventListener("submit", submitSignup, false);
    var numberOfAdds = 0;
}

for (var i = 0; i < resElements.length; i++) {
    var resElement = resElements[i];
    var resKey = resElement.getAttribute("data-res");
    if (resKey) {
        for (var key in resources) {
            if (key.indexOf(resKey) == 0) {
                resElement.innerHTML = resources[key];
            }
        }
    }
}

$('.slide-container').on('setPosition', function () {
    resizeSlickSlider();
});

jQuery(document).ready(function () {
    setTimeout(function () {
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

    //check if exist
    if ($(".slickSc17").length) {
        addPhotosToSlider();
    }

    //check if exist
    if ($("#forwardEventArchive").length) {
        setTimeout(function () { location.href = "archiv.html" }, 0);
    }
});
$(document).foundation();

$(window).resize(function () {
    if ($(window).width() > 640) { //if not grid-stacked
        var navHeight = $("#nav-container").height();
        $("#main-inner-container").css("padding-top", navHeight);
    }
    resizeSlickSlider();
});

function addPhotosToSlider() {
    $.get("sc17Photos/Woche1/", function (data) {
        var photos = $(".photos1");
        var newPhotoUl = document.createElement("ul");
        var imgs = new Array();
        $(data).find("td > a").each(function () {
            imgs.push($(this).attr("href"));
        });

        for (var i = 1; i < imgs.length; i++) {
            var newPhotoLi = document.createElement("li");
            var newPhoto = document.createElement("img");
            newPhoto.setAttribute("src", "sc17Photos/Woche1/" + imgs[i]);
            newPhotoLi.append(newPhoto);
            newPhotoUl.append(newPhotoLi);
        }
        photos.append(newPhotoUl);

        $(".photos1").tiksluscarousel({
            width: 1000,
            height: 500,
            nav: 'thumbnails',
            current: 1,
            type: 'slide',
            autoplayInterval: 10000
        });
        /*$('.photos1').slick({
            "slidesToShow": 2,
            "slidesToScroll": 1,
            "focusOnSelect": true,
            "infinite": false,
            "adaptiveHeight": true
        });*/
    });

    $.get("sc17Photos/Woche2/", function (data) {
        var photos = $(".photos2");
        var newPhotoUl = document.createElement("ul");
        var imgs = new Array();
        $(data).find("td > a").each(function () {
            imgs.push($(this).attr("href"));
        });

        for (var i = 1; i < imgs.length; i++) {
            var newPhotoLi = document.createElement("li");
            var newPhoto = document.createElement("img");
            newPhoto.setAttribute("src", "sc17Photos/Woche2/" + imgs[i]);
            newPhotoLi.append(newPhoto);
            newPhotoUl.append(newPhotoLi);
        }
        photos.append(newPhotoUl);

        $(".photos2").tiksluscarousel({
            width: 1000,
            height: 500,
            nav: 'thumbnails',
            current: 1,
            type: 'slide',
            autoplayInterval: 10000
        });
        /*$('.slickphotos2').slick({
            "slidesToShow": 2,
            "slidesToScroll": 1,
            "focusOnSelect": true,
            "infinite": false,
            "adaptiveHeight": true
        });*/
    });
}

function addSignupField() {
    var container = document.getElementById("moreInputContainer");
    numberOfAdds++;
    var newElement = document.getElementById("dataInputChild").cloneNode(true);
    newElement.id = "";
    for (var i = 0; i < 3; i++) {
        var subElement = newElement.children[i].children[1];
        var inputElement = document.createElement("input");
        inputElement.type = subElement.type;
        inputElement.name = subElement.name + numberOfAdds;
        inputElement.placeholder = subElement.placeholder;
        newElement.children[i].removeChild(subElement);
        newElement.children[i].appendChild(inputElement);
    }
    var subElementG = newElement.children[3].children[1];
    var selectElementG = document.createElement("select");
    selectElementG.name = subElementG.name + numberOfAdds;
    selectElementG.appendChild(subElementG.children[0]);    //this is a move, not a copy!
    selectElementG.appendChild(subElementG.children[0]);
    newElement.children[3].removeChild(subElementG);
    newElement.children[3].appendChild(selectElementG);

    var newShirtElement = document.getElementById("dataInputThsirt").cloneNode(true);
    newShirtElement.id = "";
    var subElement = newShirtElement.children[1];
    var selectElement = document.createElement("select");
    selectElement.name = subElement.name + numberOfAdds;
    selectElement.appendChild(subElement.children[0]);  //this is a move, not a copy!
    selectElement.appendChild(subElement.children[0]);
    newShirtElement.removeChild(subElement);
    newShirtElement.appendChild(selectElement);

    var newWeekElement = document.getElementById("dataInputWeek").cloneNode(true);
    newWeekElement.id = "";
    var subElement1 = newWeekElement.children[1];
    var subElement1Label = newWeekElement.children[2];
    var subElement2 = newWeekElement.children[4];
    var subElement2Label = newWeekElement.children[5];
    var subElementBr = newWeekElement.children[3];
    var inputElement1 = document.createElement("input");
    var inputElement1Label = document.createElement("label");
    var inputElement2 = document.createElement("input");
    var inputElement2Label = document.createElement("label");
    inputElement1.type = subElement1.type;
    inputElement1.name = subElement1.name + numberOfAdds;
    inputElement1Label.for = subElement1Label.for;
    inputElement1Label.innerHTML = subElement1Label.innerHTML;
    inputElement2.type = subElement2.type;
    inputElement2.name = subElement2.name + numberOfAdds;
    inputElement2Label.for = subElement2Label.for;
    inputElement2Label.innerHTML = subElement2Label.innerHTML;
    newWeekElement.removeChild(subElement1);
    newWeekElement.removeChild(subElement1Label);
    newWeekElement.removeChild(subElement2);
    newWeekElement.removeChild(subElement2Label);
    newWeekElement.removeChild(subElementBr);
    newWeekElement.appendChild(inputElement1);
    newWeekElement.appendChild(inputElement1Label);
    newWeekElement.appendChild(subElementBr);
    newWeekElement.appendChild(inputElement2);
    newWeekElement.appendChild(inputElement2Label);

    var newShirtElementRow = document.createElement("div");
    var newEmptyElementColumn = document.createElement("div");
    newEmptyElementColumn.setAttribute("class", "large-7 small-12 columns");
    newShirtElementRow.setAttribute("class", "row");
    newShirtElementRow.appendChild(newShirtElement);
    newShirtElementRow.appendChild(newWeekElement);
    newShirtElementRow.appendChild(newEmptyElementColumn);

    container.appendChild(newElement);
    container.appendChild(newShirtElementRow);
}

function addSignupFieldWC() {
    var container = document.getElementById("moreInputContainer");
    numberOfAdds++;
    var newElement = document.getElementById("dataInputChild").cloneNode(true);
    newElement.id = "";
    for (var i = 0; i < 3; i++) {
        var subElement = newElement.children[i].children[1];
        var inputElement = document.createElement("input");
        inputElement.type = subElement.type;
        inputElement.name = subElement.name + numberOfAdds;
        inputElement.placeholder = subElement.placeholder;
        newElement.children[i].removeChild(subElement);
        newElement.children[i].appendChild(inputElement);
    }
    var subElementG = newElement.children[3].children[1];
    var selectElementG = document.createElement("select");
    selectElementG.name = subElementG.name + numberOfAdds;
    selectElementG.appendChild(subElementG.children[0]);    //this is a move, not a copy!
    selectElementG.appendChild(subElementG.children[0]);
    newElement.children[3].removeChild(subElementG);
    newElement.children[3].appendChild(selectElementG);

    container.appendChild(newElement);
}

function submitSignup(event) {
    event.preventDefault();

    var data = getSignupData();

    //check if shuttle and earlybird is checked together
    if (!validShuttleEarly(data.shuttle, data.fruehbetreuung)) {
        if (document.getElementById("checkboxInvalid").classList.contains('hidden')) {
            document.getElementById("checkboxInvalid").classList.remove('hidden');
            return false;
        }
    } else {
        if (!document.getElementById("checkboxInvalid").classList.contains('hidden')) {
            document.getElementById("checkboxInvalid").classList.add('hidden');
        }
    }

    //check if mail is valid (most browsers check this by themself already)
    if (!validEmail(data.mail)) {
        if (document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.remove('hidden');
            return false;
        }
    } else {
        if (!document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.add('hidden');
        }
    }

    //send mail and send data to google doc
    {
        var i = 1;
        while (data.hasOwnProperty('name' + i)) {
            i++;
        }
        var numberOfChildren = i;
        
        var children = data.name;

        for (var i = 1; i < numberOfChildren; i++) {
            children += " und " + data['name' + i];
        }

        $.post("sendMail.php",
        {
            mail: data.mail,
            subject: 'Anmeldung Science Camp',
            text: 'Guten Tag,\n\ndie Anmeldung für das Science Camp 2018 für ' + children + ' ist bei uns eingegangen. Wir werden die Anmeldedaten manuell prüfen und uns dann nochmals per EMail melden.\n\nViele Grüße,\ndas Educat Team'
        },
        function () { });

        var url = event.target.action;
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function () {
            console.log(request.status, request.statusText)
            console.log(request.responseText);
            if (!document.getElementById("signup").classList.contains('hidden')) {
                document.getElementById("signup").classList.add('hidden');
            }
            if (!document.getElementById("signupClicked").classList.contains('hidden')) {
                document.getElementById("signupClicked").classList.add('hidden');
            }
            if (document.getElementById("signupFinished").classList.contains('hidden')) {
                document.getElementById("signupFinished").classList.remove('hidden');
            }
            return;
        };

        var encoded = Object.keys(data).map(function (m) {
            return encodeURIComponent(m) + "=" + encodeURIComponent(data[m])
        }).join("&")
        request.send(encoded);
        if (!document.getElementById("signup").classList.contains('hidden')) {
            document.getElementById("signup").classList.add('hidden');
        }
        if (document.getElementById("signupClicked").classList.contains('hidden')) {
            document.getElementById("signupClicked").classList.remove('hidden');
        }
    }
}

function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validShuttleEarly(shuttle, early) {
    if (shuttle && early) {
        return false;
    }
    return true;
}

function getSignupData() {
    var inputElements = document.getElementById("signup").elements;
    var inputFields = Object.keys(inputElements).map(function (m) {
        if (inputElements[m].name !== undefined) {
            return inputElements[m].name;
        }
        else if (inputElements[m].length > 0) {
            return inputElements[m].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var data = {};
    inputFields.forEach(function (m) {
        data[m] = inputElements[m].value;
        if (inputElements[m].type === "checkbox") {
            data[m] = inputElements[m].checked;
        }
        else if (inputElements[m].length) {
            for (var i = 0; i < inputElements[m].length; i++) {
                if (inputElements[m].item(i).checked) {
                    data[m] = inputElements[m].item(i).value;
                }
            }
        }
    });

    return data;
}

function resizeSlickSlider() {
    $slickSlider = $('.slide-container');
    $slickSlider.find('.slick-slide').height('auto');

    var slickTrack = $slickSlider.find('.slick-track');
    var slickTrackHeight = $(slickTrack).height();

    $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');
}