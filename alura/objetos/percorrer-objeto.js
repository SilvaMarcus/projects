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
  };   





 function oferta (obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')) // se tiver 'includes' dependentes no array criado com obeject keys... entao 
    {
       console.log('Oferta de Seguro de Vida para ' + obj.nome);
    };
 } ;

 console.log(Object.keys(cliente))
 //oferta(cliente);

