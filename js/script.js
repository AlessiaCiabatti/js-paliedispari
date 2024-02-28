// // 1
// // chiedere con prompt la parola
// let domanda = prompt ('Inserisci una parola palindroma');

// // richiamo la funzione
// palindroma (domanda);

// // 2
// // funzione dove verifico la parola palindroma
// function palindroma (parola){

// console.log(parola);

// // 2
// // .split(') serve a dividere le lettere e trasforma la stringa in un array
// let parolaDivisa = parola.split('');
// console.log(parolaDivisa);

// // 3
// // .reverse inverte la direzione della parola
// let parolaInvertita = parolaDivisa.reverse();
// console.log(parolaInvertita);

// // 4
// // .join dobbiamo riunire le lettere e trasformarla nuovamente in una stringa
// let parolaRicomposta = parolaInvertita.join('');
// console.log(parolaRicomposta);

// // 5
// // dobbiamo condrontare le stringhe
// if (parola === parolaRicomposta){
//   console.log('Hai scritto una parola palindroma')
// }else{
//   console.log('Attenzione! Non hai scritto una parola palindroma')
// }
// }

let parola = prompt('Scrivi un nome palindromo');
console.log(parola);

let parolaPalindroma = palindroma();

function palindroma(){
  for (i = 0; i = parola.length-1; i++){
    if(parola[i] !== parola[(parola.length-1)-i]){
    return false;
    }
  }
}

console.log(parolaPalindroma);




/////////////////////////////////////////
let output = document.querySelector('h1');
let risultato= '';
let messaggio = '';

// 1
// chideo con prompt pari o dispari
let pariDispari = prompt('Scrivi pari o dispari');

// 2 chideo con prompt un numero da uno a cinque
let utenteNumber = parseInt(prompt('Scrivi un numero da 1 a 5'));
console.log(utenteNumber);

// 3
// richiamo variabile con numeri e creo variabile
let numeroCasuale = randomNumber(1, 5);
console.log(numeroCasuale);

// 4 somma numeri
let sommaNumeri = utenteNumber + numeroCasuale;
console.log(sommaNumeri);

// 5
evenOdd();

// 6
// vincitore
if (risultato === pariDispari){
  messaggio = 'Hai vitno!';
}else{
  messaggio = 'Hai perso!';
  console.log(messaggio);
}

output.innerHTML = `La somma dei due numeri è ${risultato}. <br> ${messaggio}`

// 5
// funciotn
function evenOdd (){
  if (sommaNumeri % 2 === 0){
    risultato = 'pari';
  }else{
    risultato = 'dispari';
    console.log(risultato);
  }
}

// 3
// function
/**
 * 
 * @param {1} min 
 * @param {5} max 
 * @returns 
 */
function randomNumber (min, max){
  return Math.ceil(Math.random() * (max - min) + min);
}
