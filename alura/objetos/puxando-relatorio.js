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
    /* saldo: 100,
    depositar: function (valor){
        this.saldo += valor       // this.saldo é igual cliente.saldo  
    }
  }

  let relatorio = '';

  for (let info in cliente) {
    if(typeof cliente[info] === 'object'||typeof cliente[info]==='function') // validando para pular funcoes e funcoes do relatorio

    {      
      continue // pulando a execucao ao encontrar 
    } 
    else{ // execute o codigo abaixo 
        relatorio += `
         ${info}: ${cliente[info]}  `
    } */
    }

    
  for (let tudoQueTem in cliente){
    console.log(tudoQueTem)
  }