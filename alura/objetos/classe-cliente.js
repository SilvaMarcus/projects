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
const andre = new Cliente ('Marcus','vinny@icloud','55555', 50)

andre.exibirSaldo()




    