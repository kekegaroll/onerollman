window.addEventListener('load', () => {
    parseStatsData();
});

let _stats_actualitems;

let
    ItemClassRec = {},
    ItemLevelRec = {},
    ItemQualityRec = {},
    ItemSlotRec = {};

function getStatsData() {
    return fetch("https://kekegaroll.github.io/onerollman/data/000_stats.txt")
        .then(response => response.text());
}

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
    constructor(name,total) {
        this.name = name;
        this.total = parseInt(total);
        this.dropchance = fRound(parseFloat(total) / _stats_actualitems * 100);
    }
}
class StatItemSlotObj {
    constructor(name,total) {
        this.name = name.length < 1 ? "Special" : name;
        this.total = parseInt(total);
        this.dropchance = fRound(parseFloat(total) / _stats_actualitems * 100);
    }
}

async function parseStatsData() {
    var stats = await getStatsData();
    _stats_actualitems = parseFloat(stats.match(/(.*?actualitems.*$)/gm).toString().split('>')[1].trim());

    var _stats_class = stats.match(/(\bclass.*$)/gm);
    _stats_class.forEach(element => {
        ItemClassRec[element.substring(9, element.indexOf('#'))] = new StatItemClassObj(
            /*classname*/element.substring(element.indexOf('#') + 1, element.indexOf(']')),
            /*total*/element.substring(element.lastIndexOf('#') + 1));
    });

    var _stats_ilvl = stats.match(/(.*?ilvl.*$)/gm);
    _stats_ilvl.forEach(element => {
        /*ilvl*/ ItemLevelRec[element.substring(element.indexOf('[') + 1, element.indexOf(']'))] = new StatItemLevelObj(
            /*total*/element.substring(element.lastIndexOf(']') + 2));
    });

    var _stats_quality = stats.match(/(.*?quality.*$)/gm);
    _stats_quality.forEach(element => {
        ItemQualityRec[element.substring(element.indexOf('[')+1, element.indexOf(']'))] = new StatStatItemQualityObj(
            /*qualityname*/element.substring(element.indexOf(']') + 2, element.indexOf('#')),
            /*total*/element.substring(element.lastIndexOf('#') + 1));
    });

    var _stats_slot = stats.match(/(.*?slot.*$)/gm);
    _stats_slot.forEach(element => {
        ItemSlotRec[element.substring(element.indexOf('[')+1, element.indexOf(']'))] = new StatItemSlotObj(
            /*slotname*/element.substring(element.indexOf(']') + 2, element.indexOf('#')),
            /*total*/element.substring(element.lastIndexOf('#') + 1));
    });

    
}
function fRound(x) {
    return parseFloat(Number(x).toFixed(Math.max(-Math.log10(x) + 1, 2))); //blackmagic
}

export { _stats_actualitems };
export { ItemClassRec };
export { ItemLevelRec };
export { ItemQualityRec };
export { ItemSlotRec };