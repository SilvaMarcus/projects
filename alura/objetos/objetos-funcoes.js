

const cliente = {
    nome: 'Marcus',
    idade: 25,
    cpf: '48504167801',
    email: 'marcus.vinicius.7@outlook.com',
    telefones: [ '119999999', '77777777' ],
    dependentes: [
      {
        nome: 'Apolo',
        idade: 15,
        parentesco: 'filho'
     } ,
      {
        nome: 'junior',
        idade: 18,
        parentesco: 'filho'
      }
    ],
    saldo: 100,
    depositar: function (valor){
        this.saldo += valor       // this.saldo é igual cliente.saldo  
    }
  }

  console.log(cliente.saldo)
  cliente.depositar(50)
  console.log(cliente.saldo)