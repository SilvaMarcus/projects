


let marcusObj = {
    nome: 'marcus',
    idade: 25,
    esta_trabalhando: true,
    detalhesProfissao: {
        profissao: 'programador',
        empresa: 'ServiceNow'
    },
    hobies: ['programamar', 'estudar', 'musica']
}

/* // ======   converter obj para json 
let marcusJson = JSON.stringify(marcusObj)

//console.log( 'json objeto ' + marcusJson)

// ===== converter json para objeto novamente ===========

 marcusObj = JSON.parse(marcusJson)
//console.log(marcusObj) */

 console.log(marcusObj)

 marcusObj.map((pessoa) => {
    console.log(pessoa.nome)
 })