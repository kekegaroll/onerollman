window.addEventListener('load', () => {
    // document.getElementById('roll-multi-nu').addEventListener('click', getMultiRollNU());
});


var cards = document.querySelectorAll('.flipcard');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.add('is-flipped');
    });
});

async function getMultiRollNU() {
    var text;
    while (true) {
        try {
            text = (await readTF([
                "https://kekegaroll.github.io/onerollman/data/",
                randomIntFromInterval(0, 60000),
                ".html"
            ].join(''))).toString().split('#');
            if (typeof text !== 'undefined') { console.log(text); break };
        } catch { }

    }
    //collection[text[0]]= 

    var img = ["https://kekegaroll.github.io/onerollman/data/img/", text[0]].join('');
    document.getElementById("item_display").src = img;

    var tag_id = document.getElementById('divtoshow');
    tag_id.innerHTML = text[1];
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