const cliente = {
    nome: 'Marcus',
    idade: 25,
    cpf: '48504167801',
    email: 'marcus.vinicius.7@outlook.com',
    telefones: ['119999999', '77777777']
};

cliente.dependentes = {
    nome: 'Apolo',
    idade: 15,
    cpf: '8247667801',
    email: 'apolo500@outlook.com',
    parentesco: 'filho'
}

cliente.dependentes.email = 'mudei@email.com';

console.log(cliente)