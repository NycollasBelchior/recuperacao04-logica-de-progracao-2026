import leia from "readline-sync";
/* Uma locadora deseja cadastrar alguns filmes para consulta.
Inicialmente, solicite ao usuário a quantidade de filmes que serão cadastrados.
Para cada filme, solicite:
- título.
- Ano de lançamento.
Cada filme deverá ser representado por um **objeto** e armazenado em um **vetor**.
Após realizar todos os cadastros, solicite ao usuário o título de um filme para pesquisa.
O programa deverá percorrer o vetor procurando pelo filme informado.
Caso encontre, apresente:
- Título do filme.
- Ano de lançamento
Caso não encontre, apresente: */
let vetor = []
let quantidade = leia.questionInt("digite a quantidade de filmes que sera cadastrado: ")

for(let i = 0; i < quantidade; i++){
    let nome = leia.question("\ndigite o titulo do filme: ").toLowerCase();
    let ano = leia.questionInt("digite o ano de lançamento: ")

    let filme = {
        nome: nome,
        ano: ano
    }
vetor.push(filme)
}

let pesquisa = leia.question("\ndigite o nome do filme que deseja encontrar: ").toLowerCase();
for(let i = 0; i < vetor.length; i++){
    if(pesquisa === vetor[i].nome){
        console.log("titulo: " + vetor[i].nome)
        console.log("ano de lancamento: " + vetor[i].ano)
    }
    else{
        console.log(`Filme não encontrado.`)
    }
}



