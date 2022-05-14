window.addEventListener('load', on => {
    loadPlayerCookie();
    cycleItems();
});



function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // ) removed
        var expires = "; expires=" + date.toGMTString(); // + added
    }
    else
        var expires = "";
    document.cookie = name + "=" + value + expires + ";path=/";
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

async function cycleItems() {
    var asdf = await fetch(["https://kekegaroll.github.io/onerollman/data/000_pinfo.txt"].join(''))
        .then(response => response.text());
}

function loadPlayerCookie() {
    var saveData = localStorage.getItem('saveData')
    if (saveData === undefined || saveData === null || saveData.length === 0) {
        localStorage.setItem('saveData', "test data");
    }
}

