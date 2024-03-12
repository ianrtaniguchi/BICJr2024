# Pesquisa geral sobre os chatbots

## Tópicos

- [Pesquisa geral sobre os chatbots](#pesquisa-geral-sobre-os-chatbots)
  - [Tópicos](#tópicos)
  - [O que é um chatbot?](#o-que-é-um-chatbot)
    - [Funções esperadas](#funções-esperadas)
  - [Como funciona](#como-funciona)
  - [Arquitetura transformer](#arquitetura-transformer)
  - [Referências](#referências)

...

## O que é um chatbot?

A definição mais presente  é: "Programa de computador que simula a conversa humana com um usuário final"[^1]  

“Um sistema de chatbot usa tecnologia de inteligência artificial (IA) conversacional para simular um bate-papo com um usuário em linguagem natural”[^2]

"Chatbots mais sofisticados usam tecnologias como large language models (LLMs) baseados em transformadores para processar consultas de clientes e fornecer respostas semelhantes às humanas. Os LLMs ajudam os bots a entender a intenção da pergunta, apesar de erros de digitação ou barreiras de tradução.
À medida que a conversa continua, chatbots sofisticados aprendem e coletam informações para se adaptar às preferências do usuário e fornecer respostas e recomendações personalizadas.”[^3]

"É um programa de computador, que responde como uma entidade inteligente quando conversado com através de texto ou voz e compreende uma ou mais linguagens humanas por Processamento de Linguagem Natural (PNL)."[^4]

### Funções esperadas

“Sansonnet (apud CAHN et al., 2017) descreve aspectos importantes que devem ser 
apresentados pelos atuais Chatbots:  

 ● Agente Dialógico: todo Chatbot deve entender o usuário, independente da entrada (texto ou 
voz) e gerar respostas apropriadas, através de Processamento de Linguagem Natural; 

 ● Agente Racional: o Chatbot deve ter conexão com base externa e de senso comum, de 
forma a possibilitar a identificação de competências e contextos, podendo armazená-las;  

 ● Agente Incorporado: o Chatbot deve "fornecer a função de presença", recebendo nomes 
comuns e atuando de forma a dar a impressão de ser um humano interagindo”(pág.23)[^5] 


## Como funciona

## Arquitetura transformer
"A arquitetura Transformer é um modelo de aprendizado de máquina que revolucionou o campo da inteligência artificial, especialmente no processamento de linguagem natural. Aqui estão alguns pontos-chave sobre a arquitetura do Transformer:  
 ● Autoatenção e Feed Forward: A arquitetura do codificador tem duas camadas: Autoatenção e Feed Forward. As entradas do codificador passam primeiro por uma camada de autoatenção e, em seguida, as saídas da camada de autoatenção são alimentadas para uma rede neural feed-forward.  

 ● Atenção: A atenção é uma parte fundamental do Transformer e é o que permite que o modelo se concentre em diferentes partes da sequência de entrada. A atenção é calculada usando três vetores: consulta, chave e valor. A consulta é usada para calcular a importância de cada elemento da sequência de entrada, enquanto a chave e o valor são usados para representar cada elemento.

 ● Camadas de Codificador e Decodificador: O Transformer é composto por uma pilha de camadas de codificador e decodificador. O codificador é responsável por processar a sequência de entrada e gerar uma representação intermediária. Cada camada de codificador possui uma subcamada de atenção seguida por uma subcamada de feed-forward. O decodificador é responsável por gerar a sequência de saída com base na representação intermediária gerada pelo codificador.  

 ● Autoatendimento e Atendimento Cruzado: No Transformer, existem dois tipos de atenção: autoatendimento e atendimento cruzado. O autoatendimento permite que o modelo se concentre em diferentes partes da sequência de entrada durante o processo de codificação e decodificação. O atendimento cruzado permite que o modelo se concentre nas partes relevantes da sequência de entrada durante a geração da saída.  

 ● Aplicações: Qualquer aplicação que use dados sequenciais de textos, imagens ou vídeos é uma candidata a modelos transformer. Isso permite que esses modelos andem em um ciclo virtuoso na AI de transformers. Criados com grandes conjuntos de dados, os transformers fazem previsões precisas que impulsionam seu uso mais amplo, gerando mais dados que podem ser usados para criar modelos ainda melhores."(copilot)


## Referências


[^1]: [What is a chatbot? (IBM)](https://www.ibm.com/topics/chatbots)  
[What is a chatbot? (Forbes Advisor)](https://www.ibm.com/topics/chatbots)  
[What is a chatbot? (Oracle)](https://www.oracle.com/chatbots/what-is-a-chatbot/) 

[^2]: [The Power of Chatbots Explained (Expert.ai)](https://www.expert.ai/blog/chatbot/) 

[^3]: [What are chatbots? (SAS)](https://www.sas.com/en_hk/insights/articles/analytics/what-are-chatbots.html)

[^4]: [An Overview of Chatbot Technology (SpringerLink)](https://link.springer.com/chapter/10.1007/978-3-030-49186-4_31?ref=blog.min.io)

[^5]: [ ALFA - Um Chatbot  do Tipo Perguntas e Respostas Como Assistente Virtual no AVA (IFPB)](https://core.ac.uk/download/pdf/572527322.pdf)
