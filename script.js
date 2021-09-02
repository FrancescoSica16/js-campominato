let listaBombe = []; //lista che contiene le bombe generate randomicamente

let listaScelte = [];
let punteggio = 0;


// const numMassimo = 25;  // sono commentate perchè tramite lo switch per i livelli ho bisogno di variabili con valori non definiti
// const numBombe = 15; 
// const livello = numMassimo - numBombe;


// creazione livello di difficoltà
let numMassimo;
let numBombe;
let livello;

let livelloScelto = prompt("inserisci il livello di difficoltà: facile, medio, difficile")
const listaLivelliPossibili = ["facile", "medio", "difficile"];

while ( livelloScelto.length == 0 || !listaLivelliPossibili.includes(livelloScelto.trim().toLowerCase() )) {

    livelloScelto = prompt("inserisci il livello di difficoltà: facile, medio, difficile");
}

switch (livelloScelto) {
    case "facile":
        numBombe = 2;
        numMassimo = 10;
        break;
    case "medio":
        numBombe = 3;
        numMassimo = 10;
        break;
    case "difficile":
        numBombe = 6;
        numMassimo = 10;
        break;        
    default:
        livelloScelto = "facile";
        numBombe = 2;
        numMassimo = 10;
}

console.log("il livello di difficoltà scelto è: " + livelloScelto);
livello = numMassimo -numBombe;

// aggiungo bombe alla lista, finquando lunghezza lista minore di numBombe, se bomba generata non è gia inclusa allora la inserisco nell array
 
// while ( listaBombe.length < numBombe ) {  
    
//      let num = getNumRandom(1 , numMassimo);

//      if ( !listaBombe.includes(num) ) {
//          listaBombe.push(num);
//      }
//  }


getBombe(listaBombe , numBombe , numMassimo);

console.log("stai attento a non scegliere queste bombe, se vuoi vivere" + " " + listaBombe)


while (listaScelte.length < livello) {   // faccio fare 10 tentativi al massimo
    
    let numeroUtente = chiediNumero("Inserisci un numero");

    // while (numeroUtente < 1 || numeroUtente > numMassimo || isNaN(numeroUtente) || listaScelte.includes(numeroUtente) ) {
    //     numeroUtente = parseInt( prompt("hai inserito un numero non valido, inserisci un altro numero"));    
    // } 

    if (listaScelte.includes(numeroUtente) == true) {
        numeroUtente = chiediNumero("il numero è gia stato inserito, inserisci un altro numero");
    
    } else if (numeroUtente < 1 || numeroUtente > numMassimo){
        numeroUtente = chiediNumero("hai inserito un numero non in range, inserisci tra 1 e " + numMassimo);
    
    }
     else if (isNaN(numeroUtente)) {
        numeroUtente = chiediNumero("hai inserito un numero non valido, inserisci un altro numero. is nan Terzo else");    
    
    } else {

    if (listaBombe.includes(numeroUtente) ) {
        alert("hai perso, il tuo punteggio è: " + listaScelte.length);
       listaScelte.length = livello;
      
    
    } else {
            listaScelte.push(numeroUtente);
            punteggio++;
            if (listaScelte.length == livello) {
                alert("complimenti hai vinto, il tuo punteggio è  " + punteggio )
            }
        }
    }
}
 console.log("hai scelto questi valori " + listaScelte);
 console.log("il tuo punteggio è " + punteggio);

function getNumRandom(min , max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function getBombe(array , numbombTemp,  numMassimoTemp) {
    while ( array.length < numbombTemp ) {
 
        let num = getNumRandom(1 , numMassimoTemp);
 
        if ( !array.includes(num) ) {
            array.push(num);
        }
    }
}

function chiediNumero (stringa) {
    return parseInt(prompt(stringa));
}
