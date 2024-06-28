const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Oh my God, did you see the new girl? ____________________ Over there.",
        alternativas: [
            {
                texto: "What new girl?",
                afirmacao: "afirmação"
            },
            {
                texto: "I think her name's Jenny.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Is she pretty?",
        alternativas: [
            {
                texto: "Yes.",
                afirmacao: "afirmação"
            },
            {
                texto: "No.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "What a _____",
        alternativas: [
            {
                texto: "Pity.",
                afirmacao: "afirmação"
            },
            {
                texto: "Princess.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Let's go see if her daddy's got money. -Oh my God, hey. Your name is ______ right? ",
        alternativas: [
            {
                texto: "James.",
                afirmacao: "afirmação"
            },
            {
                texto: "Jenny.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "You could be a model if weren't for your height. ______________________ ",
        alternativas: [
            {
                texto: "No, does not make sense..",
                afirmacao: "afirmação"
            },
            {
                texto: "Oh my God, I see it.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2127...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();