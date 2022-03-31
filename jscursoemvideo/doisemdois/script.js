
function check (){
    let inicio = document.getElementById('txtInicio');
    let fim = document.getElementById('txtFim');
    let passo = document.getElementById('txtPasso');
    let contar = document.getElementById('contar');
    let res = document.getElementById('res');
    var input = document.getElementsByClassName('input')
    if ((inicio.value.length == 0 || fim.value.length == 0 || inicio.value.length == 0)){
        alert('Verifique os Dados')
    }  else if (inicio.value.length >= 0 && fim.value.length > 0 && passo.value.length > 0) {
        res.innerHTML = 'Contando..'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }   
     
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c-=p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
        res.innerHTML += `\u{1F3C1}` 
}

contar.addEventListener('click', check)