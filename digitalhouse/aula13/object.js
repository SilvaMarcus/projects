
//                      ========== OBJETOS ==========

let pais = { 
    nome: 'Brasil',
    capital: 'Brasilia',
    nacionalidade: function (){
        return 'Sou do ' + this.nome;
    }
}; // console.log(pais.nacionalidade())


//                =======  CONSTRUTOR DE OBJETOS, "funcao construtora"  =========

let carro = {
    marca: 'chevrolet',
    modelo: 'onix',
};

function Carro (aMarca, oModelo ){
    this.marca = aMarca
    this.modelo = oModelo
}

console.log(carro)
console.log(new Carro ('hyundai', 'hb20'))