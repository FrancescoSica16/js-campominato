const livello = 16;
let listaBombe = [];
let numeriUtente = [];
let punteggio = 0 ;

listaBombe = generateRan(1 , 100);
 console.log(listaBombe);
 
 do {
  
 } while ();




function generateRan(max , min){
    var max = livello;
    var random = [];
    for(var i = 0; i<max ; i++){
        
        var temp =Math.floor(Math.random() * (max - min) + min);;
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
         i--;
    }
    return random;
}

