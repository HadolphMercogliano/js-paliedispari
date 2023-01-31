// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// l'utente sceglie pari o dispari
let userChoise = prompt('scegli "pari" o "dispari"');
console.log(userChoise);
// l'utente inserisce un numero da 1 a 5
let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(userNumber);

// generiamo un numero random da 1 a 5 per il pc (funzione)
let pcNumber = randomNumber();
console.log(pcNumber);

// sommiamo i 2 Numeri (funzione)
let somma = pcNumber + userNumber;

if (pariODispari(somma) == userChoise) {
  console.log("Hai vinto");
} else {
  console.log("Il pc ha vinto");
}
// dichiariamo se ha vinto pari o dispari

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}

// controlliamo se la somma dei 2 numeri è pari o dispari
function pariODispari(num) {
  if (num % 2 == 0) {
    console.log(`${somma} è pari`);
    return "pari";
  }
  console.log(`${somma} è dispari`);

  return "dispari";
}
