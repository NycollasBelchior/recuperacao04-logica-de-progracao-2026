/* Uma cafeteria deseja analisar os valores de cinco pedidos realizados durante um período.
Desenvolva um algoritmo que solicite ao usuário o valor de **5 pedidos**.
Todos os valores deverão ser armazenados em um **vetor**.
Após realizar os cadastros, o programa deverá apresentar:
- Todos os valores cadastrados.
- O valor total dos pedidos.
- A média dos valores.
- O menor valor registrado.
--- */

import leia from "readline-sync";

let vetor= []
let total = 0
let media;
let menor

for(let i = 1; i <= 5; i++){
let pedidos = leia.questionFloat("digite o valor do "+ i +"*"+" pedido: ")
vetor.push(pedidos)
}
console.log("====Valores cadastrados")
for(let i = 0; i < vetor.length; i++){
    console.log("todos os valores cadastrados: R$" + vetor[i].toFixed(2))
}

for(let i = 0; i < vetor.length; i++){
    total += vetor[i]
}

for(let i = 0; i < vetor.length; i++){
media = total / vetor.length
}
for(let i = 0; i < vetor.length; i++){
if(vetor[i] < vetor[0]){
    menor = vetor[i]
}
}


console.log("valor total dos pedidos: R$" + total.toFixed(2))
console.log("media dos valores: R$" + media.toFixed(2))
