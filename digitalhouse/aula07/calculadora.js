//Calculadora - Nível I
//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function soma (numA,numB){
    let resultado = numA + numB

}

//Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao (numA,numB){
    return numA - numB
}
//console.log(subtracao(2,1))

//Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao (numA,numB){
   let resultado = numA * numB
  // console.log(resultado)  // fiz de um jeito diferente so para treinar possibilidades
   return resultado
}


//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao (numA,numB){
     return numA/numB
}
/* console.log(divisao(10,2))  */

//Calculadora - Nível II

// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
//console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log("---------Teste de operações-----/ CALCULADORA-------")

//Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.

 console.log( 'a soma deu ' + adicionar(7,7) + ' a subtracao deu ' + subtracao(8,2))


 // Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().


function multiplicacao (numA,numB){
    let resultado = numA * numB
    console.log(resultado)  
    return resultado
 }

function quadradoDoNumero(num){
    return num**2
}
 console.log(quadradoDoNumero(3))



