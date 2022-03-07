const pratoPronto = "PRATO PRONTO! *Bon appetit* "
var insuficiente = `TEMPO INSUFICIENTE :C ${pratoPronto}`
var queimou = `A COMIDA QUEIMOU O_O ${pratoPronto}`
var kabum = `#@%&* K A B U M M #%4@* ${pratoPronto}`
var inexistente =  "Prato inexistente" 
var pipoca = 10
var macarrao = 8
var carne = 15
var feijao = 12
var brigadeiro = 8 
function esquentarSuperRapido(prato,segundos){
            switch (true) {
                case segundos == prato || segundos <=2*prato:
                console.log(pratoPronto)
                    break;

                case segundos < prato:
                    console.log(insuficiente)
                    break;

                case segundos >2* prato && segundos <=3*prato:
                console.log(queimou)
                    break
                
                case segundos > 3* prato:
                console.log(kabum)
                    break
                       
            }   
} // MENU -- pipoca - macarrao -  carne - feijao - brigadeiro // usar em minusculas 
 esquentarSuperRapido(prato,segundos)

// PROFESSOR, EU FIQUEI HORAS MAS NAO CONSEGUI USAR UMA MANEIRA DE EXIBIR A MENSAGEM " PRATO INEXISTENTE"

switch (key) {
    case value:
        
        break;

    default:
        break;
}