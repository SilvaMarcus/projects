const cliente = {
    nome: 'Marcus',
    idade: 25,
    cpf: '48504167801',
    email: 'marcus.vinicius.7@outlook.com',
    telefones: ['119999999', '77777777'],
    dependentes: [{
        nome: 'Apolo',
        idade: 15,
        cpf: '8247667801',
        email: 'mudei@email.com',
        parentesco: 'filho'}, {
            nome: 'renato',
            idade:200
        }
    ]
};

cliente.dependentes.push({   
       nome: 'junior',
       idade: 18,
       cpf: '888888',
       email: 'juninn@gmail',
       parentesco: 'filho'
    
    }) 
     
const filhaMaisNova = cliente.dependentes.filter(encontre => encontre.idade === 18)  // filtrando procurando por dependete com idade igual a 18 

//console.log(filhaMaisNova[0]) // acessando o filtro guardado na variavel filhaMaisNoca e acessando o nome. 


let array = [1,'oi',2 ,'tchau',3,4,5]

let teste = array.filter( encontre => typeof encontre === 'string' )

console.log(teste)
    