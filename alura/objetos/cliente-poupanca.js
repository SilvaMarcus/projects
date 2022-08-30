
function Cliente (nome,cpf,email,saldo) { 
    this.nome = nome;
    this.cpf= cpf; 
    this.email = email;
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor 
    }
}

function Clientepoupanca (nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo); // chamando funcao construtora Cliente para aproveitar a estrutura com propriedades ja existentes. 
    this.saldoPoup = saldoPoup; // adicionando o diferencial da estrutura, que é o saldo poupanca. 
}

const nery = new Clientepoupanca ('Nery', '99999', 'nery@gmail',500,8000000) // mostando a estrutura 

Clientepoupanca.prototype.depositarPoip = function (valor){ // montando uma funcao dentro do prototype 
    this.saldoPoup  += valor 
}

nery.depositarPoip(50) //  chamando a funcao que agora é um prototipo e atribuindo o valor. 

console.log(nery) 