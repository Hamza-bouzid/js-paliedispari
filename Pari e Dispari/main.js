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

function checkNumber() {
  if (somma % 2 != 0) {
    somma = "dispari";
  } else {
    somma = "pari";
  }

  return somma;
}

const container = document.getElementById("container");
container.innerHTML = `
<ul>
 <li>Hai scelto: <span>${pariDispari.toLowerCase()}</span></li>
 <li>Il numero che hai scelto: <span>${numero}</span></li>
 <li>Il numero generato dal Pc: <span>${numeroPc}</span></li>
 <li>La somma dei due numeri: <span>${somma}</span></li>
<ul>
`;

let numberChecked = checkNumber();
if (numberChecked == pariDispari.toLowerCase()) {
  container.innerHTML += `
<ul>
 <li class="win">Hai Vinto :) il numero è ${numberChecked}</li>
<ul>
`;
} else {
  container.innerHTML += `
  <ul>
   <li class="lose">Hai Perso :( il numero è ${numberChecked}</li>
  <ul>
  `;
}
