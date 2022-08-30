var titulo = document.querySelector('.titulo');
titulo.textContent = 'Vinicius Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(i=0; i < pacientes.length; i++ ){
  
var paciente = pacientes[i];

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdNome = paciente.querySelector('.info-nome');
var nome = tdNome.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');

 //========== validacao ==========

var pesoValido = validaPeso(peso);
var alturaValida = true;  

if(peso >= 1000 || peso <= 0){ 
    tdImc.textContent = 'Peso Invalido;';
    pesoValido = false;
    paciente.classList.add('paciente-invalido');
}

if(altura >= 3.00 || altura <= 0){
    tdImc.textContent = 'Altura Invalida;';
    pesoValido = false;
    paciente.classList.add('paciente-invalido');
}

if (alturaValida && pesoValido){
     imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
    }
}


function validaPeso(){

    if (peso >= 0 &&peso <1000){

        return true;
    } else {
        return false
    }
    
}




function calculaImc (peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}



