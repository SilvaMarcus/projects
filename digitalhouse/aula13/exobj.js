let alunoss = {
    nome: 'vinicius',
    idade: 16,
    turma: 16 +' b ', 
}
function alunos(nome,idade,turma){
    this.nome = nome
    this.idade = idade
    this.turma = turma
} 
console.log(alunoss)
console.log (new alunos ('Nery', 25, 'turma2'))