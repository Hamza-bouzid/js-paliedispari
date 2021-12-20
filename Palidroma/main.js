/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Prompt per chiedere parola da inserire
let parola = prompt("Inserisci una parola");
if (parola == "") {
  do {
    parola = prompt("Devi Inserire una parola");
  } while (parola == "");
}
// Inserisco i vari carattteri della variabile parola all'interno di una Array
const caratteri = [...parola];

console.log(caratteri);

// Con un ciclo for prendo i sigoli caratteri dall'ultimo e li pusho all'interno di una nuova array
let output = [];
for (let i = caratteri.length - 1; i > -1; i--) {
  output.push(caratteri[i]);
}

console.log(output);
// Creo una funzione che andra a verificare se il contenuto delle due array coincide
let check = false;
function checkParola() {
  for (let i = 0; i < caratteri.length; i++) {
    if (caratteri[i] === output[i]) {
      check = true;
    } else {
      check = false;
    }

    if (check) {
      return alert("La parola inserita è palidroma :)");
    } else {
      return alert("La parola inserita non è palidroma :(");
    }
  }
}

checkParola();
