var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault(); // remove o comportamento padrao 
   
    var form = document.querySelector('#form-adiciona');  
    // extraindo informaçoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

// cria a tr e td do paciente

var pacienteTr = montaTr(paciente)


// adicionando paciente na tabela 
    var tabela = document.querySelector('#tabela-pacientes'); // capturando a tabela pai 
    tabela.appendChild(pacienteTr)  // adicionado o tr e td criado como filho na tabela pai existente


    form.reset(); 

})

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement('tr');      // criando um elemento <tr>
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));   // adicionando dentro da tag tr as tags td 
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

    return pacienteTr;

}

function montaTd(dado,classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

