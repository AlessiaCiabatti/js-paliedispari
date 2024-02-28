// 1
// chiedere con prompt la parola
let domanda = prompt ('Inserisci una parola palindroma');


palindroma (domanda);

// 2
// funzione dove verifico la parola palindroma
function palindroma (parola){

console.log(parola);

// 2
// .split(') serve a dividere le lettere e trasforma la stringa in un array
let parolaDivisa = parola.split('');
console.log(parolaDivisa);

// 3
// .reverse inverte la direzione della parola
let parolaInvertita = parolaDivisa.reverse();
console.log(parolaInvertita);

// 4
// .join dobbiamo riunire le lettere e trasformarla nuovamente in una stringa
let parolaRicomposta = parolaInvertita.join('');
console.log(parolaRicomposta);

// 5
// dobbiamo condrontare le stringhe
if (parola === parolaRicomposta){
  console.log('Hai scritto una parola palindroma')
}else{
  console.log('Attenzione! Non hai scritto una parola palindroma')
}
}