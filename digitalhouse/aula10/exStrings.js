// ----- EXERCICIO COM METODOS ARRAYS --- [  1 2 3 4 5 6 7 ] 

let listaCompra = ['arroz','feijao','macarrao0','leite','acucar']
console.log( 'RESULTADO JOIN ' + listaCompra.join()) // uniu a array separando por virgula pois nao especificamos, ou podemos separar por '-'

console.log(listaCompra.pop()) // REMOVE O ULTIMO ITEM DA LISTA                     === POP=== 

listaCompra.push('iogurte', 'BATATA') // ADICIONOU DOIS ITENS AO FINAL DO ARRAY      ==PUSH==
console.log(listaCompra)

listaCompra.shift() // removeu o primeiro item da aray                               ===SHIF===
console.log(listaCompra) // esse é o novo estado da array 

listaCompra.unshift('maca', 'banana', 'oleo')            //                          ===UNSHIT===
console.log(listaCompra) // ADICIONOU DOIS ITENS AO COMEÇO DO ARRAY


