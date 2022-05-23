//global
let isLoading = false;

//mylib.js
let c = 'abcdefghijklmnopqrstuvwxyz1234567890';

//player_1.js
let collection = {};

//statsLoader_0.js
let
    _stats_actualitems,
    ItemClassRec = {},
    ItemLevelRec = {},
    ItemQualityRec = {},
    ItemSlotRec = {};

function encrypt(data) {
    return CryptoJS.AES.encrypt(data, "ASDF");
}
function decrypt(data) {
    return CryptoJS.AES.decrypt(data, "ASDF");
}