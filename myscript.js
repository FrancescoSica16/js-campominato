let listaBombe = [];
const numeroBombe = 2; 
const numeroRandomicoMassimo = 20;

const livello = numeroRandomicoMassimo - numeroBombe;

let listaScelte = [];
let punteggio = 0 ;

listaBombe.push(getNumRandom(1 , 100 , livello ));
 
    while (listaBombe.length < livello) {

        const num = getNumRandom( 1 , numeroRandomicoMassimo );

        if (listaBombe.includes(num) == false) {
            listaBombe.push(num);
        }
    }

    console.log(listaBombe)

while (listaScelte.length < livello) {
    
    let numeroUtente = parseInt( prompt("inserisci numero"));

    while (( isNumeroValido(numeroUtente , 1 , numeroRandomicoMassimo ) == false ) || (listaScelte.includes(numeroUtente) == true )  ) {
        numeroUtente = parseInt( prompt("hai inserito un numero non valido, inserisci un altro numero"));
    }

    if (listaScelte.includes(numeroUtente) == true ) {
        numeroUtente = parseInt( prompt("il numero è gia stato inserito, inserisci un altro numero"));

    } else if (numeroUtente < 1 || numeroUtente > numeroRandomicoMassimo) {
        numeroUtente = chiediNumero("hai inserito un numero non in range, inserisci tra 1 e " + numeroRandomicoMassimo);
        
    } else {
numeroUtente = chiediNumero("hai inserito un numero non valido, inserisci un altro numero");
    }

    if (listaBombe.includes(numeroUtente)) {
        alert("hai perso, il tuo punteggio è: " + listaScelte.length );
        listaScelte.length = livello;

    } else{
        listaScelte.push(numeroUtente);

        if (listaScelte.length == livello ){
            alert("complimebnti hai vinto");
        }
    }

    
}

console.log(listaScelte);


function getNumRandom (min,max) {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
 }
 // 
 function chiediNumero (stringa) {
     return parseInt(prompt(stringa));
 }

 function isNumeroValido(numeroUtenteTemporaneo, numeroMax, numeroMin) {
   
    if ( numeroUtenteTemporaneo < numeroMin || numeroUtenteTemporaneo > numeroMax  || isNaN(numeroUtenteTemporaneo) ){
        return false;

    } else
        return true;
 }

// function generateRan(minimo , massimo , nBombe){
//     var max = nBombe;
//     var random = [];
//     let i = 0;
//     let temp2=0;
    
//     for(var i = 0; i<max ; i++){
   
//         var temp =Math.floor(Math.random() * ((massimo - minimo) + 1) + minimo);
//         if( 
//             random.indexOf(i) == -1){
//             random.push(temp);
//         }
//         else
//          i--;
//     }
//     return random;


// }


