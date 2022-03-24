
//Consegna
/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */
///#endregion

// chiedere all'utente il numero di chilometri che vuole percorrere
const userKilometers = parseInt(prompt("Inserisci il numero di Chilometri che vuoi percorrere"));
console.log(userKilometers);
//messaggio di errore se sbaglia ad inserire numero
if (isNaN(`${userKilometers}`)) {
    alert('Inserisci valori numerici');
}
// chiedere all'utente l'età
const userAge = parseInt(prompt("Quanti Anni Hai?"));
console.log(userAge);
//messaggio di errore se sbaglia ad inserire l'età, da 10 ai 99 anni
if (isNaN(`${userAge}`)) {
    alert('Inserisci valori numerici');
}
// Sulla base di queste informazioni calcola :
// costanti fisse - prezzo al km
let price_for_km = 0.21;
console.log(price_for_km);

/// prezzo totale del viaggio in base ai KM, per persone tra i 18 anni e i 64
let price_adults = (price_for_km * userKilometers);

// variabile - età dichiarate
const under_age = 18;
const over_age = 65;
// Sconto per Under 18
const sales_under_age = 0.8;
const sales_over_age = 0.6;


if (userAge < under_age) {
    /// prezzo totale del viaggio in base ai KM, per persone under 18 + sconto del 20%
    let under = (price_adults * sales_under_age);
    document.getElementById("under").innerHTML = under.toPrecision(3);
} else if (userAge > over_age) {
    /// prezzo totale del viaggio in base ai KM, per persone over 65 + sconto del 40%
    let over = (price_adults * sales_over_age);
    document.getElementById("over").innerHTML = over.toPrecision(3);
} else {
    /// prezzo totale del viaggio in base ai KM, per persone tra i 18 e i 65
    let = price_adults
    document.getElementById("adults").innerHTML = price_adults.toPrecision(3);
}





