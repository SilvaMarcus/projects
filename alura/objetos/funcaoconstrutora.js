
function Cliente (nome,cpf,email,saldo) {  // criamos estrutura do objeto com as chaves no parametro da funcao. 
    this.nome = nome;
    this.cpf= cpf; 
    this.email = email;
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor 
    }
}
    const marcus = new Cliente ('Marcus','48504167801','marcus@outlook',500); // atribuimos a estrutra Cliente valores das chaves usando o new Cliente...
    
        console.log(marcus)