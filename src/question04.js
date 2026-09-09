import leia from "readline-sync";
/* Uma escola deseja organizar os dados de seus professores.
Inicialmente, solicite ao usuário a quantidade de professores que serão cadastrados.
Para cada professor, solicite:
- Nome.
- Tempo de trabalho na escola em anos.
Cada professor deverá ser representado por um **objeto** e armazenado em um **vetor**
Ao final, apresente:
- Nome e tempo de trabalho de todos os professores.
- Quantidade de professores com `5 anos ou mais` de trabalho na escola.
- Quantidade de professores com menos de `5 anos` de trabalho.
- Nome do professor com maior tempo de trabalho.
--- */
let professores = []

let quantidade = leia.questionInt("digite a quantidade de professor que será cadastrado: ")
let tempoMais= 0;
let tempoMenos= 0;



for(let i = 1; i <= quantidade; i++){
    let nome = leia.question("\ndigite o nome do " + i + "*"+ " professor: ")
    let tempo = leia.questionInt("digite quantos anos trabalha na escola: ")
    
    if(tempo >= 5){
        tempoMais++;
    }
    if(tempo < 5){
        tempoMenos++
    }

    const professor = {
        nome: nome,
        tempo: tempo
    }

    
    

professores.push(professor)
}

for(let i = 0; i < professores.length; i++){
        console.log("\nnome: " + professores[i].nome)
        console.log("tempo de trabalho: " + professores[i].tempo)  
}




let maior;
let nomeMaior;


console.log("\n===== professor com mais tempo de trabalho ======")
for(let i = 0; i < professores.length; i++){
    if(i === 0 ){
        maior = professores[i].tempo
        nomeMaior = professores[i].nome;
    }
    else if(professores[i].tempo > maior){
        maior = professores[i].tempo
        nomeMaior = professores[i].nome;
    }
}
console.log("\n nome: " + nomeMaior)
console.log("tempo: " +maior + " anos")

console.log("\n=====Quantidade de professores com MAIS de 5 anos======")
console.log(tempoMais)

console.log("\n=====Quantidade de professores com MENOS de 5 anos======")
console.log(tempoMenos)