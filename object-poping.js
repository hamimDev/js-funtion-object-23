var soppingCard = {
    book: 3,
    sunGlass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 25,
    shoes: 2
}

var allKeys = Object.keys(soppingCard);
var allValues = Object.values(soppingCard);
for(i = 0; i<allKeys.length; i++){
    var allOk = allKeys[i];
    var allVa = soppingCard[allOk]
    // console.log(allOk, allVa);
}

for(var allKeys in allValues){
    console.log(allValues);
}