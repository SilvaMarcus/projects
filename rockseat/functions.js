//function hoisting   é o jeito do javascript de ler o código e ler variaveis antes ou depois, e essa ordem de leitura causa ou nao problemas se nao for entendido com a ordem de leitura hosting funciona. 

//sayMyName()

//function sayMyName (){
   // console.log('nery')
//} 

//===============ARROW FUNCTION --- jeito mais rapido de escrever uma funcao express arrow function 
//const digaMeuNome = (name) => {
  //  return(name)
///}
// console.log(digaMeuNome('marcus')) 

//============= callback function 

/* function callback(dadoFuncao){
  console.log(dadoFuncao)
} 

callback(
    () => {
        console.log('este é o resultado da funcao que esta dentro do parametro da funcao callback')
    }
) */
function sayMyName (name){
   // console.log(name)
}

sayMyName(
    () => {
       // console.log('estou em uma callback')
    }
) // =========== 




// ========== funcao  construtora === 
// deve sempre comecar com letra Maiuscula o nome da funcao
// funcao construtora é um molde para criar objetos 

/* let usuario = {
    nome: 'marcus',
    email: 'marcus.vinicius@hotmail',
    senha: 8888,
}

    function Usuario (valorNome, valorEmail, valorSenha){
        this.nome = valorNome;
        this.email = valorEmail;
        this.senha = valorSenha;
    }
   console.log(usuario)
   console.log(new Usuario('vinicius', 'viniciosaudio@hotmail', 999))

   console.log(typeof usuario) */

   function Usuario (name){
    this.name = name
    this.walk = function(){
        return this.name +' esta andando'
    } 
   } 

   const nery = new Usuario ('nery')
   const ney = new Usuario ('ney')

   console.log(nery.walk())
   console.log(ney.walk())
