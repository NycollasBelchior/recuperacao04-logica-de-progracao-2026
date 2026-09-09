/* Uma loja de jogos deseja criar um sistema simples para cadastrar e consultar jogos.
O programa deverá apresentar repetidamente o seguinte menu:
`1 - Cadastrar jogo`
`2 - Listar jogos`
`3 - Pesquisar jogo`
`0 - Sair`
Cada jogo deverá ser representado por um **objeto** contendo:
- Nome.
- Plataforma.
todos os jogos deverão ser armazenados em um **vetor**.
Na opção `Cadastrar jogo`, solicite o nome e a plataforma e adicione o jogo ao vetor.
Na opção `Listar jogos`, apresente todos os jogos cadastrados.
Na opção `Pesquisar jogo`, solicite o nome de um jogo e procure no vetor.
Caso encontre, apresente:
- Nome do jogo.
- Plataforma.
Caso não encontre, apresente:
`Jogo não encontrado.`
O menu deverá continuar sendo apresentado até que o usuário escolha a opção `0`. */

import leia from "readline-sync";

const jogos =[]

let jogando = true

while(jogando === true){
    console.log("====Menu====")
    let opcao = leia.keyInSelect(["Cadastrar Jogo","listar Jogos","pesquisar Jogo","sair"])
    if(opcao === 0){
        cadastrar()
    }
    else if(opcao === 1){
        listar()
    }
    else if(opcao === 2){
        pesquisar()
    }

    else if(opcao === 3 || opcao === -1){
        jogando = false
    }

}

function cadastrar(){
    console.clear()
    console.log("====cadastro de jogos====")
    let nome = leia.question("digite o nome do jogo: ").toLowerCase()
    let plataforma = leia.question("digite a plataforma do jogo: ").toLowerCase()

    const jogo = {
        nome: nome,
        plataforma: plataforma 
    }

    console.log("\n⭐CADASTRO DE JOGO COMPLETO!!")
    leia.question("\naperte ENTER para voltar ao menu...")
    console.clear()
    jogos.push(jogo)
}

function listar(){
    console.clear()
    console.log("===== JOGOS CADASTRADOS =====")
    for(let i = 0; i < jogos.length; i++){
        console.log("\njogo: " + jogos[i].nome )
        console.log("plataforma: " + jogos[i].plataforma )

    }
    leia.question("\naperte ENTER para voltar ao menu...")
    console.clear()
}

function pesquisar(){
    let encontrado = false

    console.clear()
    let pesquisa = leia.question("digite o nome do jogo que deseja procurar: ").toLowerCase()
    for(let i = 0; i < jogos.length; i++){
        if(pesquisa == jogos[i].nome){
            encontrado = true
            console.log("JOGO ENCONTRADO!!")
            console.log("\nnome do jogo: " + jogos[i].nome)
            console.log("plataforma do jogo: " + jogos[i].plataforma)
        }
        
    }
    if(encontrado == false){
        console.log("\njogo não encotrado!")
    }
    leia.question("\naperte ENTER para voltar ao menu...")
    console.clear()

}