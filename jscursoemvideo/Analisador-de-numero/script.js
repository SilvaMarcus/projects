let num = document.querySelector('input#fnum')
let lista = document.querySelector('selector#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function insLista(n, l){
    if (l.indexOf (Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
   if (isNumero(num.value) && insLista(num.value, valores)){
        window.alert('Tudo okay')
   } else {
       window.alert('Valor Invalido ou Ja existente')
   }
}