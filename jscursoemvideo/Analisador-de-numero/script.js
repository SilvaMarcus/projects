let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function adicionar() {
    if(isNumero(num.value) && inLista(num.value, valores)) {
        window.alert('Tudo Okay!');
    }  else {
        window.alert('Valor Invalido ou Ja Existente');
    } // else 
    } // adicionar

function isNumero(n){
    if(Number(n) >= 1){
        return true
    } else {
        return false
    } // else 
}// function 

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }// else 
}   // function 