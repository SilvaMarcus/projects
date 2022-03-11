
//---------- .PUSH() ----------- // adiciona elementos ao FINAL do array 

let cores = ['azul','roxo', 'cinza','violeta', 'marrom,', 'bege']
cores.push('branco')
console.log(cores) 
///

//---------.POP()---------  REMOVE O ULTIMO ITEM DA LISTA
let ultimaCor = cores.pop()
console.log(cores)
console.log(ultimaCor)  // retornou a lista sem o item "branco"     ue havia sido adiconado com o .push() .... o .pop() removeu.
//////

// ------------- .SHIFT()--------- elimina o primeiro elemento de um array 
// * nao recebe parametro 
// * retorna o elemento eliminado 

let primeirCor =  cores.shift()
console.log (cores)
console.log(primeirCor) // removeu o azul. 
//-- 

//------ .UNSHIFT()--------
// * Adicion a um ou mais elementos ao inicio de um array
// * Retorna o novo comprimento do array

cores.unshift("ciano")
console.log(cores) // adicionou  o 'ciano' no começo do array
//----

//------- .JOIN-----  junta os elementos de um array usando um separador que especificamos, Se não o especificar, usa virgulas. 
// ** Recebe um separador (string), opcional 
// * Retorna uma string com os elementos unidos.

let separadosPorVirgula = cores.join()
console.log(cores)
console.log(separadosPorVirgula)

let separadosPorTraco = cores.join("-")
console.log(separadosPorTraco)
//-----

//----- .LASTINDEXOF()----- similar ao indexOf() exceto que ele começa procurando pelo elemento final no array, (de trás para frente) 
// se nao houver elementos repetidos, ele retorna a posição do primeiro que encontrar ( ou seja, o ultimo, se olharmos desde o inicio).

 console.log(cores.lastIndexOf("cinza"))
// ele retornou 2 que é o indice do elemento encontrado 
console.log(cores.indexOf("cinza")) // obteve o mesmo resultado 
//--------

//--- .INCLUDES----- também similar ao .indexof(), mas retorna um booleano
//* Recebe um item para pesquisar no array
//* Retorna verdadeiro se encontrou o que estava procurando, falso se nao. 

console.log(cores.includes("roxo")) // retornou true pq achou 
console.log(cores.includes("banana"))  // retornou falso pq nao existe esse dado. 
//----




