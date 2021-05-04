// Generatore di “nomi cognomi” casuali:
// scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var arrNomi = ["paolo ", "mario ", "alessio ", "giovanni ", "maria "];
// console.log(arrNomi);
var arrCognomi = ["rossi", "verdi", "bianchi", "biase", "conte"];
// console.log(arrCognomi);

// document.getElementById('nomi').innerHTML = '<li>'  + arrNomi + '</li>';

for (var i = 0; i < arrNomi.length; i++) {
    var nomiTempo = arrNomi[i];
    document.getElementById("nomi").innerHTML += '<li>'  + arrNomi[i] + '</li>';
    // var nomiArrFor = arrNomi[i];
    // console.log(nomiArrFor);
}
for (var x = 0; x < arrCognomi.length; x++) {
    var nomiTempo = arrCognomi[x];
    document.getElementById("cognomi").innerHTML += '<li>'  + arrCognomi[x] + '</li>';
    var cognomiArrFor = arrCognomi[x];
    // console.log(cognomiArrFor);
}

function nomiCognomi(arrNomi, arrCognomi) {
    var nomeRandom = arrNomi[Math.floor(Math.random() * arrNomi.length)];
    //console.log('nome random: ' + nomeRandom);

    var cognomeRandom = arrCognomi[Math.floor(Math.random() * arrCognomi.length)];
    //console.log('cognome random: ' + cognomeRandom);
    
    return nomeRandom + " " + cognomeRandom;
}

for (var y = 0; y < 10; y++) {
    var nomeCognomeRandom = nomiCognomi(arrNomi, arrCognomi);
    document.getElementById("nomi_e_cognomi").innerHTML += '<li>'  + nomeCognomeRandom + '</li>';
    // console.log(nomeCognomeRandom);
}
