const listaClientes = [

    {  
            nome: 'Marcus',
            idade: 25,
            cpf: '48504167801',
            email: 'marcus.vinicius.7@outlook.com',
            telefones: [ '119999999', '77777777' ],
            dependentes:
            [
          {
            nome: 'Apolo',
            idade: 15,
            parentesco: 'filho'
         } ,
          {
            nome: 'junior',
            idade: 18,
            parentesco: 'filho'    
        } ]
      } , 
        { 
            nome: 'Vinicius',
            idade: 45,
            cpf: '545434167801',
            email: 'vinicius.7@outlook.com',
            telefones: [ '11933333', '5555555' ],
            dependentes:
            [
            {
                nome: 'Lucas',
                idade: 7,
                parentesco: 'filho'
            } ,
            {
                nome: 'Laura',
                idade: 30,
                parentesco: 'Esposa' } 
            ]
           }
     ]  

     const listaDependentes = [...listaClientes[0].dependentes, ...listaClientes[1].dependentes]
     console.table(listaDependentes)

    
  