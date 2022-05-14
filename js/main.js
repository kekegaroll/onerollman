import { _stats_actualitems } from 'https://kekegaroll.github.io/onerollman/statsLoader.js'
import { ItemClassRec } from 'https://kekegaroll.github.io/onerollman/statsLoader.js'
import { ItemLevelRec } from 'https://kekegaroll.github.io/onerollman/statsLoader.js'
import { ItemQualityRec } from 'https://kekegaroll.github.io/onerollman/statsLoader.js'
import { ItemSlotRec } from 'https://kekegaroll.github.io/onerollman/statsLoader.js'

window.addEventListener('load', () => {
    document.getElementById('roll-multi-nu').addEventListener('click', getFileInfo());
});


roll - multi - nu
var cards = document.querySelectorAll('.flipcard');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.add('is-flipped');
    });
});

async function getFileInfo() {
    var text = await (await _readTextFile(17)).split("#");

    var img = ["https://kekegaroll.github.io/onerollman/data/img/", text[0]].join('');
    document.getElementById("item_display").src = img;




    var tag_id = document.getElementById('divtoshow');
    tag_id.innerHTML = text[1];

    console.log(text);

    console.log(_stats_actualitems);
    console.log(ItemClassRec);
    console.log(ItemLevelRec);
    console.log(ItemQualityRec);
    console.log(ItemSlotRec);
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