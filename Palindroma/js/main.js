// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere all' utente una parola
const userWord = prompt("inserisci la parola da controllare");

// confrontando le lettere prima-ultima, seconda-penultima, terza-terzultima, ecc se sono uguali la parola è palindroma

//stampa se la parola è palidndroma o no
const risultato = palindroma(userWord);
console.log(risultato);

// funzione
function palindroma(string) {
  const wordLength = userWord.length;
  for (i = 0; i < wordLength / 2; i++) {
    if (userWord[i] !== userWord[wordLength - 1 - i]) {
      return `${userWord} non è una parola palindroma`;
    }
  }
  return `${userWord} è una parola palindroma`;
}
