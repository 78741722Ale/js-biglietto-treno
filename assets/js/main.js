/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

///#region

///#endregion

// chiedere all'utente il numero di chilometri che vuole percorrere
const userKilometers = parseInt(prompt("Inserisci il numero di Chilometri che vuoi percorrere"));
console.log(userKilometers);
// chiedere all'utente l'età
const userAge = parseInt(prompt("Quanti Anni Hai?"));
console.log(userAge);
//messaggio di errore se sbaglia ad inserire l'età, da 10 ai 99 anni
if (userAge <= 10 && userAge >= 99 || isNaN(userAge)) {
    alert('Inserisci un numero tra i 10 anni e i 99 anni');
}

// Sulla base di queste informazioni calcola :
// costanti fisse - prezzo al km
const price_for_km = 0.21;
console.log(price_for_km);

// variabile - età dichiarata under 18
let under_age = 17;
// Sconto per Under 18
const sales_under_age = 0.8;

// variabile - età dichiarata over 65
let over_age = 66;
// Sconto per Over 65
const sales_over_age = 0.6;

/// prezzo totale del viaggio in base ai KM, per persone tra i 18 anni e i 64
let b = (price_for_km * userKilometers);
// quello che verrà visualizzato
document.getElementById("Prova").innerHTML = b;

if (userAge > under_age) {
    /// prezzo totale del viaggio in base ai KM, per persone under 18 + sconto del 20%
    let c = (b * sales_under_age); 
    document.getElementById("Prova").innerHTML = c.toPrecision(4);
} else if (userAge < over_age) {
    /// prezzo totale del viaggio in base ai KM, per persone over 65 + sconto del 40%
    let d = (b * sales_under_age);
    document.getElementById("Prova").innerHTML = d.toPrecision(4);
}


