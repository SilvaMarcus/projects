// função expressa
let somar = function(numA,numB){
    return numA + numB
}

let resultado = somar(6,9)
console.log(resultado)

// função declarada 
function somar2 (num1, num2){
    return num1 + num2
}
console.log(somar2(7,7))

function teste (x,y){
    return x * 2 // ELE SO VAI ALTERAR O VALOR DE X IGNORANDO O VALOR DE Y POIS VC NAO PEDIU PARA FAZER NADA COM Y 
}
    console.log(teste(1,5))


// CONVERTER STRING EM URL USANDO CONCATENAÇÃO, INCLUINDO O PARAMETRO APENAS AO MEIO DO CONTEUDO DA VAR URL 
    function converter(string){
        let url = "http://www." + string + ".com.br"
        return url
    }
        console.log(converter("OláMundo"))

// OUTRA FORMA DE FAZER, SEM VARIAVEIS. 
    function conversao (string){
        return "www." + string + ".com.br"
    }
    console.log(conversao("TIM"))

    // CALCULANDO IDADE DOS CACHORROS EM TEMPO HUMANO 
    function idadeCachorro(idade){
       return idade * 7
    }
    console.log(idadeCachorro(10))


    //Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
    function valorPorHora (salario,hora){
        return salario/hora  
    }
    console.log (" O salario por hora é de " + valorPorHora(3000,160))


    //Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

    function stringMaiuscula(nome){
        return nome.toUpperCase()
    }
    console.log(stringMaiuscula("marcus")) // do mesmo modo o .toLowerCase() as deixaria minusculas.

   
   
    //Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
    
    function tipoDeDado(dado1){
        return typeof dado1 
    }
    console.log(tipoDeDado(8)) // aprender fazer com mais parametros e exibir todos os tipos na tela.

    //Exemplo: Math

    console.log(Math.random())

    // funcao cumprimentar 

    function saudar (nome){
        return `Olá ${nome} Seja muito Bem vindo`
    }
    console.log(saudar('Milena'))