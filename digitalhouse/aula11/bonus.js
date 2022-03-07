const participanteA = [5,8,4,9,5];
const participanteB = [8,7,8,6,8];
const participanteC = [7,5,10,8,3];



function pontuacaoMedia (notasParticipante){
    soma = 0;
    for (let i = 0; i < notasParticipante.length; i++){
        soma = soma + notasParticipante[i]; 
    }

    console.log('soma: ' + soma + ' media ' + soma/notasParticipante.length)
    return soma/notasParticipante.length

} 
pontuacaoMedia(participanteA)


function pontuacaoMaior (notasParticipante){
    let menor = notasParticipante[0]
    for (let i =0; i < notasParticipante; i++){
        
    }

}




//1 - soma = 0 ; notasParcipante[i] = 5 -> soma = 5;
  //2 - soma = 5 ; notasParcipante[i] = 8 -> soma = 13;
  //3 - soma = 13 ; notasParcipante[i] = 4 -> soma = 17;
  //4 - soma = 17 ; notasParcipante[i] = 9 -> soma = 26;
  //5 - soma = 26 ; notasParcipante[i] = 5 -> soma = 31;
