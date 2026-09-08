# Atividade Avaliativa IV - Recuperação

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Lógica de Programação
- Docente - Gustavo Roberto de Souza

## Orientações Gerais

- A avaliação deverá ser realizada individualmente.
- Não é permitido o uso do celular durante a realização da atividade.
- Não é permitido o uso de nenhum tipo de auxílio de IA (Inteligência Artificial).
- Poderão ser utilizados os conceitos de entrada e saída de dados, variáveis, operadores, estruturas condicionais, estruturas de repetição, vetores e objetos.
- Os exercícios deverão ser desenvolvidos utilizando JavaScript.
- Quando solicitado, os dados deverão ser armazenados em vetores e/ou objetos.
- A entrega deverá ser feita no AVA, enviando apenas o link do repositório do GitHub.

## Passo-a-Passo (Clonar e Entrega)

1. Você deve fazer um fork deste repositório. Na parte superior da página, clique no botão de **Fork**.
2. Depois disso, você deve clonar o repositório para o seu computador utilizando o seguinte comando:
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o comando `git clone <url_do_repositório>`.

3. Abra no VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar, você deverá commitar e enviar novamente para o GitHub suas modificações.
   1. Adicione as alterações ao stage utilizando o comando `git add .`.
   2. Faça o commit utilizando o comando `git commit -m "sua mensagem"`.
   3. Envie as alterações utilizando o comando `git push origin master`.

6. Por fim, copie o link do seu repositório e faça o envio no AVA.
   1. O link deverá ser adicionado como comentário na entrega da atividade.

## Questões

### Questão 01

Uma cafeteria deseja analisar os valores de cinco pedidos realizados durante um período.

Desenvolva um algoritmo que solicite ao usuário o valor de **5 pedidos**.

Todos os valores deverão ser armazenados em um **vetor**.

Após realizar os cadastros, o programa deverá apresentar:

- Todos os valores cadastrados.
- O valor total dos pedidos.
- A média dos valores.
- O menor valor registrado.

---

### Questão 02

Uma academia deseja registrar o desempenho de três alunos em uma avaliação física.

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

---

### Questão 03

Uma locadora deseja cadastrar alguns filmes para consulta.

Inicialmente, solicite ao usuário a quantidade de filmes que serão cadastrados.

Para cada filme, solicite:

- Título.
- Ano de lançamento.

Cada filme deverá ser representado por um **objeto** e armazenado em um **vetor**.

Após realizar todos os cadastros, solicite ao usuário o título de um filme para pesquisa.

O programa deverá percorrer o vetor procurando pelo filme informado.

Caso encontre, apresente:

- Título do filme.
- Ano de lançamento.

Caso não encontre, apresente:

`Filme não encontrado.`

---

### Questão 04

Uma escola deseja organizar os dados de seus professores.

Inicialmente, solicite ao usuário a quantidade de professores que serão cadastrados.

Para cada professor, solicite:

- Nome.
- Tempo de trabalho na escola em anos.

Cada professor deverá ser representado por um **objeto** e armazenado em um **vetor**.

Ao final, apresente:

- Nome e tempo de trabalho de todos os professores.
- Quantidade de professores com `5 anos ou mais` de trabalho na escola.
- Quantidade de professores com menos de `5 anos` de trabalho.
- Nome do professor com maior tempo de trabalho.

---

### Questão 05

Uma loja de jogos deseja criar um sistema simples para cadastrar e consultar jogos.

O programa deverá apresentar repetidamente o seguinte menu:

`1 - Cadastrar jogo`
`2 - Listar jogos`
`3 - Pesquisar jogo`
`0 - Sair`

Cada jogo deverá ser representado por um **objeto** contendo:

- Nome.
- Plataforma.

Todos os jogos deverão ser armazenados em um **vetor**.

Na opção `Cadastrar jogo`, solicite o nome e a plataforma e adicione o jogo ao vetor.

Na opção `Listar jogos`, apresente todos os jogos cadastrados.

Na opção `Pesquisar jogo`, solicite o nome de um jogo e procure no vetor.

Caso encontre, apresente:

- Nome do jogo.
- Plataforma.

Caso não encontre, apresente:

`Jogo não encontrado.`

O menu deverá continuar sendo apresentado até que o usuário escolha a opção `0`.
