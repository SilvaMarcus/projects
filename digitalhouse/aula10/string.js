// -----------length--------- 
console.log("oi eu sou o vinicius".length) // console exibiu 20, ela tem 20 caracteres. para o JAVASCRIPT a string é um objeto, lenght sempre vai retornar numeros. 
 // também podemos escrever assim.. 

 let texto = "oi eu sou o vinicius" 
 console.log(texto.length) // retornou 20

 // -----------indexOf()---------- 
 console.log(texto.indexOf("s")) // retornou 6, pois o "s" esta localizada no caractere 6
 console.log (texto.indexOf("eu")) // retornou 3

console.log(texto.indexOf("joao")) // retornou -1, toda vez que nao existir o dado na consulta, vai nos retornar -1. 

//--------------- SLICE-------- 

console.log(texto.slice(0,3)) // retornou o "oi"
let palavra= texto.slice(0,3) 
console.log(palavra) 

//-------------TRIM-------------
let mensagem = "    Eu   sou   um    ser   humano   "
console.log(mensagem)
console.log(mensagem.trim())  // nao recebe parametro, a função trim serve para tirar espaços necessarios mas ou no começo ou no final, ela nao tira espaços entre as palavras. 

//-------------SPLIT---------

let terra = "sou do planeta terra"
console.log(terra.split("o")) // transforma noosa string em uma array, sem dar parametro a frase inteira vira um unico item array. Se usar "" cada letra vai virar um dado array.  Mas se colocar o "espaço" como parametro, cada palavra separada por espaço vira um dado array. se eu der um parametro de uma letra, ele vai usar como se fosse uma virgula e separar.

//--------REPLACE-----

let sou = 'sou programador php'.replace('php', 'javascript') // trocou php por javascript
console.log(sou)

//-----------




let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
