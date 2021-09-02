let listaBombe = []; //lista che contiene le bombe generate randomicamente

let listaScelte = [];

const numMassimo = 25;
const numBombe = 2;

let punteggio = 0;

const livello = numMassimo - numBombe;

// aggiungo bombe alla lista, finquando lunghezza lista minore di numBombe, se bomba generata non è gia inclusa allora la inserisco nell array
 
while ( listaBombe.length < numBombe ) {
  
     let num = getNumRandom(1 , numMassimo);
     if ( !listaBombe.includes(num) ) {
         listaBombe.push(num);
     }
 }
console.log( listaBombe)

while (listaScelte.length < livello) {
    
    let numeroUtente = parseInt(prompt("Inserisci un numero"));

    while (numeroUtente < 1 || numeroUtente > numMassimo || isNaN(numeroUtente) || listaScelte.includes(numeroUtente) ) {
        numeroUtente = parseInt( prompt("hai inserito un numero non valido, inserisci un altro numero"));    
    } 
    if (listaScelte.includes(numeroUtente) == true) {
        numeroUtente = parseInt( prompt("il numero è gia stato inserito, inserisci un altro numero"));
    
    } else if (numeroUtente < 1 || numeroUtente > numMassimo){
        numeroUtente = parseInt( prompt("hai inserito un numero non in range, inserisci tra 1 e " + numMassimo));
    
    }
     else {
        numeroUtente = parseInt( prompt("hai inserito un numero non valido, inserisci un altro numero. Terzo else"));    
    }

    if (listaBombe.includes(numeroUtente) ) {
        alert("hai perso, il tuo punteggio è: " + listaScelte.length);
       // listaScelte.length = livello;
    
    } else {
        listaScelte.push(numeroUtente);

        if (listaScelte.length == livello) {
            alert("complimenti hai vinto")
        }
    }

}
 console.log(listaScelte);



function getNumRandom(min , max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);

}

// function getBombe(array , numbombTemp,  numMassimoTemp) {

//     while ( array.length < numbombTemp ) {
    
//         let num = getNumRandom(1 , numMassimoTemp);
    
//         if ( !array.includes(num) ) {
//             array.push(num);
//         }
//     }
// }