// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

var arrVuoto = [];

for (var i=0; i < 6; i++) {
    var askNum = parseInt(prompt('inserisci un numero'));
}
console.log(askNum);

function checkOdd(numero) {
    if (numero % 2 == 1) {
        return numero
    } else {
        console.log('il numero è pari');
    }
}

arrVuoto.push(checkOdd(askNum));
console.log(arrVuoto);