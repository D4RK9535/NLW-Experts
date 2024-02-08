//bloco de variável que monta um (array) com perguntas e respostas em formato de objeto
const perguntas = [
    {
        Pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        Respostas: [
            "Converter uma string para um número inteiro",
            "Converter um número para uma string",
            "Arredondar um número para o inteiro mais próximo",
        ],
        correta: 0
    },
    {
        Pergunta: "Qual é a função do operador '===' em JavaScript?",
        Respostas: [
            "Comparação estrita",
            "Atribuição",
            "Comparação lógica",
        ],
        correta: 0
    },
    {
        Pergunta: "O que é a recursão?",
        Respostas: [
            "Uma estrutura de repetição",
            "Um loop condicional",
            "Uma função que chama a si mesma",
        ],
        correta: 2
    },
    {
        Pergunta: "O que é um loop 'while'?",
        Respostas: [
            "Um loop que sempre executa seu bloco de código pelo menos uma vez",
            "Um loop que executa seu bloco de código enquanto uma condição especificada for verdadeira",
            "Um loop que executa seu bloco de código um número específico de vezes",
        ],
        correta: 1
    },
    {
        Pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        Respostas: [
            "var myVar = 10;",
            "variable myVar = 10;",
            "int myVar = 10;",
        ],
        correta: 0
    },
    {
        Pergunta: "O que significa 'CSS'?",
        Respostas: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
        ],
        correta: 0
    },
    {
        Pergunta: "Qual é a propriedade CSS usada para definir a imagem de fundo de um elemento?",
        Respostas: [
            "background-image",
            "background-color",
            "image",
        ],
        correta: 0
    },
    {
        Pergunta: "Qual é a propriedade CSS usada para alterar o espaçamento entre as letras de um texto?",
        Respostas: [
            "letter-spacing",
            "word-spacing",
            "line-height",
        ],
        correta: 0
    },
    {
        Pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
        Respostas: [
            "Selecionar múltiplos elementos",
            "Selecionar um único elemento",
            "Alterar estilos CSS",
        ],
        correta: 1
    },
    {
        Pergunta: "Qual é a forma correta de definir uma fonte em CSS?",
        Respostas: [
            "font-family",
            "text-font",
            "font-style",
        ],
        correta: 0
    }
];
//variaveis que atribuem os id's que criamos no html
const quiz = document.querySelector("#quiz")
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas



// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)

    //pesquisa a tag dentro do parenteses e muda o conteudo dela atribuindo uma nova variavel
    quizItem.querySelector('h3').textContent = item.Pergunta

    //bloco que pega todo o dt e dl e o transforma em loop ou laço de repetição
    for(let resposta of item.Respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        //pedi ao dt para fazer uma seleção ao input
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.Respostas.indexOf(resposta)
        //ao pedir ao dt pesquisar o input, a função criada ativa o que tem dentro da chave ao clicar na tela
        dt.querySelector('input').onchange = (event) => {
            //variavel constante para pegar o valor da resposta que marcamos e compara ela com a resposta correta de fato
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        }

        //seleciona a tag dl e atribui a tag dt como filho dela
        quizItem.querySelector('dl').appendChild(dt)
    }
    // remove o Resposta A da tela
    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}