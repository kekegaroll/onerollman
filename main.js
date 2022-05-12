let basePath = ''


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

$('.flip-container .flipper').click(function() {
    $(this).closest('.flip-container').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});


async function getFileInfo() {
    var text = await (await _readTextFile(17)).split("#");

    var img = ["https://kekegaroll.github.io/onerollman/data/img/", text[0]].join('');
    document.getElementById("item_display").src= img;




    var tag_id = document.getElementById('divtoshow');
    tag_id.innerHTML = text[1];

    console.log(text);
}

function hoverdiv(e, divid) {

    var left = e.clientX + "px";
    var top = e.clientY + "px";

    var div = document.getElementById(divid);

    div.style.left = left;
    div.style.top = top;

    $("#" + divid).toggle();
    return false;
}

function _readTextFile(id) {
    var html = [
        "https://kekegaroll.github.io/onerollman/data/",
        id,
        ".html"
    ];
    return fetch(html.join(""))
        .then(response => response.text());
}


// setCookie('ppkcookie','testcookie',7);

// var x = getCookie('ppkcookie');
// if (x) {
//     [do something with x]
// }