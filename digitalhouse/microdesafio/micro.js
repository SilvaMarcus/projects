

function esquentarSuperRapido(prato,segundos){
let tempoPadrao = 0

prato == "pipoca" ? tempoPadrao = 10 : 0
  
    if( prato == " pipoca" && segundos < tempoPadrao)
        {console.log(`TEMPO INSUFICIENTE :C ${pratoPronto}`)}         
        else if( segundos <=3*prato && segundos > 2*prato)
         {console.log(`A COMIDA QUEIMOU O_O ${pratoPronto}`)}
        else if (segundos >3*prato){
         console.log( `#@%&* K A B U M M #%4@* ${pratoPronto}`) }
        else if(segundos<=2*prato && segundos>=prato){
             console.log(pratoPronto)
             }                   
}
esquentarSuperRapido("pipoca",8)
// deve especificar o prato e os segundos 
// O MENU É pipoca , macarrao, carne , feijao e brigadeiro 
// cada opcao tem um tempo max e min pre definido. 

// codigo feito com ajuda e auxilio da Larissa Jantsch 