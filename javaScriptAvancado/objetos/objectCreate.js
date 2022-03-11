var pessoa1 = {nome:'Marcus', idade:25,

} 


var pessoa2 = { nome: 'nery', idade: 28,}

var pessoa3 = Object.create(null) 



var convidado = {id: 123, nome: "Felipe Fontoura"};
var convidados = [convidado];
novoConvidado = Object.create(convidado);
convidados.push(novoConvidado);

console.log(convidados)