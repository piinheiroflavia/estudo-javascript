var nome_alunos = []
var qts_alunos = parseInt(prompt("Digite a quatindade de alunos: "));
var quatindade_notas = 0
var contador = 0;


while (contador < qts_alunos){
    var nome = prompt('Digite o nome do aluno: ')
    var media_aluno = parseInt(prompt("Digite a média do aluno: "));
   
    var quatindade_notas = quatindade_notas + media_aluno
  
    nome_alunos.push("O nome do aluno é: " + nome + " e sua média é " + media_aluno )
  
    contador++
    var media = quatindade_notas / qts_alunos
}
 console.log(nome_alunos )
console.log("A soma total das notas da turma é : " + quatindade_notas + "\n A média final da turma é: " + media  )

