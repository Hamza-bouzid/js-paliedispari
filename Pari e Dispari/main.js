/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let pariDispari = prompt("pari o dispari?");
let numero = parseInt(prompt("Scegli un numero"));

function numeroRandom() {
  return parseInt(Math.floor(Math.random() * 5) + 1);
}
let numeroPc = numeroRandom();
let somma = numero + numeroPc;

console.log("Hai scelto:", pariDispari);
console.log("Il numero che hai scelto:", numero);
console.log("Il numero generato dal Pc:", numeroPc);
console.log("La somma dei due numeri:", somma);

function checkNumber() {
  if (somma % 2 != 0) {
    somma = "dispari";
  } else {
    somma = "pari";
  }

  return somma;
}

let numberChecked = checkNumber();

if (numberChecked == pariDispari) {
  console.log("Hai Vinto :) il numero è:" + " " + numberChecked);
} else {
  console.log("Hai Perso :( il numero è:" + " " + numberChecked);
}
