 // -----Imprimir os números impares menores que 100 ----

/* for (let i = 0; i < 100; i++ ){
    if( i%2 != 0){
        console.log(i)
    } 
} */
//------


// Imprimir a tabuada do número 8 
 function tabuadinhaDeJesus (tabuada){

for (i=1; i <= 10; i++){

   console.log ( ` ${tabuada} x ${i} = ${tabuada*i} `)
 }
}  tabuadinhaDeJesus(7) 

// imprimir tabuada inteira 

function ImprimirTabuada(n) {
    for (var i = 1; i <= 10; i++) {
    var linha =  n * i;
    console.log(linha);
    }
   }
    for (var i = 1; i <= 10; i++) {
    ImprimirTabuada(i);
    console.log();
   } 