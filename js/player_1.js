window.addEventListener('load', () => {
    verifyStorage();
});

async function verifyStorage() {
    baseData = await readTF("https://kekegaroll.github.io/onerollman/data/000_pinfo.txt");
    var validarr = baseData.split('\n');
    var pbar = document.getElementById('pbar-1');
    var element, lsKey, progress, id, lsVal;
    for (let i = 0; i < 30/*validarr.length*/; i++) {
        setTimeout(function () {
            //progress bar update code
            progress = Math.ceil(i / validarr.length * 100);
            pbar.setAttribute('style', ['width:', progress, '%'].join(''));
            pbar.innerHTML = [progress, '%'].join('');

            //localstorage update/verify
            element = validarr[i].split(',');
            id = element[0];
            lsKey = localStorage.getItem(id);
            if (lsKey === undefined || lsKey === null || lsKey.length === 0) {
                localStorage.setItem(id, encrypt(element, id));
            }
            lsVal = lsKey.split(',');

            collection[id] = new CollectionItem(
                /* id */ id,
                /* copies */ lsVal[1],
                /* name */ lsVal[2],
                /* ilvl */ lsVal[3],
                /* datefound */ lsVal[4],
                /* latestdate */ lsVal[5]
            );
            console.log(lsVal);
        }, 0);
    };
}

function saveSaveData(id) {
    localStorage.setItem(JSON.stringify(id), encrypt(JSON.stringify(collection[id]), id));
}

function deleteSaveData() {
    if (confirm("Delete ALL save game data?")) {
        localStorage.clear();
    }
}

function obtainItem(id) {
    console.log(id);
    collection[id].newFind();
    saveSaveData();
    console.log(decrypt(localStorage.getItem(id), id));
}

