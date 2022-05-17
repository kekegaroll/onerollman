window.addEventListener('load', () => {
    localStorage.clear();
    loadPlayerLS();
});

function loadSaveData(data) {
    data.split('\n').forEach(element => {
        collection[element.substring(0, element.indexOf('>'))] = new CollectionItem(

        )});
    return data;
}

function obtainItem(){

}

function saveSaveData() {
    localStorage.setItem('saveData', collection);
}

async function loadPlayerLS() {
    var saveData = localStorage.getItem('saveData');
    if (saveData === undefined || saveData === null || saveData.length === 0) {
        saveData = await readTF("https://kekegaroll.github.io/onerollman/data/000_pinfo.txt"); //new SaveData
    }
    localStorage.setItem('saveData', loadSaveData(saveData));
}

