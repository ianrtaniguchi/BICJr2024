import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { res } from "./GeradorRespostas.js";
import { API_KEY } from "./config.js";

const chatContainer = document.getElementById("chat-container");
const MODEL_NAME = "gemini-2.5-flash";

const genAI = new GoogleGenerativeAI(API_KEY);

const menuModel = genAI.getGenerativeModel({
    model: MODEL_NAME,
    systemInstruction: "Você deve funcionar como um assistente de opções, funcionando como um menu, o usuário fará uma requisição e você deve sugerir quatro novas, de acordo com seu treinamento, tudo isso sem mudar palavras do treinamento. Não crie respostas",
});

const menuChatSession = menuModel.startChat({ 
    history: [
        { role: "user", parts: [{ text: "Fluxo de seleção" }] },
        { role: "model", parts: [{ text: "Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Fluxo de repetição" }] },
        { role: "model", parts: [{ text: "Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Vetores" }] },
        { role: "model", parts: [{ text: "Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Matriz" }] },
        { role: "model", parts: [{ text: "Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Registro" }] },
        { role: "model", parts: [{ text: "Explique melhor\nApresente exemplos\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Função e Procedimento" }] },
        { role: "model", parts: [{ text: "Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Menu Principal" }] },
        { role: "model", parts: [{ text: "Defina fluxo de seleção\nDefina fluxo de repetição\nDefina vetores\nMais opções" }] },
        { role: "user", parts: [{ text: "Mais opções" }] },
        { role: "model", parts: [{ text: "Defina matriz\nDefina registro\nDefina Função e Procedimento\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Explique melhor" }] },
        { role: "model", parts: [{ text: "Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Me dê um exemplo" }] },
        { role: "model", parts: [{ text: "Apresente mais um exemplo\nExplique com mais detalhes esse exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Apresente mais um exemplo" }] },
        { role: "model", parts: [{ text: "Apresente mais um exemplo\nExplique com mais detalhes esse exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Sugira exercícios" }] },
        { role: "model", parts: [{ text: "Apresente mais exercícios\nMe dê um exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Me explique melhor o conteúdo" }] },
        { role: "model", parts: [{ text: "Explique melhor\nMe dê um exemplo\nSugira exercícios\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Explique com mais detalhes esse exemplo" }] },
        { role: "model", parts: [{ text: "Apresente mais um exemplo\nExplique com mais detalhes esse exemplo\nMe explique melhor o conteúdo\nVoltar ao menu principal" }] },
        { role: "user", parts: [{ text: "Voltar ao menu principal" }] },
        { role: "model", parts: [{ text: "Defina fluxo de seleção\nDefina fluxo de repetição\nDefina vetores\nMais opções" }] },
    ]
});

run("Menu Principal");

async function run(mensagem) {
    inicio(mensagem);

    const containerBotoes = document.getElementById("botoes");
    containerBotoes.innerHTML = `
        <div class="loader-container">
            <div class="loader"></div>
            <p class="loading-text">Tobby está pensando...</p>
        </div>
    `;

    try {
        const menuPromise = menuChatSession.sendMessage(mensagem);
        const respostaPromise = res(mensagem);

        // Espera que AMBAS as promessas terminem (evita os botoes de aparecerem antes da resposta)
        const [menuResult, respostaCompleta] = await Promise.all([menuPromise, respostaPromise]);

        // cria os botões
        const menuResponse = menuResult.response;
        const sugerir = menuResponse.text();
        const opcoesBotoes = sugerir.split('\n').filter(opcao => opcao.trim() !== '');
        criarBotoes(opcoesBotoes); // Isso vai remover o loader

        // exibe a resposta de texto
        if (respostaCompleta) {
            const textoResposta = await respostaCompleta.text();
            const respostaFormatada = formatText(textoResposta);
            appendMessage("bot", respostaFormatada);
        } else {
             appendMessage("bot", "Desculpe, não consegui processar a resposta detalhada.");
        }

    } catch (error) {
        console.error("Ocorreu um erro na API:", error);
        appendMessage("bot", "Desculpe, ocorreu um erro na comunicação. Verifique o console.");
        document.getElementById("botoes").innerHTML = ""; 
    }
}

function formatText(text) {
    return marked.parse(text);
}

function inicio(entrada) {
    appendMessage("user", entrada);
}

function appendMessage(role, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.classList.add(role === "user" ? "user-message" : "bot-message");
    messageElement.innerHTML = text;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function criarBotoes(opcoes) {
    const container = document.getElementById("botoes");
    container.innerHTML = "";
    opcoes.forEach(textoDaOpcao => {
        const button = document.createElement("button");
        button.classList.add("botao-menu");
        button.textContent = textoDaOpcao;
        button.addEventListener("click", () => run(textoDaOpcao));
        container.appendChild(button);
    });
}