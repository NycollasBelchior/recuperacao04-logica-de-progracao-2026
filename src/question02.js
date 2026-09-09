/* Uma academia deseja registrar o desempenho de três alunos em uma avaliação física.
Para cada aluno, solicite:
- Nome.
- Quantidade de pontos obtidos.
Cada aluno deverá ser representado por um **objeto** contendo o nome e a pontuação.
Todos os alunos deverão ser armazenados em um **vetor**.
Ao final, o programa deverá apresentar:
- Nome e pontuação de todos os alunos.
- Quantidade de alunos com pontuação maior ou igual a `60`.
- Quantidade de alunos com pontuação menor que `60`.
Considere pontuações válidas entre `0` e `100`.
Caso seja informada uma pontuação inválida, solicite o valor novamente.
--- */

import leia from "readline-sync";
let vetor = []
let quantidadeMaiorIgual60 = 0
let quantidadeMenor60 = 0

for(let i = 1; i <= 3; i++){
    let nome = leia.question("\nDigite o nome do "+ i+ "*"+" aluno: ")
    let pontos = leia.questionInt("Digite a pontuacao do aluno: ")
    
    while(pontos < 0 || pontos > 100){
        console.log("Pontuação invalida! Digite novamente.")
        pontos = leia.questionInt("Digite a pontuação do aluno: ")
    }

    if(pontos >= 60){
        quantidadeMaiorIgual60++;
    }

    if(pontos < 60){
        quantidadeMenor60++;
    }

    let estudante = {
        name: nome,
        points: pontos
    }
    
    vetor.push(estudante)
}
console.log("====Alunos cadastrados====")
for(let i = 0; i < vetor.length; i++){

        console.log("\nnome: " + vetor[i].name)
        console.log("\npontos: " + vetor[i].points)
}
console.log("====quantidade de alunos com nota MAIOR que 60")

console.log(quantidadeMaiorIgual60)

console.log("====quantidade de alunos com nota MENOR que 60")

console.log(quantidadeMenor60);
