let calcButton = document.getElementById('calcular');

function calcular () {  
    let num = document.getElementById('tabuada');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        alert('Digite um Valor para Tabuada')
        
    } else {
        let n = Number(num.value)
        tab.innerHTML = '';   // zerar o conteudo 'limpar'

        for (i=0; i<= 10; i++){
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n * i}`
            tab.appendChild(item)
        };
    }     
}  

calcButton.addEventListener('click',calcular)
