const cliente = {
    nome: 'Marcus',
    idade: 25,
    endereco: 'rua apaura 26',
    trabalho: 'Programador',
    cpf: '48504167801'
};

const chaves = ['nome','idade','endereco','trabalho', 'cpf'];


    console.log(cliente[chaves[0]]);  

    chaves.forEach (conteudo => 
        console.log(cliente[conteudo])
    ) 

    console.log(cliente.cpf.substring(5,cliente.cpf.length))   
    console.log(cliente['cpff'])