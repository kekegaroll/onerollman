window.addEventListener('load', () => {
    parseStatsData();
});

async function parseStatsData() {
    var stats = await readTF("https://kekegaroll.github.io/onerollman/data/000_stats.txt");
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

    // console.log(_stats_actualitems);
    // console.log(ItemClassRec);
    // console.log(ItemLevelRec);
    // console.log(ItemQualityRec);
    // console.log(ItemSlotRec);
}
