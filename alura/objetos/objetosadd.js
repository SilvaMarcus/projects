const cliente = {
    nome: 'Marcus',
    idade: 25,
    cpf: '48504167801',
    email: 'marcus.vinicius.7@outlook.com'
};

console.log(cliente);

cliente.telefone = '11949135349';  // metodo de adicionar propriedades em um objeto 

 delete cliente.cpf  // deletar um propriedade do objeto 
 
console.log(cliente);