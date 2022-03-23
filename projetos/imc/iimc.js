let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');
let classificacao = '';

function imc (){

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    
    if (nome !== '' && altura !== '' && peso !== ''){
        
    valorImc = (peso / (altura * altura)).toFixed(1)
    resultado.textContent = ` ${nome} Seu IMC é de ${valorImc}` 
    
    } else {
      alert("Preencha tudo por favor mlk")
    }

}

calcular.addEventListener('click' , imc);