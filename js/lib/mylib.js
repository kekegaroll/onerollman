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
    constructor(id, name, copies, datefound, latestdate) {
        this.id = parseInt(id);
        this.name = name;
        this.copies = parseInt(copies);
        this.datefound = datefound.toLocaleDateString("en-US");
        this.latestdate = latestdate.toLocaleDateString("en-US");
    }
    newFind() {
        ++copies;
        datefound = copies == 1 ? new Date().toLocaleDateString("en-US") : datefound;
        latestdate = new Date().toLocaleDateString("en-US");
    }
}