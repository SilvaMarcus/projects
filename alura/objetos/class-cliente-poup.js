class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf 
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor 
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}  
    
class ClientePoupanca extends Cliente {
    constructor (nome,email,cpf,saldo,poupanca) {
        super(nome,email,cpf,saldo)
        this.poupanca = poupanca
    }
    depositarPoupanca(valor){
        this.poupanca += valor
    }
} 

const marcus = new ClientePoupanca('Vini','vini@hotmail','7777',10,100)

marcus.depositar(50)
marcus.depositarPoupanca(500)

console.log(marcus)

