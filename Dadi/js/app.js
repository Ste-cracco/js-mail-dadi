numeroGiocatore = Math.floor(Math.random() * 5) + 1;
numeroComputer =  Math.floor(Math.random() * 5) + 1;

console.log ("Il numero del giocatore è:", numeroGiocatore )
console.log ("Il numero del computer è:", numeroComputer )

if(numeroGiocatore > numeroComputer) {
    console.log("Il Giocatore ha vinto")
} 
else if (numeroGiocatore === numeroComputer) {
    console.log("il punteggio è di parità")
}
else {
    console.log("Il Giocatore ha perso")
  }
