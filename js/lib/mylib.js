//clamp func
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

//prevent img drag
$('img').on('dragstart', function (event) { event.preventDefault(); });

/// Weird auto-round for float numbers
function fRound(x) {
    return parseFloat(Number(x).toFixed(Math.max(-Math.log10(x) + 1, 2))); //blackmagic
}

/// FileReader as text
function readTF(path) {
    return fetch(path)
        .then(response => { if (response.ok === true) return response.text() });
}

/// RNG between range inclusive of min/max
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// function length(id) {
//     return JSON.stringify(['length[', id, ']', c.charCodeAt(0)].join(''));
// }

//statsLoader_0.js
class StatItemClassObj {
    constructor(name, total) {
        this.name = name.length < 1 ? "Special" : name;
        this.total = parseInt(total);
        this.dropchance = fRound(parseFloat(total) / _stats_actualitems * 100);
    }
}
class StatItemLevelObj {
    constructor(total) {
        this.total = parseInt(total);
        this.dropchance = fRound(parseFloat(total) / _stats_actualitems * 100);
    }
}
class StatStatItemQualityObj {
    constructor(name, total) {
        this.name = name;
        this.total = parseInt(total);
        this.dropchance = fRound(parseFloat(total) / _stats_actualitems * 100);
    }
}
class StatItemSlotObj {
    constructor(name, total) {
        this.name = name.length < 1 ? "Special" : name;
        this.total = parseInt(total);
        this.dropchance = fRound(parseFloat(total) / _stats_actualitems * 100);
    }
}

//player_1.js
class CollectionItem {
    constructor(id, copies, name, ilvl, datefound, latestdate) {
        this.id = parseInt(id);
        this.name = name;
        this.copies = parseInt(copies);
        this.ilvl = parseInt(ilvl);
        this.datefound = datefound;
        this.latestdate = latestdate;
    }
    newFind() {
        ++this.copies;
        this.datefound = this.copies == 1 ? new Date().toLocaleDateString("en-US") : this.datefound;
        this.latestdate = new Date().toLocaleDateString("en-US");
    }
}