 function soma (x, y){
     return x + y
 }

 function subtrair (x,y){
    return x - y
 }

 function divisao (x,y){
     return x/y
 }

 function calculadora (x,y,operacao){
    return  operacao(x,y)
 }
 console.log(calculadora(20,2,divisao))   // aqui a funcao esta sendo usada dentro da funcao com nome generico, que sera atrivuido o valor da funcao ao nome generico 'operacao' quando chamar a funcao.... atribuir valor. 