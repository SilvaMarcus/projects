// =============   JSON   =========

let pessoa = {
    nome: 'vinicius',
    idade: 25,
    altura:1.78,
} 

let json = JSON.stringify(pessoa)
//console.log(json) // retornou texto  {"nome":"vinicius","idade":25,"altura":1.78}  

let objetoDeNovo = JSON.parse(json)
//console.log(objetoDeNovo) // retornou   convertido em objeto novamente { nome: 'vinicius', idade: 25, altura: 1.78 }

let listaCompras = [ 'pao', ' presunto', 'queijo']
let comprasStringfy = JSON.stringify(listaCompras)
console.log(comprasStringfy) // converteu nossa array em string texto ["pao"," presunto","queijo"]

let arrayDeNovo = JSON.parse(comprasStringfy)
console.log(arrayDeNovo) // converteu novamente em array 



// JSON.stringfy E JSON.stringfy 