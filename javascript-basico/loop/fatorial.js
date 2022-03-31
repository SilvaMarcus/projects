
function fatorial (n){
    let fat = 1
    for (i= n; i > 0; i--){
      console.log('#Izao# antes ' + i)
      console.log('*fat* Antes ' +fat)
         fat *= i
      console.log('#Izao# depois '  + i)
      console.log('*fat* depois ' + fat) 
    } 
  } fatorial(10)
   
  //  Fatorial Logica com For 