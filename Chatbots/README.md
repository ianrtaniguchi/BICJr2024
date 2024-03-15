# Pesquisa geral sobre os chatbots

## Tópicos

- [Pesquisa geral sobre os chatbots](#pesquisa-geral-sobre-os-chatbots)
  - [Tópicos](#tópicos)
  - [O que é um chatbot?](#o-que-é-um-chatbot)
    - [Funções esperadas](#funções-esperadas)
  - [Como funciona](#como-funciona)
    - [O ChatGPT](#o-chatgpt)
  - [Arquitetura transformer](#arquitetura-transformer)
  - [Compreensão/Processamento de linguagem natural (NLU e PNL)](#compreensãoprocessamento-de-linguagem-natural-nlu-e-pnl)
  - [A Análise Semântica Latente (LSA)](#a-análise-semântica-latente-lsa)
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

"Os chatbots modernos usam as mais recentes tecnologias, incluindo inteligência artificial (IA), aprendizado de máquina (ML), compreensão de linguagem natural (NLU), processamento de linguagem natural (NLP) para entender o padrão de comportamento e o perfil dos usuários para que eles possam fornecer respostas contextuais às suas consultas."[^6]

A Inteligência Artificial(ML/NLU/NLP) e dados são considerados dois pilares dos chatbots, pois a IA é treinada usando os dados

### O ChatGPT

"Aqui estão alguns pontos-chave sobre como o ChatGPT funciona:

● **Entendimento do Contexto:** O ChatGPT é capaz de entender o contexto fornecido e gerar respostas coerentes e contextuais. Ele processa informações complexas e captura as relações entre as palavras.

● **Treinamento com Dados Enormes:** No treinamento do ChatGPT, uma quantidade enorme de dados é utilizada. Livros, artigos, websites e outras fontes de texto são processados para alimentar o modelo com uma ampla variedade de informações.

● **Aprendizado de Máquina:** Através do aprendizado de máquina, o ChatGPT analisa esses dados e aprende padrões linguísticos, construindo um modelo de linguagem sofisticado.

● **Processamento de Informação:** Os textos são divididos em unidades menores (Tokens), como palavras ou subpalavras, para que o modelo possa entender e processar a informação de maneira mais eficiente.

● **Geração de Respostas:** O ChatGPT gera respostas com base em padrões e exemplos existentes. Ele não possui compreensão ou conhecimento real do mundo. Suas respostas são o resultado das correlações aprendidas durante o treinamento." (Copilot)



## Arquitetura transformer

"A arquitetura Transformer é um modelo de aprendizado de máquina que revolucionou o campo da inteligência artificial, especialmente no processamento de linguagem natural. Aqui estão alguns pontos-chave sobre a arquitetura do Transformer:  

 **● Autoatenção e Feed Forward:** A arquitetura do codificador tem duas camadas: Autoatenção e Feed Forward. As entradas do codificador passam primeiro por uma camada de autoatenção e, em seguida, as saídas da camada de autoatenção são alimentadas para uma rede neural feed-forward.  

 **● Atenção:** A atenção é uma parte fundamental do Transformer e é o que permite que o modelo se concentre em diferentes partes da sequência de entrada. A atenção é calculada usando três vetores: consulta, chave e valor. A consulta é usada para calcular a importância de cada elemento da sequência de entrada, enquanto a chave e o valor são usados para representar cada elemento.

 **● Camadas de Codificador e Decodificador:** O Transformer é composto por uma pilha de camadas de codificador e decodificador. O codificador é responsável por processar a sequência de entrada e gerar uma representação intermediária. Cada camada de codificador possui uma subcamada de atenção seguida por uma subcamada de feed-forward. O decodificador é responsável por gerar a sequência de saída com base na representação intermediária gerada pelo codificador.  

 **● Autoatendimento e Atendimento Cruzado:** No Transformer, existem dois tipos de atenção: autoatendimento e atendimento cruzado. O autoatendimento permite que o modelo se concentre em diferentes partes da sequência de entrada durante o processo de codificação e decodificação. O atendimento cruzado permite que o modelo se concentre nas partes relevantes da sequência de entrada durante a geração da saída.  

 **● Aplicações:** Qualquer aplicação que use dados sequenciais de textos, imagens ou vídeos é uma candidata a modelos transformer. Isso permite que esses modelos andem em um ciclo virtuoso na AI de transformers. Criados com grandes conjuntos de dados, os transformers fazem previsões precisas que impulsionam seu uso mais amplo, gerando mais dados que podem ser usados para criar modelos ainda melhores."(copilot)

 ## Compreensão/Processamento de linguagem natural (NLU e PNL)

  O conjunto de NLU e PNL permite que o commputador entenda a limguagem humana.

"A forma mais básica de NLU é a análise, que pega o texto escrito em linguagem natural e o converte em um formato estruturado que os computadores podem entender.

Outras tarefas incluem análise de sentimento, reconhecimento de entidade e rotulagem semântica de função.

Etapas da NLU

**● Tokenização:** O primeiro estágio da NLU envolve a divisão de uma determinada entrada em palavras ou tokens individuais. Inclui pontuação, outros símbolos e palavras de todos os idiomas.

**● Análise Lexical:** Em seguida, os tokens são colocados em um dicionário que inclui sua parte da fala (por exemplo, se são substantivos ou verbos). Também inclui a identificação de frases que devem ser colocadas em um banco de dados separado para uso posterior.

**● Análise sintática:** Os tokens são analisados quanto à sua estrutura gramatical. Isso inclui identificar os papéis de cada palavra e se há alguma ambiguidade entre as múltiplas interpretações desses papéis."[^7]

"As redes neurais têm desempenhado um papel significativo no progresso do Processamento de Linguagem Natural (PNL), permitindo que as máquinas processem e entendam a linguagem. Ao longo dos anos, o desenvolvimento e a aplicação de redes neurais revolucionaram o campo, levando a um avanço notável na tradução automática, análise de sentimentos, resumo de texto, chatbots e muito mais."[^8]

## A Análise Semântica Latente (LSA)

"É usada para descobrir semelhanças entre palavras como representação vetorial. Perguntas baseadas em modelos, como saudações e perguntas gerais, podem ser respondidas usando AIML, enquanto outras perguntas não respondidas usam LSA para dar respostas"[^9]


## Referências

[^1]: [What is a chatbot? (IBM)](https://www.ibm.com/topics/chatbots)  
[What is a chatbot? (Forbes Advisor)](https://www.ibm.com/topics/chatbots)  
[What is a chatbot? (Oracle)](https://www.oracle.com/chatbots/what-is-a-chatbot/) 

[^2]: [The Power of Chatbots Explained (Expert.ai)](https://www.expert.ai/blog/chatbot/) 

[^3]: [What are chatbots? (SAS)](https://www.sas.com/en_hk/insights/articles/analytics/what-are-chatbots.html)

[^4]: [An Overview of Chatbot Technology (SpringerLink)](https://link.springer.com/chapter/10.1007/978-3-030-49186-4_31?ref=blog.min.io)

[^5]: [ ALFA - Um Chatbot  do Tipo Perguntas e Respostas Como Assistente Virtual no AVA (IFPB)](https://core.ac.uk/download/pdf/572527322.pdf)

[^6]: [What is a chatbot (Forbes Advisor)](https://www.forbes.com/advisor/business/software/what-is-a-chatbot/)

[^7]: [What is a chatbot (Simplilearn)](https://www.simplilearn.com/natural-language-understanding-article#:~:text=What%20is%20Natural%20Language%20Understanding%20%26%20How%20Does,Examples%20...%205%20Conclusion%20...%206%20FAQs%20)

[^8]: [How Does ChatGPT Work? (Baeldung)](https://www.baeldung.com/cs/chatgpt-model)

[^9]: [An Overview of Chatbot Technology](https://link.springer.com/chapter/10.1007/978-3-030-49186-4_31?ref=blog.min.io)