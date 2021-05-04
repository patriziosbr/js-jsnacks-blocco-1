// Generatore di “nomi cognomi” casuali:
// scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.



var arrNomi = ["paolo", "mario", "alessio", "giovanni", "maria"];
var arrCognomi = ["rossi", "verdi", "bianchi", "biase", "conte"];


// document.getElementById('nomi').innerHTML = '<li>'  + arrNomi + '</li>';

for (var i = 0; i < arrNomi.length; i++) {
    var nomiTempo = arrNomi[i];
    document.getElementById("nomi").innerHTML += '<li>'  + arrNomi[i] + '</li>';
}

for (var i = 0; i < arrCognomi.length; i++) {
    var nomiTempo = arrCognomi[i];
    document.getElementById("cognomi").innerHTML += '<li>'  + arrCognomi[i] + '</li>';
}


