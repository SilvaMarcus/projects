// CONDICIONAL, IR A PRAIA OU CINEMINHA OU TEDIO 
let dia = "Nada"
if(dia == "Sol"){
    console.log("PARTIU PRAIA")
     
} else if (dia == "Chuva" || dia == "Nublado" ){
    console.log('CINEMINHA')
} else{
    console.log("TEDIO")
}

// ULTILIZANDO IF ELSE COM FUNCOES

function aprovacao(nota,recuperacao){
    if (nota >= 6 || recuperacao) {

    console.log('PARABENS VOCE PASSOU')
}
else {
    console.log("REPROVADO")
}
}   
 aprovacao(4,false)


 