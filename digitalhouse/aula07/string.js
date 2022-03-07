// -------------lenght-----------
let texto = "oi eu sou o vinicius"
console.log(texto.length) // conta quantos caracteres a string tem 

//--------------INDEXOF----------
console.log(texto.indexOf("o")) // sempre que a letra nao existir na string, indexOf vai devolver o valor -1

//--------------SLICE--------- // voce pode pegar uma palavra isolada da string 
let palavra = texto.slice(0,3) // ele pegou o 0 'o' e parou no 3 'e'
console.log(palavra)
console.log(texto) // isso nao altera o texto original 