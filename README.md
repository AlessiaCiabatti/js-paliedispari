Palidroma & Pari e Dispari
===

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

# SVOLGIMENTO
1. chiedere con un prompt la parola all'utente

2. all'interno della funzione devo verificare se la parola fornita sia o meno palindroma
  - otteniamo la parola alla quale applicheremo il metodo .split, che lo trasfmorma in un array e divide le lettere utilizzando ('')

3. dobbiamo capire se la parola è palindroma quindi se si può leggere in entrambe le direzioni
  - invertiamo la direzione della parola con la funzione .reverse

4. adesso occorre riunire le lettere, per ottenere nuovamente la stringa e per fare questo utilizzeremo il metodo .join

5. dobbiamo capire se la parola iniziale è uguale alla parola finale se letta al contrario