import { GoogleGenerativeAI } from "@google/generative-ai";

import { res } from "./Chatbot.js";

const userInputField = document.getElementById("user-input");
const chatResponseField = document.getElementById("chat-response");
const chatContainer = document.getElementById("chat-container");

const MODEL_NAME = "gemini-1.5-pro";
const API_KEY = "AIzaSyBjyQv0xO0ISBCkSuv0VfEVbU7MlEYoY-8";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

var x = "Menu Principal"
run(x);

async function run(mensagem) {
    inicio(mensagem);

    const generationConfig = {
        temperature: 0.2,
  topP: 0.95,
  topK: 40,
  responseMimeType: "text/plain",
    };

    const parts = [
        {text: "Você deve funcionar como um assistente de opções, funcionando como um menu, o usuário fará uma requisição e você deve sugerir quatro novas, de acordo com seu treinamento, tudo isso sem mudar palavras do treinamento. Não crie respostas"},
    {text: "input: Fluxo de seleção"},
    {text: "output: Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Fluxo de repetição"},
    {text: "output: Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Vetores"},
    {text: "output: Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Matriz"},
    {text: "output: Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Registro"},
    {text: "output: Explique melhor\nApresente exemplos\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Função e Procedimento"},
    {text: "output: Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Menu Principal"},
    {text: "output: Defina fluxo de seleção\nDefina fluxo de repetição\nDefina vetores\nMais opções"},
    {text: "input: Mais opções"},
    {text: "output: Defina matriz\nDefina registro\nDefina Função e Procedimento\nVoltar ao menu principal"},
    {text: "input: Explique melhor"},
    {text: "output: Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Me dê um exemplo"},
    {text: "output: Apresente mais um exemplo\nExplique com mais detalhes esse exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal"},
    {text: "input: Apresente mais um exemplo"},
    {text: "output: Apresente mais um exemplo\nExplique com mais detalhes esse exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal"},
    {text: "input: Sugira exercícios"},
    {text: "output: Apresente mais exercícios\nMe dê um exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal"},
    {text: "input: Me explique melhor o conteúdo"},
    {text: "output: Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal"},
    {text: "input: Explique com mais detalhes esse exemplo"},
    {text: "output: Apresente mais um exemplo\nExplique com mais detalhes esse exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal"},
    {text: "input: Voltar ao menu principal"},
    {text: "output: Defina fluxo de seleção\nDefina fluxo de repetição\nDefina vetores\nMais opções"},


        { text: "input: " + mensagem },
        console.log(mensagem)
    ];


    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
    });

    const response = result.response;
    console.log(response.text());


    const sugerir = response.text();

    //Define as próximas opções
    const frasesMenu = sugerir.split('\n');
    console.log(frasesMenu);
    const opcoesBotoes = frasesMenu.map(texto => ({ texto }));


    const opcao1 = frasesMenu[0];
    const opcao2 = frasesMenu[1];
    const opcao3 = frasesMenu[2];
    const opcao4 = frasesMenu[3];
    console.log(opcao1);
    console.log(opcao2);
    console.log(opcao3);
    console.log(opcao4);

    criarBotoes(opcoesBotoes);

    var resposta = await res(mensagem)
    appendMessage("bot", resposta.text());

}

function inicio(entrada) {
    appendMessage("user", entrada); // Adiciona a mensagem do usuário ao contêiner de respostas
}
;

function appendMessage(role, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.classList.add(role === "user" ? "user-message" : "bot-message");

    // Dividir a resposta em parágrafos
    const paragraphs = text.split("\n");
    paragraphs.forEach(paragraph => {
        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = paragraph;
        messageElement.appendChild(paragraphElement);
    });

    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Rolar para baixo automaticamente
}

// Função para criar os botões (recebe o estado atual do menu)
function criarBotoes(frasesMenu) {
    const container = document.getElementById("botoes");
    container.innerHTML = ""; // Limpa os botões existentes

    //isso é para tirar o espaco branco
    const maximo = frasesMenu.length;
    console.log(maximo);
    const frasesUteis = frasesMenu.slice(0, maximo-1);
    console.log(frasesUteis);

    frasesUteis.forEach(opcao => {
        const button = document.createElement("button");
        button.classList.add("botao-menu");
        button.textContent = opcao.texto;
        
        button.addEventListener("click", () => run(opcao.texto));
        container.appendChild(button);
    });
}

