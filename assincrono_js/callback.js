// A Funcao callback é um recurso muito ultilizado em JS. 
//Permite Executar uma funcao depois de uma determinada acao.



// o que caracteriza callback, é passar para uma funcao como argumento uma outra funcao e executar ela 


exibir = (num) =>{
     console.log( ' a operacao resultou em ' + num)
}


soma = (a,b,cb) => {

     let resultado = a + b;
     cb(resultado);
}



soma(1,2,exibir);